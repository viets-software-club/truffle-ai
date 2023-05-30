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

/**
 * Adds a repo to the database.
 * This method should only be called when it is certain that a repo is not in the database yet.
 * @param {string} name - The name of the repo.
 * @param {string} owner - The name of the owner of the repo.
 */
export const insertProject = async (name: string, owner: string) => {
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

  // insert the repo into the database
  const { error: insertionError } = await supabase.from('project').insert([projectInsertion])
  insertionError &&
    console.log('Error while inserting ', name, 'owned by', owner, ' \n Error: \n ', insertionError)
  !insertionError && console.log('Inserted ', name, 'owned by', owner)
}

export const updateProjectTrendingState = async (
  name: string,
  owner: string,
  trendingState: TrendingState
) => {
  console.log('updating trending state of ', name, ' to ', trendingState)
  const projectUpdate: ProjectUpdate = {}
  projectUpdate[trendingState] = true

  const owningOrganizationID = await getOrganizationID(owner)

  const { error: updateOrgError } = await supabase
    .from('project')
    .update(projectUpdate)
    .eq('name', name)
    .eq('owning_organization', owningOrganizationID)

  if (!updateOrgError) return
  const owningPersonID = await getPersonID(owner)
  await supabase
    .from('project')
    .update(projectUpdate)
    .eq('name', name)
    .eq('owning_person', owningPersonID)
}
