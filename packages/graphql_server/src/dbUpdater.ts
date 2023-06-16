import supabase from './supabase'
import {
  updateProjectELI5,
  updateProjectGithubStats,
  updateProjectSentiment,
  updateProjectTrendingState,
  updateProjectTrendingStatesForListOfRepos
} from './updateProject'
import {
  getOrganizationID,
  getPersonID,
  turnIntoProjectInsertion,
  updateSupabaseProject,
  purgeTrendingState,
  repoIsAlreadyInDB,
  deleteNotTrendingAndNotBookmarkedProjects,
  getTrendingAndBookmarkedProjects
} from './supabaseUtils'
import { getGithubData, getCutOffTime } from './utils'
import { fetchTrendingRepos } from './scraping/githubScraping'
import { getRepoStarRecords } from './starHistory/starHistory'
/* 
Types: 
*/
import { GitHubInfo } from '../types/githubApi'
import { StarRecord } from '../types/starHistory'
import { ProjectInsertion, ProjectUpdate } from '../types/supabaseUtils'
import { TrendingState } from '../types/updateProject'
import { create } from 'domain'

const newDbUpdater = async (includeDeletion: boolean) => {
  // set all trending states of the repos in the db to false
  await purgeTrendingState()

  // get the trending repos
  const dailyTrendingRepos = await fetchTrendingRepos('daily')
  const weeklyTrendingRepos = await fetchTrendingRepos('weekly')
  const monthlyTrendingRepos = await fetchTrendingRepos('monthly')

  // update the trending states of the repos currently on the db
  await updateProjectTrendingStatesForListOfRepos(dailyTrendingRepos, 'is_trending_daily')
  await updateProjectTrendingStatesForListOfRepos(weeklyTrendingRepos, 'is_trending_weekly')
  await updateProjectTrendingStatesForListOfRepos(monthlyTrendingRepos, 'is_trending_monthly')

  if (includeDeletion) {
    await deleteNotTrendingAndNotBookmarkedProjects()
  }

  const projectsToBeUpdated = await getTrendingAndBookmarkedProjects()
  // here everything that should be updated daily is updated. atm this is just github stats
  for (const project of projectsToBeUpdated) {
    await updateProjectGithubStats(project.name, project.owner)
  }
}

/**
 * Goes through the list of repos inserts them and updates all data sources for them.
 * @param {string[]} repos - The repos to go through
 * @param {TrendingState} trendingState - The trending state to set
 */
const processTrendingRepos = async (repos: string[], trendingState: TrendingState) => {
  for (let i = 0; i < repos.length / 2; i++) {
    const owner = repos[2 * i]
    const name = repos[2 * i + 1]
    console.log(
      '###################### Processing',
      name,
      'owned by',
      owner,
      '######################'
    )
    // if it is in the database already only the trending state has to be updated
    await createProject(name, owner)
  }
}

// @Todo: documentation
const createProject = async (repoName: string, owner: string) => {
  if (await repoIsAlreadyInDB(repoName, owner)) {
    return
  } else {
    const { error: insertionError } = await supabase.from('project').insert({ name: repoName })
    if (insertionError) {
      console.log(
        'Error while inserting project',
        repoName,
        'owned by',
        owner,
        ': \n',
        insertionError
      )
      return
    } else {
      console.log('inserted project', repoName, 'owned by', owner)
    }
  }
}

/**
 * Updates the database with the current trending repositories.
 * Also Deletes or updates old projects.
 */
export const dbUpdater = async () => {
  // set all trending states of the repos in the db to false
  await purgeTrendingState()

  // get the new trending repos and process them one by one
  // here the trending states of the repos are also set
  await goThroughListOfRepos(await fetchTrendingRepos('daily'), 'is_trending_daily')
  await goThroughListOfRepos(await fetchTrendingRepos('weekly'), 'is_trending_weekly')
  await goThroughListOfRepos(await fetchTrendingRepos('monthly'), 'is_trending_monthly')

  // delete all projects that are not bookmarked and older than 4 days,
  // this way a repo that is trending on monday and wednesday won't be deleted on tuesday
  const { error: deleteReposError } = await supabase
    .from('project')
    .delete()
    .eq('is_bookmarked', false)
    .lt('created_at', getCutOffTime(96, 0))
  deleteReposError && console.error('Error while deleting old projects: \n', deleteReposError)

  // get all projects that have been added to the database before the cut off time
  // @Todo: repo update should not depend on insertion date but rather on something like a last updated date
  const { data: oldRepos, error: repoRetrievalError } = await supabase
    .from('project')
    .select('name, owning_organization, owning_person')
    .lt('created_at', getCutOffTime(23, 50))
  repoRetrievalError && console.error('Error while getting all projects: \n', repoRetrievalError)

  // get all organizations in the database
  const { data: organizations, error: organizationsRetrievalError } = await supabase
    .from('organization')
    .select('id, name')
  organizationsRetrievalError &&
    console.error('Error while getting all organizations: \n', organizationsRetrievalError)

  // get all persons in the database
  const { data: people, error: personsRetrievalError } = await supabase
    .from('associated_person')
    .select('id, name')
  personsRetrievalError &&
    console.error('Error while getting all persons: \n', personsRetrievalError)

  // update all old projects
  if (oldRepos) {
    for (const repo of oldRepos) {
      let owner = organizations?.filter((org) => org.id === repo.owning_organization)[0]?.name
      if (!owner) owner = people?.filter((person) => person.id === repo.owning_person)[0]?.name
      if (owner) await updateProject(repo.name as string, owner)
    }
  }
}

/**
 * Goes through the list of repos and processes them one by one.
 * @param {string[]} repos - The repos to go through
 */
const goThroughListOfRepos = async (repos: string[], trendingState: TrendingState) => {
  for (let i = 0; i < repos.length / 2; i++) {
    const owner = repos[2 * i]
    const name = repos[2 * i + 1]
    console.log(
      '###################### Processing',
      name,
      'owned by',
      owner,
      '######################'
    )
    // if it is in the database already only the trending state has to be updated
    if (await repoIsAlreadyInDB(name, owner)) {
      console.log(name, 'owned by', owner, 'is already in the database')
      // update the trending state
      await updateProjectTrendingState(name, owner, trendingState)
    } else {
      await insertProject(name, owner, trendingState)
    }
  }
}

/**
 * Adds a repo to the database.
 * This method should only be called when it is certain that a repo is not in the database yet.
 * @param {string} name - The name of the repo.
 * @param {string} owner - The name of the owner of the repo.
 * @returns {boolean} True if the repo was added to the database.
 */
export const insertProject = async (name: string, owner: string, trendingState: TrendingState) => {
  // hacky solution for now. Only if the trendingState is null is it needed to check if
  // the repo is already in the database, because right now when this function is called with a trending state
  // then that call comes from dbUpdater.ts and there it is already checked if the repo is in the database
  if (!trendingState && (await repoIsAlreadyInDB(name, owner))) {
    return false
  }
  // get the github data
  const githubData: GitHubInfo | null = await getGithubData(name, owner)
  if (!githubData) return false
  // get the starHistory
  const starHistory: StarRecord[] = await getRepoStarRecords(
    owner + '/' + name,
    process.env.GITHUB_API_TOKEN,
    25
  )
  // convert the github data into a format that can be inserted into the database
  const projectInsertion: ProjectInsertion = turnIntoProjectInsertion(githubData, starHistory)

  projectInsertion.owning_organization = await getOrganizationID(owner)
  projectInsertion.owning_person = await getPersonID(owner)
  if (trendingState) {
    projectInsertion[trendingState] = true
  }

  // insert the repo into the database
  const { error: insertionError } = await supabase.from('project').insert([projectInsertion])

  if (!insertionError) {
    // if it got inserted, then add the other data sources
    await updateProjectSentiment(name, owner)
    await updateProjectELI5(name, owner)
    console.log('Inserted ', name, 'owned by', owner)
    return true
  }

  console.log('Error while inserting ', name, 'owned by', owner, ' \n Error: \n ', insertionError)
  return false
}

/**
 * Updates a repo that is currently in the db.
 * Ath the moment this method only updates the github stats and star history.
 * In the future it will update gh stats + twitter on a daily and everything else on a weekly basis
 * @param {string} name - The name of the repo.
 * @param {string} owner - The name of the owner of the repo.
 */
const updateProject = async (name: string, owner: string) => {
  // get the github data
  const githubData: GitHubInfo | null = await getGithubData(name, owner)
  if (!githubData) return null
  // get the starHistory
  const starHistory: StarRecord[] = await getRepoStarRecords(
    owner + '/' + name,
    process.env.GITHUB_API_TOKEN,
    25
  )
  // convert the github data into a format that can be inserted into the database. ProjectUpdate and ProjectInsertion are virtually  the same
  const projectUpdate: ProjectUpdate = turnIntoProjectInsertion(
    githubData,
    starHistory
  ) as ProjectUpdate

  const updated = await updateSupabaseProject(name, owner, projectUpdate)

  updated ? console.log('updated', name, 'owned by', owner) : null
}
