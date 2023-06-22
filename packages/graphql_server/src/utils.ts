import { GitHubInfo } from '../types/githubApi'
import { getContributorCount, getRepoInfo } from './api/githubApi'

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

export const mockForkHistory = [
  {
    date: '2023/6/13 15:11:54',
    count: 30
  },
  {
    date: '2023/6/13 15:41:52',
    count: 90
  },
  {
    date: '2023/6/13 16:5:18',
    count: 120
  },
  {
    date: '2023/6/13 16:30:57',
    count: 150
  },
  {
    date: '2023/6/13 16:57:44',
    count: 180
  },
  {
    date: '2023/6/13 17:36:43',
    count: 210
  },
  {
    date: '2023/6/13 18:14:46',
    count: 240
  },
  {
    date: '2023/6/13 19:57:5',
    count: 300
  },
  {
    date: '2023/6/13 21:50:46',
    count: 330
  },
  {
    date: '2023/6/14 0:28:33',
    count: 360
  },
  {
    date: '2023/6/14 3:9:57',
    count: 390
  },
  {
    date: '2023/6/14 4:44:44',
    count: 420
  },
  {
    date: '2023/6/14 6:42:5',
    count: 450
  },
  {
    date: '2023/6/14 11:35:50',
    count: 510
  },
  {
    date: '2023/6/14 15:9:25',
    count: 540
  },
  {
    date: '2023/6/14 21:18:18',
    count: 570
  },
  {
    date: '2023/6/15 4:22:36',
    count: 600
  },
  {
    date: '2023/6/15 14:10:51',
    count: 630
  },
  {
    date: '2023/6/15 17:16:37',
    count: 660
  },
  {
    date: '2023/6/16 4:32:46',
    count: 720
  },
  {
    date: '2023/6/16 8:1:2',
    count: 750
  },
  {
    date: '2023/6/16 11:23:30',
    count: 780
  },
  {
    date: '2023/6/16 16:20:50',
    count: 810
  },
  {
    date: '2023/6/17 1:39:55',
    count: 843
  }
]
