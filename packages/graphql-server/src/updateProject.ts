import { GitHubInfo, ProjectFounder } from '../types/githubApi'
import { ProjectUpdate } from '../types/supabaseUtils'
import { TrendingState } from '../types/updateProject'
import { getContributorCount, getRepoFounders, getRepositoryTopics } from './api/githubApi'
import { getCategoriesFromGPT, getELI5FromReadMe, getHackernewsSentiment } from './api/openAIApi'
import { getRepoForkRecords } from './githubHistory/forkHistory'
import { getRepoStarRecords } from './githubHistory/starHistory'
import { fetchRepositoryReadme } from './scraping/githubScraping'
import { searchHackerNewsStories } from './scraping/hackerNewsScraping'
import { getPostsForHashtag } from './scraping/twitterScraping'
import supabaseClient from './supabaseClient'
import {
  formatGithubStats,
  getPersonID,
  getProjectAbout,
  getProjectID,
  repoIsAlreadyInDB,
  updateSupabaseProject
} from './supabaseUtils'
import { getGithubData } from './utils'

export {
  updateAllProjectInfo,
  updateProjectCategories,
  updateProjectELI5,
  updateProjectForkHistory,
  updateProjectFounders,
  updateProjectGithubStats,
  updateProjectSentiment,
  updateProjectStarHistory,
  updateProjectTrendingState,
  updateProjectTrendingStatesForListOfRepos,
  updateProjectTweets
}

/**
 * Runs all data gathering functions for a repo
 * @param {string} repoName - The name of the repo.
 * @param {string} owner - The name of the owner of the repo.
 * @param {TrendingState} trendingState - The trending state of the repo. Can be null as well.
 */
const updateAllProjectInfo = async (
  repoName: string,
  owner: string,
  trendingState: TrendingState
) => {
  if (!(await repoIsAlreadyInDB(repoName, owner))) {
    return
  }
  await updateProjectGithubStats(repoName, owner)
  await updateProjectELI5(repoName, owner)
  await updateProjectFounders(repoName, owner)
  await updateProjectSentiment(repoName, owner)
  await updateProjectStarHistory(repoName, owner)
  await updateProjectForkHistory(repoName, owner)
  // await updateProjectTweets(repoName, owner)
  await updateProjectCategories(repoName, owner)
  if (trendingState) {
    await updateProjectTrendingState(repoName, owner, trendingState)
  }
}

const updateProjectCategories = async (repoName: string, owner: string) => {
  if (!(await repoIsAlreadyInDB(repoName, owner))) {
    return
  }
  const repoGithubTopics = await getRepositoryTopics(repoName, owner, process.env.GITHUB_API_TOKEN)

  const repoAbout = await getProjectAbout(repoName, owner)

  const categories = await getCategoriesFromGPT(repoGithubTopics, repoAbout ?? null)

  await updateSupabaseProject(repoName, owner, { categories: categories })
}

/**
 * Updates the eli5 of a repo
 * @param {string} name - The name of the repo.
 * @param {string} owner - The name of the owner of the repo.
 */
const updateProjectELI5 = async (name: string, owner: string) => {
  try {
    const readMe = (await fetchRepositoryReadme(owner, name)).slice(0, 2500)
    const description = await getELI5FromReadMe(readMe)
    const updated = await updateSupabaseProject(name, owner, { eli5: description })
    updated && console.log('Updated eli5 of', name, 'owned by', owner)
  } catch (e) {
    console.error('Error while fetching readme for', name, 'owned by', owner)
    await updateSupabaseProject(name, owner, {
      eli5: 'ELI5/description could not be generated for this project'
    })
  }
}

/**
 * Updates the founders of a repo. That means that it inserts the founders into the db if they are not already there
 * Actually the founders will not change over time with how we get them right now (first committers)
 * @param {string} repoName - The name of the repo.
 * @param {string} owner - The name of the owner of the repo.
 */
const updateProjectFounders = async (repoName: string, owner: string) => {
  const founders: ProjectFounder[] = await getRepoFounders(owner, repoName)
  const projectID: string | null = await getProjectID(repoName, owner)

  //if the projectID is falsy return
  if (!projectID) {
    return
  }

  for (const founder of founders) {
    const founderID: string | null = await getPersonID(founder.login)
    if (!founderID) {
      // getPersonID inserts the user if they don't exist yet,
      // so founderID being null means that the user is not on the db and was not inserted
      continue
    }
    const { data: alreadyExists } = await supabaseClient
      .from('founded_by')
      .select()
      .eq('founder_id', founderID)
      .eq('project_id', projectID)

    if (alreadyExists?.[0]) {
      continue
    }

    const { error: insertError } = await supabaseClient
      .from('founded_by')
      .insert({ founder_id: founderID, project_id: projectID })

    !insertError
      ? console.log('Added', founder.login, 'as founder for', repoName, 'owned by', owner)
      : console.log(
          'Error while adding',
          founder.login,
          'as founder for',
          repoName,
          'owned by',
          owner
        )
  }
}

const updateProjectForkHistory = async (repoName: string, owner: string) => {
  if (!(await repoIsAlreadyInDB(repoName, owner))) {
    return
  }
  try {
    const forkHistory = await getRepoForkRecords(
      `${owner}/${repoName}`,
      process.env.GITHUB_API_TOKEN,
      10
    )
    await updateSupabaseProject(repoName, owner, { fork_history: forkHistory })
  } catch (e) {
    console.error('Error in updateProjectForkHistory:', e)
  }
}

/**
 * Updates the github stats of a repo.
 * Not the star-history though.
 * @param {string} repoName - The name of the repo.
 * @param {string} owner - The name of the owner of the repo.
 */
const updateProjectGithubStats = async (name: string, owner: string) => {
  if (!(await repoIsAlreadyInDB(name, owner))) return
  const githubStats: GitHubInfo | null = await getGithubData(name, owner)
  if (!githubStats) {
    console.error('Could not get github stats for', name, 'owned by', owner)
    return
  }

  // *0.9 because the contributor count is not 100% accurate. It is an approximation.
  // *10 /10 to round to one decimal place
  //@Todo: refine approximation approach
  const contributorCount = Math.round(
    (await getContributorCount(owner, name, process.env.GITHUB_API_TOKEN)) * 0.9
  )

  // *10, round, and /10 to round to one decimal place
  const issuesPerContributor =
    Math.round((githubStats.issues.totalCount / contributorCount) * 10) / 10
  const forksPerContributor = Math.round((githubStats.forkCount / contributorCount) * 10) / 10

  const updated = await updateSupabaseProject(name, owner, {
    ...formatGithubStats(githubStats),
    issues_per_contributor: issuesPerContributor,
    forks_per_contributor: forksPerContributor,
    contributor_count: contributorCount
  })

  if (!updated) {
    console.error('Could not update github stats for', name, 'owned by', owner)
  } else {
    console.log('Updated github stats for', name, 'owned by', owner)
  }
}

/**
 * Updates the HNsentiment and the corresponding links towards a repo
 * @param {string} repoName - The name of the repo.
 * @param {string} owner - The name of the owner of the repo.
 */
const updateProjectSentiment = async (repoName: string, owner: string) => {
  let allComments = ''
  const allLinks: string[] = []

  let currentStory = await searchHackerNewsStories(owner + '/' + repoName)
  if (currentStory) {
    allComments += '\n Next group of comments: \n' + currentStory.comments.join('\n')
    allLinks.push(...currentStory.linksToPosts)
  }

  currentStory = await searchHackerNewsStories(repoName)
  if (currentStory) {
    allComments += '\n Next group of comments: \n' + currentStory.comments.join('\n')
    allLinks.push(...currentStory.linksToPosts)
  }

  if (!allComments) {
    console.error('No comments found for', repoName, 'owned by', owner)
    return
  }

  const sentimentSummary = await getHackernewsSentiment(allComments)
  if (
    await updateSupabaseProject(repoName, owner, {
      hackernews_sentiment: sentimentSummary,
      hackernews_stories: allLinks
    })
  ) {
    console.log('Updated sentiment for', repoName, 'owned by', owner)
  } else {
    console.error('Error while updating sentiment for', repoName, 'owned by', owner)
  }
}

/**
 * Updates the Star history of a repo.
 * @param {string} repoName - The name of the repo.
 * @param {string} owner - The name of the owner of the repo.
 */
const updateProjectStarHistory = async (repoName: string, owner: string) => {
  if (!(await repoIsAlreadyInDB(repoName, owner))) {
    return
  }
  const MAX_NUMBER_OF_REQUESTS = 10 // this is also roughly the number of star history data points
  try {
    const starHistory = await getRepoStarRecords(
      owner + '/' + repoName,
      process.env.GITHUB_API_TOKEN,
      MAX_NUMBER_OF_REQUESTS
    )
    if (!starHistory) {
      console.log('No star history found for', repoName, 'owned by', owner)
    } else {
      const updated = await updateSupabaseProject(repoName, owner, { star_history: starHistory })
      if (updated) console.log('Updated star history for', repoName, 'owned by', owner)
    }
  } catch (e) {
    console.error('Error in updateProjectStarHistory:', e)
  }
}

/**
 * Updates the trending state of a repo
 * @param {string} name - The name of the repo.
 * @param {string} owner - The name of the owner of the repo.
 * @param {string} trendingState - The trending state that should be set to true
 */
const updateProjectTrendingState = async (
  name: string,
  owner: string,
  trendingState: TrendingState
) => {
  if (!trendingState) return
  if (!(await repoIsAlreadyInDB(name, owner))) return

  const projectUpdate: ProjectUpdate = {}
  projectUpdate[trendingState] = true

  const updated = await updateSupabaseProject(name, owner, projectUpdate)
  updated ? console.log('Updated trending state of', name, 'to', trendingState) : null
}

/**
 * Updates the trendingStates for a list of repos as it comes from the fetchTrendingRepos function.
 * Should be adapted once the fetchTrendingRepos function is changed.
 * @param {string[]} repos - The list of repos.
 * @param {TrendingState} trendingState - The trending state that should be set to true
 */ const updateProjectTrendingStatesForListOfRepos = async (
  repos: string[],
  trendingState: TrendingState
) => {
  for (let i = 0; i < repos.length / 2; i++) {
    const owner = repos[2 * i]
    const repoName = repos[2 * i + 1]
    await updateProjectTrendingState(repoName, owner, trendingState)
  }
}

const updateProjectTweets = async (repoName: string, owner: string) => {
  if (!(await repoIsAlreadyInDB(repoName, owner))) {
    return
  }

  const tweets = await getPostsForHashtag(repoName)

  await updateSupabaseProject(repoName, owner, { related_twitter_posts: tweets })
}
