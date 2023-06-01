import supabase from './supabase'
import {
  getOrganizationID,
  getGithubData,
  getPersonID,
  turnIntoProjectInsertion
} from './dataAggregation'
import { ProjectInsertion, ProjectUpdate } from '../types/dataAggregation'
import { GitHubInfo } from '../types/githubApi'
import { getRepoStarRecords } from './starHistory/starHistory'
import { StarRecord } from '../types/starHistory'
import { TrendingState } from '../types/processRepo'
import { fetchRepositoryReadme } from './scraping/githubScraping'
import { getELI5DescriptionForRepositoryFromText } from './api/openAIApi'

/**
 * Adds a repo to the database.
 * This method should only be called when it is certain that a repo is not in the database yet.
 * @param {string} name - The name of the repo.
 * @param {string} owner - The name of the owner of the repo.
 */
export const insertProject = async (name: string, owner: string, trendingState: TrendingState) => {
  // get the github data
  const githubData: GitHubInfo | null = await getGithubData(name, owner)
  if (!githubData) return null
  // get the starHistory
  const starHistory: StarRecord[] = await getRepoStarRecords(
    owner + '/' + name,
    process.env.GITHUB_API_TOKEN,
    10
  )
  // convert the github data into a format that can be inserted into the database
  const projectInsertion: ProjectInsertion = turnIntoProjectInsertion(githubData, starHistory)

  projectInsertion.owning_organization = await getOrganizationID(owner)
  projectInsertion.owning_person = await getPersonID(owner)

  projectInsertion[trendingState] = true

  // insert the repo into the database
  const { error: insertionError } = await supabase.from('project').insert([projectInsertion])
  await updateProjectELI5(name, owner)
  insertionError &&
    console.log('Error while inserting ', name, 'owned by', owner, ' \n Error: \n ', insertionError)
  !insertionError && console.log('Inserted ', name, 'owned by', owner)
}

/**
 * Updates a repo that is currently in the db.
 * Ath the moment this method only updates the github stats and star history.
 * In the future it will update gh stats + twitter on a daily and everything else on a weekly basis
 * @param {string} name - The name of the repo.
 * @param {string} owner - The name of the owner of the repo.
 */
export const updateProject = async (name: string, owner: string) => {
  // get the github data
  const githubData: GitHubInfo | null = await getGithubData(name, owner)
  if (!githubData) return null
  // get the starHistory
  const starHistory: StarRecord[] = await getRepoStarRecords(
    owner + '/' + name,
    process.env.GITHUB_API_TOKEN,
    10
  )
  // convert the github data into a format that can be inserted into the database. ProjectUpdate and ProjectInsertion are virtually  the same
  const projectUpdate: ProjectUpdate = turnIntoProjectInsertion(
    githubData,
    starHistory
  ) as ProjectUpdate

  const updated = await updateSupabaseProject(name, owner, projectUpdate)

  updated ? console.log('updated ', name, 'owned by', owner) : null
}

/**
 * Updates the trending state of a repo
 * @param {string} name - The name of the repo.
 * @param {string} owner - The name of the owner of the repo.
 * @param {string} trendingState - The trending state that should be set to true
 */
export const updateProjectTrendingState = async (
  name: string,
  owner: string,
  trendingState: TrendingState
) => {
  const projectUpdate: ProjectUpdate = {}
  projectUpdate[trendingState] = true

  const updated = await updateSupabaseProject(name, owner, projectUpdate)
  updated ? console.log('updated trending state of ', name, ' to ', trendingState) : null
}

/**
 * Updates the supabase entry of a repo
 * @param {string} name - The name of the repo.
 * @param {string} owner - The name of the owner of the repo.
 * @param {ProjectUpdate} updatedProject - The Changes that should be put on supabase
 * @returns {boolean} - Whether the update was successful
 */
export const updateSupabaseProject = async (
  name: string,
  owner: string,
  updatedProject: ProjectUpdate
) => {
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

/**
 * Updates the eli5 of a repo
 * @param {string} name - The name of the repo.
 * @param {string} owner - The name of the owner of the repo.
 */
export const updateProjectELI5 = async (name: string, owner: string) => {
  try {
    const readMe = (await fetchRepositoryReadme(owner, name)).slice(0, 2500)
    const description = await getELI5DescriptionForRepositoryFromText(
      readMe,
      process.env.OPENAI_API_KEY
    )
    const updated = await updateSupabaseProject(name, owner, { eli5: description })
    updated && console.log('updated eli5 of ', name, 'owned by', owner)
  } catch (e) {
    console.error('Error while fetching readme for ', name, 'owned by', owner)
    await updateSupabaseProject(name, owner, {
      eli5: 'ELI5/description could not be generated for this project'
    })
  }
}
