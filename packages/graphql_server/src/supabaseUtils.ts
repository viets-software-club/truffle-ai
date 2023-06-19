import supabase from './supabase'
import { getOrganizationInfo, getUserInfo } from './api/githubApi'
import { GitHubOrganization, GitHubInfo, GitHubUser } from '../types/githubApi'
import { LinkedInCompanyProfile } from '../types/linkedInScraping'
import { StarRecord } from '../types/starHistory'
import {
  OrganizationInsertion,
  OrganizationUpdate,
  PersonInsertion,
  ProjectUpdate,
  ProjectInfo
} from '../types/supabaseUtils'
import { PostgrestError } from '@supabase/supabase-js'

/*
Exports:
*/
export {
  bookmarkIsAlreadyInDB,
  deleteBookmark,
  deleteNotTrendingAndNotBookmarkedProjects,
  editBookmarkCategory,
  formatLinkedInCompanyData,
  formatGithubStats,
  getNotTrendingAndNotBookmarkedProjects,
  getOrganizationID,
  getPersonID,
  getProjectID,
  getTrendingAndBookmarkedProjects,
  insertBookmark,
  purgeTrendingState,
  renameBookmarkCategory,
  repoIsAlreadyInDB,
  turnIntoProjectInsertion,
  updateSupabaseProject
}

/**
 * Checks whether a bookmark is already on the database.
 * @param {string} userID - The user ID of the user in question.
 * @param {string} projectID - The project ID of the project in question.
 */
const bookmarkIsAlreadyInDB = async (userID: string, projectID: string) => {
  const { data } = await supabase
    .from('bookmark')
    .select()
    .eq('user_id', userID)
    .eq('project_id', projectID)
  console.log(data?.length ? true : false)
  return data?.length ? true : false
}

/**
 * Deletes all projects that are neither trending nor bookmarked.
 */
const deleteNotTrendingAndNotBookmarkedProjects = async () => {
  const { error: deletionError } = await supabase
    .from('project')
    .delete()
    .eq('is_bookmarked', false)
    .eq('is_trending_daily', false)
    .eq('is_trending_weekly', false)
    .eq('is_trending_monthly', false)

  if (deletionError) {
    console.error(
      'Error deleting not trending and not bookmarked projects. Error: \n',
      deletionError
    )
  } else {
    console.log('Deleted not trending and not bookmarked projects.')
  }
}

/**
 * Deletes a bookmark from the database
 * @param {string} userID - The user ID of the user in question.
 * @param {string} projectID - The project ID of the project in question.
 * @returns {PostgrestError} The error which might happen during the request.
 */
const deleteBookmark = async (userID: string, projectID: string) => {
  const { error } = await supabase
    .from('bookmark')
    .delete()
    .eq('user_id', userID)
    .eq('project_id', projectID)

  return error
}

/**
 * Edits the category for a bookmark on the database
 * @param {string} userID - The user ID of the user in question.
 * @param {string} projectID - The project ID of the project in question.
 * @returns {PostgrestError} The error which might happen during the request.
 */
const editBookmarkCategory = async (userID: string, projectID: string, newCategory: string) => {
  const { error } = await supabase
    .from('bookmark')
    .update({ category: newCategory })
    .eq('user_id', userID)
    .eq('project_id', projectID)

  return error
}

/**
 * Formats the github data into a format that can be inserted into the database.
 * @param {GitHubInfo} githubData - The github statistics to be formatted
 * @param {StarRecord} starHistory The starHistory to be formatted.
 * @returns {ProjectUpdate} The formatted data.
 */
const formatGithubStats = (githubData: GitHubInfo) => {
  const languages = githubData?.languages?.edges?.map((edge) => ({
    name: edge.node?.name || '',
    color: edge.node?.color || ''
  }))

  return {
    name: githubData?.name,
    about: githubData?.description,
    star_count: githubData?.stargazerCount,
    issue_count: githubData?.issues?.totalCount,
    fork_count: githubData?.forkCount,
    pull_request_count: githubData?.pullRequests?.totalCount,
    contributor_count: 1,
    github_url: githubData?.url,
    website_url: githubData?.homepageUrl,
    languages: languages,
    is_bookmarked: false
  }
}

/**
 * Formats the linkedInData to the format that is used in the db
 * @param {LinkedInCompanyProfile} linkedInData - The companny linkedIn data
 */
const formatLinkedInCompanyData = (linkedInData: LinkedInCompanyProfile): OrganizationUpdate => {
  return {
    crunchbase: linkedInData.crunchbaseUrl,
    founded: parseInt(linkedInData.founded, 10),
    hq_location: linkedInData.hqLocation,
    industries: linkedInData.industries,
    linkedin_about: linkedInData.about,
    linkedin_followers: linkedInData.followers,
    linkedin_updates: linkedInData.updates,
    linkedin_url: linkedInData.url,
    linkedin_website_url: linkedInData.website,
    number_of_employees: parseInt(linkedInData.employeesAmountInLinkedin),
    specialties: linkedInData.specialties
  }
}

/**
 * Gets the repositories that are not trending and not bookmarked
 * @returns {ProjectInfo[]} staleProjectsFormatted - A list of stale projects that are either trending or bookmarked
 */
const getNotTrendingAndNotBookmarkedProjects = async () => {
  const { data: staleProjects } = await supabase
    .from('project')
    .select('*')
    .eq('is_bookmarked', false)
    .eq('is_trending_daily', false)
    .eq('is_trending_weekly', false)
    .eq('is_trending_monthly', false)

  // the returned projects will reside in here
  const staleProjectsFormatted: ProjectInfo[] = []

  // if there are no stale projects return an empty array
  if (!staleProjects) return staleProjectsFormatted

  for (const staleProject of staleProjects) {
    let ownerLogin = ''
    let ownerID = staleProject.owning_organization
    // if the owner is no organization it must be a person
    if (!ownerID) {
      ownerID = staleProject.owning_person

      //get the personName from the database
      const { data: owningPerson } = await supabase
        .from('associated_person')
        .select('login')
        .eq('id', ownerID)
      ownerLogin = owningPerson?.[0]?.login || ''
    } else {
      // if it is a organization get the name from the database
      const { data: owningOrga } = await supabase
        .from('organization')
        .select('login')
        .eq('id', ownerID)
      ownerLogin = owningOrga?.[0]?.login || ''
    }

    if (!staleProject.name || !ownerID) {
      continue
    }
    staleProjectsFormatted.push({ name: staleProject.name, owner: ownerLogin })
  }

  return staleProjectsFormatted
}

/**
 * Returns the organization id for the given organization name.
 * It tries to get that id from the DB. If it is not in the DB it gets the data from github and inserts it into the DB.
 * @param {string} owner - The name of a github entity - either organization or person.
 * @returns {string} The id of the organization or null if the organization does not exist.
 */
const getOrganizationID = async (owner: string) => {
  const { data: organization, error: organizationRetrievalError } = await supabase
    .from('organization')
    .select('id')
    .eq('login', owner)
  organizationRetrievalError &&
    console.error(
      'Error getting organization',
      owner,
      'from database: \n',
      organizationRetrievalError
    )

  // if a organization with this name is already in the database return the id
  if (organization?.[0]?.id) return organization[0].id

  // if not get the data from github and insert it into the database
  const query = `query {
      organization(login: "${owner}") {
        login
        name
        avatarUrl
        repositories {
          totalCount
        }
        email
        websiteUrl
        twitterUsername
        url
    }
    }`

  const organizationGHData: GitHubOrganization | null = await getOrganizationInfo(
    query,
    'Bearer ' + process.env.GITHUB_API_TOKEN
  )

  // in the case that the organization does not exist return null
  if (!organizationGHData) return null

  const organizationDataDBFormat: OrganizationInsertion = {
    name: organizationGHData.name,
    login: organizationGHData.login,
    avatar_url: organizationGHData.avatarUrl,
    repository_count: organizationGHData?.repositories?.totalCount,
    email: organizationGHData.email,
    website_url: organizationGHData.websiteUrl,
    twitter_username: organizationGHData.twitterUsername,
    github_url: organizationGHData.url
  }

  const { error: organizationInsertionError } = await supabase
    .from('organization')
    .insert([organizationDataDBFormat])
  organizationInsertionError &&
    console.error('Error inserting organization into database: \n', organizationInsertionError)

  const { data: orga } = await supabase.from('organization').select('id').eq('login', owner)

  if (orga?.[0]?.id) {
    return orga[0].id
  } else {
    return null
  }
}

/**
 * Returns the user id for the given user name.
 * It tries to get that id from the DB. If it is not in the DB it gets the data from github and inserts it into the DB.
 * @param {string} owner - The name of a github entity - either organization or person.
 * @returns {string} The id of the organization or null if the organization does not exist.
 */
const getPersonID = async (owner: string) => {
  const { data: existingPerson, error: personRetrievalError } = await supabase
    .from('associated_person')
    .select('id')
    .eq('login', owner)
  personRetrievalError &&
    console.error('Error getting organization', owner, 'from database: \n', personRetrievalError)

  // if a person with this name is already in the database return the id
  if (existingPerson?.[0]?.id) return existingPerson[0].id

  // if not get the data from github and insert it into the database
  const query = `
  query {
    user(login: "${owner}") {
      login
      name
      avatarUrl
      repositories { totalCount }
      email
      websiteUrl
      twitterUsername
      url
    }
  }`

  const userGHData: GitHubUser | null = await getUserInfo(
    query,
    'Bearer ' + process.env.GITHUB_API_TOKEN
  )

  // in the case that the user does not exist return null
  if (!userGHData) return null

  const personDataDBFormat: PersonInsertion = {
    name: userGHData.name,
    login: userGHData.login,
    avatar_url: userGHData.avatarUrl,
    repository_count: userGHData?.repositories?.totalCount,
    email: userGHData.email,
    website_url: userGHData.websiteUrl,
    twitter_username: userGHData.twitterUsername,
    github_url: userGHData.url
  }

  const { error: personInsertionError } = await supabase
    .from('associated_person')
    .insert([personDataDBFormat])
  personInsertionError &&
    console.error('Error inserting organization into database: \n', personInsertionError)

  const { data: person } = await supabase.from('associated_person').select('id').eq('login', owner)

  return person?.[0]?.id ? person[0].id : null
}

/**
 * Returns the project id for the given repoName and owner.
 * @param {string} name - The name of the project.
 * @param {string} owner - The name of the owner of the project.
 * @returns {string} The id of the project or null if the project does not exist.
 */
const getProjectID = async (name: string, owner: string) => {
  // try to get a organization id
  let ownerID = await getOrganizationID(owner)
  if (!ownerID) {
    // if that does not work try to get a person id
    ownerID = await getPersonID(owner)
    if (!ownerID) {
      // if that fails as well return null
      return null
    }

    const { data: projects } = await supabase
      .from('project')
      .select('id')
      .eq('owning_person', ownerID)
      .eq('name', name)
    return projects?.[0]?.id ?? null
  }

  // if the organization id is not null try to get the project id
  const { data: projects } = await supabase
    .from('project')
    .select('id')
    .eq('owning_organization', ownerID)
    .eq('name', name)
  return projects?.[0]?.id ?? null
}

/**
 * Gets the repositories that are either trending or bookmarked
 * @returns {ProjectInfo[]} validProjectsFormatted - A list of projects that are either trending or bookmarked.
 */
const getTrendingAndBookmarkedProjects = async () => {
  // or syntax see here: https://supabase.com/docs/reference/javascript/or
  const { data: validProjects } = await supabase
    .from('project')
    .select('*')
    .or(
      'is_bookmarked.eq.true, is_trending_daily.eq.true, is_trending_weekly.eq.true, is_trending_monthly.eq.true'
    )

  const validProjectsFormatted: ProjectInfo[] = []

  // if there are no stale repos return an empty array
  if (!validProjects) return validProjectsFormatted

  for (const validProject of validProjects) {
    let ownerLogin = ''
    let ownerID = validProject.owning_organization
    // if the owner is no organization it must be a person
    if (!ownerID) {
      ownerID = validProject.owning_person

      //get the personName from the database
      const { data: owningPerson } = await supabase
        .from('associated_person')
        .select('login')
        .eq('id', ownerID)
      ownerLogin = owningPerson?.[0]?.login || ''
    } else {
      // if it is a organization get the name from the database
      const { data: owningOrga } = await supabase
        .from('organization')
        .select('login')
        .eq('id', ownerID)
      ownerLogin = owningOrga?.[0]?.login || ''
    }

    if (!validProject.name || !ownerID) {
      continue
    }
    validProjectsFormatted.push({ name: validProject.name, owner: ownerLogin })
  }

  return validProjectsFormatted
}

/**
 * Inserts a bookmark into supabase
 * @param {string} projectID - The projectID to be inserted
 * @param {string} userID - The userID to be inserted.
 * @param {string} category - The category to be inserted.
 * @returns {PostgrestError} The error which might happen during the request.
 */
const insertBookmark = async (projectID: string, userID: string, category: string) => {
  const { error } = await supabase.from('bookmark').insert({
    project_id: projectID,
    user_id: userID,
    category: category
  })

  return error
}

/**
 * Sets the trending states of all projects to false.
 * contributor_count comparison because I want to target all rows but have to specify a filter
 */
const purgeTrendingState = async () => {
  const { error: supabaseError } = await supabase
    .from('project')
    .update({ is_trending_daily: false, is_trending_weekly: false, is_trending_monthly: false })
    .neq('contributor_count', -1000)
  supabaseError && console.error('Error while purging trending state: \n', supabaseError)
}

/**
 * Checks if the repo is already in the db.
 * @param {string} name - The name  of the repo.
 * @param {string} owner - The name of the owner of the repo.
 * @returns {boolean} True if the repo is already in the db.
 */
const repoIsAlreadyInDB = async (name: string, owner: string) => {
  // check if there are repositories with the same name
  const { data: matchingRepos, error: checkRepoIfRepoInDBError } = await supabase
    .from('project')
    .select('*')
    .eq('name', name)
  checkRepoIfRepoInDBError &&
    console.error(
      'Error while checking if',
      name,
      'is in the database: \n',
      checkRepoIfRepoInDBError
    )
  // if there are no repositories with the same name return false
  if (!matchingRepos) return false

  // for each of those with the same name check if the owner has the same name
  for (const repo of matchingRepos) {
    // if the owner is an organization
    if (repo.owning_organization) {
      const { data: owning_organization } = await supabase
        .from('organization')
        .select('*')
        .eq('id', repo.owning_organization)

      // the owner has the same name -> the repo is already in the database
      if (owning_organization?.[0]?.login === owner) return true
    } else {
      const { data: owning_person } = await supabase
        .from('associated_person')
        .select('*')
        .eq('id', repo.owning_person)

      // the owner has the same name -> the repo is already in the database
      if (owning_person?.[0]?.login === owner) return true
    }
  }

  return false
}

/**
 * Renames a bookmark category.
 * @param {string} userID - The user ID of the user in question.
 * @param {string} projectID - The project ID of the project in question.
 * @returns {PostgrestError} The error which might happen during the request.
 */
const renameBookmarkCategory = async (userID: string, oldCategory: string, newCategory: string) => {
  const { error } = await supabase
    .from('bookmark')
    .update({ category: newCategory })
    .eq('user_id', userID)
    .eq('category', oldCategory)

  return error
}

/**
 * Formats the github data into a format that can be inserted into the database.
 * The Format can also be used for database updates.
 * @param {GitHubInfo} githubData - The github statistics to be formatted
 * @param {StarRecord} starHistory The starHistory to be formatted.
 * @returns {ProjectInsertion} The formatted data.
 */
const turnIntoProjectInsertion = (githubData: GitHubInfo, starHistory: StarRecord[]) => {
  const languages = githubData?.languages?.edges?.map((edge) => ({
    name: edge.node?.name || '',
    color: edge.node?.color || ''
  }))

  return {
    name: githubData?.name,
    about: githubData?.description,
    star_count: githubData?.stargazerCount,
    issue_count: githubData?.issues?.totalCount,
    fork_count: githubData?.forkCount,
    pull_request_count: githubData?.pullRequests?.totalCount,
    contributor_count: 1,
    github_url: githubData?.url,
    website_url: githubData?.homepageUrl,
    languages: languages,
    star_history: starHistory,
    is_bookmarked: false
  }
}

/**
 * Updates the supabase entry of a repo
 * @param {string} name - The name of the repo.
 * @param {string} owner - The name of the owner of the repo.
 * @param {ProjectUpdate} updatedProject - The Changes that should be put on supabase
 * @returns {boolean} - Whether the update was successful
 */
const updateSupabaseProject = async (
  name: string,
  owner: string,
  updatedProject: ProjectUpdate
) => {
  //check whether the repo is in the db
  if (!(await repoIsAlreadyInDB(name, owner))) {
    return false
  }
  const owningOrganizationID = await getOrganizationID(owner)

  const { error: ownerUpdateError } = await supabase
    .from('project')
    .update(updatedProject)
    .eq('name', name)
    .eq('owning_organization', owningOrganizationID)

  if (!ownerUpdateError) return true
  const owningPersonID = await getPersonID(owner)
  const { error: ownerUpdateError2 } = await supabase
    .from('project')
    .update(updatedProject)
    .eq('name', name)
    .eq('owning_person', owningPersonID)

  return ownerUpdateError2 ? false : true
}
