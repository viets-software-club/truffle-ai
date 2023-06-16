import { GitHubInfo } from '../types/githubApi'
import { getRepoInfo } from './api/githubApi'

/**
 * Calculates time specified by the parameters
 * @param {number} hours - The number of hours to subtract.
 * @param {number} minutes - The number of minutes to subtract.
 * @returns {string} The specified time in ISO format.
 */
export const getCutOffTime: (hours: number, minutes: number) => string = (
  hours: number,
  minutes: number
) => {
  const cutoffTime = new Date()
  cutoffTime.setHours(cutoffTime.getHours() - hours)
  cutoffTime.setMinutes(cutoffTime.getMinutes() - minutes)
  return cutoffTime.toISOString()
}

/**
 * Returns the githubData for the specified repo.
 * @param {string} name - The name of the repository
 * @param {string} owner The name of the owner of the repository.
 */
export const getGithubData = async (name: string, owner: string) => {
  // query send to github. If this is changed the corresponding types have to be changed as well
  const query = `
    query {
      repository(owner: "${owner}", name: "${name}") {
        name 
        description
        stargazerCount
        issues(filterBy: {states: [OPEN]}) {
          totalCount
        }
        forkCount
        pullRequests(states: [OPEN]) {
          totalCount
        }
        url
        homepageUrl
        languages(first: 3, orderBy: {field: SIZE, direction: DESC}) {
          edges {
            node {
              name 
              color
            }
          }
        }
        owner {
          login
        }
      }
    }`

  // call github api
  const githubData: GitHubInfo | null = await getRepoInfo(
    query,
    'Bearer ' + process.env.GITHUB_API_TOKEN
  )

  return githubData ? githubData : null
}

/**
 * This function should be put somewhere else later on. Credits to chatGPT for creating it
 * Parses a GitHub URL and extracts the repository name and owner.
 * @param {string} url - The GitHub URL.
 * @returns {{name: string, owner: string} | null} An object containing the owner and repo names, or null if the URL is invalid.
 */
export const parseGitHubUrl = (url: string) => {
  const pattern = /https?:\/\/github\.com\/([^/]+)\/([^/]+)(?:\/[\w.-]+)*$/
  const match = pattern.exec(url)

  if (match && match.length === 3) {
    const [, owner, repo] = match
    return { owner, repo }
  }

  return null
}
