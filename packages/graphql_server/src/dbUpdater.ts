import { fetchTrendingRepos } from './scraping/githubScraping'
import { insertProject, updateProjectTrendingState, updateProject } from './processRepo'
import supabase from './supabase'
import { TrendingState } from '../types/processRepo'

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
 * Calculates time specified by the parameters
 * @param {number} hours - The number of hours to subtract.
 * @param {number} minutes - The number of minutes to subtract.
 * @returns {string} The specified time in ISO format.
 */
const getCutOffTime: (hours: number, minutes: number) => string = (
  hours: number,
  minutes: number
) => {
  const cutoffTime = new Date()
  cutoffTime.setHours(cutoffTime.getHours() - hours)
  cutoffTime.setMinutes(cutoffTime.getMinutes() - minutes)
  return cutoffTime.toISOString()
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
 * Goes through the list of repos and processes them one by one.
 * @param {string[]} repos - The repos to go through
 */
const goThroughListOfRepos = async (repos: string[], trendingState: TrendingState) => {
  for (let i = 0; i < repos.length / 2; i++) {
    const owner = repos[2 * i]
    const name = repos[2 * i + 1]
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
 * Checks if the repo is already in the db.
 * @param {string} name - The name  of the repo.
 * @param {string} b - The name of the owner of the repo.
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
