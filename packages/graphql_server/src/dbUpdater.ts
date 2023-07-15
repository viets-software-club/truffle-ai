import supabaseClient from './supabaseClient'
import {
  updateAllProjectInfo,
  updateProjectForkHistory,
  updateProjectGithubStats,
  updateProjectStarHistory,
  updateProjectTrendingStatesForListOfRepos,
  updateProjectTweets
} from './updateProject'
import {
  getOrganizationID,
  getPersonID,
  purgeTrendingState,
  repoIsAlreadyInDB,
  deleteNotTrendingAndNotBookmarkedProjects,
  getTrendingAndBookmarkedProjects,
  deleteStaleOrganizations,
  deleteStaleAssociatedPersons
} from './supabaseUtils'
import { fetchTrendingRepos } from './scraping/githubScraping'
import { TrendingState } from '../types/updateProject'
import { ProjectInfo } from '../types/supabaseUtils'

export const automaticDbUpdater = async () => {
  console.log('Auto-DB-updater run at', new Date().toLocaleString())

  const currentDate = new Date()
  const currentMinutes = currentDate.getMinutes()
  const currentHour = currentDate.getHours()
  const currentDayOfWeek = currentDate.getDay()

  // Check if it's 4am on Sunday
  if (currentHour === 4 && currentDayOfWeek === 0) {
    await dailyDbUpdater(true)
    return
  }
  // Check if it's 4am on any other day of the week
  if (currentHour === 4) {
    await dailyDbUpdater(false)
    return
  }

  await hourlyDbUpdater()
}

/**
 * Updates the github stats of the trending and bookmarked projects
 */
export const hourlyDbUpdater = async () => {
  console.log('HourlyDbUpdater called...')
  // get the trending or bookmarked repos
  const projectsToBeUpdated = await getTrendingAndBookmarkedProjects()

  for (const project of projectsToBeUpdated) {
    await updateProjectGithubStats(project.name, project.owner)
  }
}

/**
 * Updates (and deletes) existing projects and inserts new trending ones.
 * @param {boolean} includeDeletion - If true all repos that are not trending and not bookmarked are deleted.
 */
export const dailyDbUpdater = async (includeDeletion: boolean) => {
  // set all trending states of the repos in the db to false
  console.log('Purging trending state...')
  await purgeTrendingState()

  // get the trending repos
  console.log('Fetching trending repos...')
  const dailyTrendingRepos = await fetchTrendingRepos('daily')
  const weeklyTrendingRepos = await fetchTrendingRepos('weekly')
  const monthlyTrendingRepos = await fetchTrendingRepos('monthly')

  // update the trending states of the repos currently on the db
  console.log('Updating trending states...')
  await updateProjectTrendingStatesForListOfRepos(dailyTrendingRepos, 'is_trending_daily')
  await updateProjectTrendingStatesForListOfRepos(weeklyTrendingRepos, 'is_trending_weekly')
  await updateProjectTrendingStatesForListOfRepos(monthlyTrendingRepos, 'is_trending_monthly')

  // if includeDeletion is true all repos that are not trending and not bookmarked are deleted
  // also stale organizations and associated persons are deleted
  if (includeDeletion) {
    console.log('Deleting stale projects...')
    await deleteNotTrendingAndNotBookmarkedProjects()
    console.log('Deleting stale organizations...')
    await deleteStaleOrganizations()
    console.log('Deleting stale associated persons...')
    await deleteStaleAssociatedPersons()
  }

  // update the trending or bookmarked repos
  const projectsToBeUpdated = await getTrendingAndBookmarkedProjects()
  // here everything that should be updated daily is updated.
  console.log('Updating existing trending and bookmarked projects...')
  for (const project of projectsToBeUpdated) {
    await updateProjectDaily(project)
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
    console.log('#### Processing', name, 'owned by', owner, '###')
    // if it is in the database already only the trending state has to be updated
    await createProject(name, owner, trendingState)
  }
}

/**
 * Updates all stats for a project, that should be updated daily.
 * @param {ProjectInfo} project - The project to update
 */
export const updateProjectDaily = async (project: ProjectInfo) => {
  await updateProjectGithubStats(project.name, project.owner)
  await updateProjectStarHistory(project.name, project.owner)
  await updateProjectForkHistory(project.name, project.owner)
  await updateProjectTweets(project.name, project.owner)
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
