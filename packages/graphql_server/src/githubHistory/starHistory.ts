import axios, { AxiosResponse } from 'axios'
import { StarRecord, StargazersData } from './types'
import * as utils from './utils'

const DEFAULT_PER_PAGE = 30

/** Retrieves the total count of stargazers for a Github repository
 * @param {string} repo - Name of the Github repository: "owner/repository"
 * @param {string} token - Github access token
 * @returns Promise<number> : A promise that resolves to the total count of stargzers for the repository
 */
async function getRepoStargazersCount(repo: string, token: string): Promise<number> {
  const response: AxiosResponse<{ stargazers_count: number }> = await axios.get(
    `https://api.github.com/repos/${repo}`,
    {
      headers: {
        Accept: 'application/vnd.github.v3.star+json',
        Authorization: `token ${token}`
      }
    }
  )

  return response?.data?.stargazers_count
}

/** Creates the full history of stars for a repository
 * Retrieves the star records (star count by date) of a GitHub repository and returns them as an array of `StarRecord` objects.
 * @param {string} repo - Name of the GitHub repository in the format "owner/repository".
 * @param {string} token - GitHub Access token for authentication (optional).
 * @param {number} maxRequestAmount - Maximum number of API requests to make to retrieve the star records.
 * The higher this value is the more accurate is going to be the graph of the star history
 * @param {number} startPage - possible startPage for a partialHistory
 * @param {Date} startDate - possible startDate for a partialHistory
 * @returns {StarRecord[]} - An array of `StarRecord` objects representing the star records.
 */
export async function getRepoStarRecords(
  repo: string,
  token: string,
  maxRequestAmount: number,
  startPage?: number,
  startDate?: Date
): Promise<StarRecord[]> {
  // check if there are any issues at all
  if ((await getRepoStargazersCount(repo, token)) == 0) {
    return []
  }
  const requestPages: number[] = await utils.getHistoryPages(repo, token, 10, 'star', startPage)

  const resArray = await Promise.all(
    requestPages.map((page) => {
      return utils.getRepoPage(repo, token, 'star', page, 'asc') as Promise<
        AxiosResponse<StargazersData[]>
      >
    })
  )

  const starRecordsMap: Map<string, number> = new Map()

  if (requestPages.length < maxRequestAmount) {
    const starRecordsData: { starred_at: string }[] = []
    resArray.forEach(({ data }) => {
      starRecordsData.push(...data)
    })
    for (let i = 0; i < starRecordsData.length; ) {
      starRecordsMap.set(utils.getDateString(starRecordsData[i].starred_at), i + 1)
      i += Math.floor(starRecordsData.length / maxRequestAmount) || 1
    }
  } else {
    resArray.forEach(({ data }: { data: { starred_at: string }[] }, index) => {
      if (data.length > 0) {
        const starRecord = data[0]
        starRecordsMap.set(
          utils.getDateString(starRecord.starred_at),
          DEFAULT_PER_PAGE * (requestPages[index] - 1)
        )
      }
    })
  }

  const starAmount = await getRepoStargazersCount(repo, token)
  starRecordsMap.set(utils.getDateString(Date.now()), starAmount)

  const starRecords: StarRecord[] = []

  starRecordsMap.forEach((v, k) => {
    starRecords.push({
      date: k,
      count: v
    })
  })

  if (startDate == undefined || startDate == null) {
    return starRecords
  }

  // filter out the wrong dates
  return starRecords.filter((item) => {
    const itemDate = new Date(item.date)
    return itemDate >= startDate
  })
}
