import supabaseClient from './supabaseClient'
import {
  updateAllProjectInfo,
  updateProjectGithubStats,
  updateProjectTrendingStatesForListOfRepos
} from './updateProject'
import {
  getOrganizationID,
  getPersonID,
  purgeTrendingState,
  repoIsAlreadyInDB,
  deleteNotTrendingAndNotBookmarkedProjects,
  getTrendingAndBookmarkedProjects
} from './supabaseUtils'
import { fetchTrendingRepos } from './scraping/githubScraping'
import { TrendingState } from '../types/updateProject'

/**
 * Updates (and deletes) existing projects and inserts new trending ones.
 * @param {boolean} includeDeletion - If true all repos that are not trending and not bookmarked are deleted.
 */
export const dailyDbUpdater = async (includeDeletion: boolean) => {
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

  // if includeDeletion is true all repos that are not trending and not bookmarked are deleted
  if (includeDeletion) {
    await deleteNotTrendingAndNotBookmarkedProjects()
  }

  // update the trending or bookmarked repos
  const projectsToBeUpdated = await getTrendingAndBookmarkedProjects()
  // here everything that should be updated daily is updated. atm this is just github stats
  for (const project of projectsToBeUpdated) {
    await updateProjectGithubStats(project.name, project.owner)
  }

  // insert and enrich with data the trending repos
  // it is checked whether they are in the db already
  await processTrendingRepos(dailyTrendingRepos, 'is_trending_daily')
  await processTrendingRepos(weeklyTrendingRepos, 'is_trending_weekly')
  await processTrendingRepos(monthlyTrendingRepos, 'is_trending_monthly')
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
    await createProject(name, owner, trendingState)
  }
}

/**
 * Creates a project in the database.
 * Inserts it then callsall data gathering services for it.
 * @param {string} repoName - The name of the repo.
 * @param {string} owner - The name of the owner of the repo.
 */
export const createProject = async (
  repoName: string,
  owner: string,
  trendingState: TrendingState
) => {
  if (await repoIsAlreadyInDB(repoName, owner)) {
    return false
  } else {
    const { error: insertionError } = await supabaseClient.from('project').insert({
      name: repoName,
      owning_organization: await getOrganizationID(owner),
      owning_person: await getPersonID(owner)
    })
    if (insertionError) {
      console.log(
        'Error while inserting project',
        repoName,
        'owned by',
        owner,
        ': \n',
        insertionError
      )
      return false
    } else {
      console.log('inserted project', repoName, 'owned by', owner)
      // update all the data sources. trending state may be null
      await updateAllProjectInfo(repoName, owner, trendingState)
      return true
    }
  }
}
