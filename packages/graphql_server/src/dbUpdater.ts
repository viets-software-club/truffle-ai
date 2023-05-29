import { fetchTrendingRepos } from './scraping/githubScraping'
import { processRepo } from './processRepo'
import supabase from './supabase'

/**
 * Updates the database with the current trending repositories. Also Deletes old projects.
 */
export const dbUpdater = async () => {
  // delete all projects that are not bookmarked and older than 23 hours and 50 minutes
  const { error: deleteReposError } = await supabase
    .from('project')
    .delete()
    .eq('is_bookmarked', false)
    .lt('created_at', getCutOffTime(23, 50))
  deleteReposError && console.error('Error while deleting old projects: \n', deleteReposError)

  // get all projects that remain in the database
  const { data: existingRepos, error: repoRetrievalError } = await supabase
    .from('project')
    .select('name, owning_organization, owning_person')
  repoRetrievalError && console.error('Error while getting all projects: \n', repoRetrievalError)

  // get all organizations in the database
  const { data: organizations, error: organizationsRetrievalError } = await supabase
    .from('organization')
    .select('id, name')
  organizationsRetrievalError &&
    console.error('Error while getting all organizations: \n', organizationsRetrievalError)

  const { data: people, error: personsRetrievalError } = await supabase
    .from('associated_person')
    .select('id, name')
  personsRetrievalError &&
    console.error('Error while getting all persons: \n', personsRetrievalError)

  // update all remaining projects
  if (existingRepos) {
    for (const repo of existingRepos) {
      let owner = organizations?.filter((org) => org.id === repo.owning_organization)[0]?.name
      if (!owner) owner = people?.filter((person) => person.id === repo.owning_person)[0]?.name
      if (owner) updateRepo(repo.name, owner)
    }
  }

  // get the new trending repos and process them one by one
  await goThroughListOfRepos(await fetchTrendingRepos('daily'))
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

// daily: gh + twitter
// weekly: rest
// @TODO: implement
const updateRepo = (name: string, owner: string) => {
  return null
}

/**
 * Goes through the list of repos and processes them one by one.
 * @param {string[]} repos - The repos to go through
 */
const goThroughListOfRepos = async (repos: string[]) => {
  for (let i = 0; i < repos.length / 2; i++) {
    const owner = repos[2 * i]
    const name = repos[2 * i + 1]
    await processRepo(name, owner)
  }
}
