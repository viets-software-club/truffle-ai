import axios, { AxiosResponse } from 'axios'
import { ForkRecord, ForksData } from './types'
import * as utils from './utils'

const DEFAULT_PER_PAGE = 30

/** Retrieves the total count of forks for a Github repository
 * @param {string} repo - Name of the Github repository: "owner/repository"
 * @param {string} token - Github access token
 * @returns Promise<number> : A promise that resolves to the total count of forks for the repository
 */
async function getRepoForksCount(repo: string, token: string): Promise<number> {
  const response: AxiosResponse<{ forks_count: number }> = await axios.get(
    `https://api.github.com/repos/${repo}`,
    {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `token ${token}`
      }
    }
  )

  return response?.data?.forks_count
}

/** Creates the full history of forks for a repository
 * Retrieves the fork records (fork count by date) of a GitHub repository and returns them as an array of `ForkRecord` objects.
 * @param {string} repo - Name of the GitHub repository in the format "owner/repository".
 * @param {string} token - GitHub Access token for authentication (optional).
 * @param {number} maxRequestAmount - Maximum number of API requests to make to retrieve the fork records.
 * The higher this value is the more accurate is going to be the graph of the fork history
 * @param {number} startPage - possible startPage for a partialHistory
 * @param {Date} startDate - possible startDate for a partialHistory
 * @returns {ForkRecord[]} - An array of `ForkRecord` objects representing the fork records.
 */
export async function getRepoForkRecords(
  repo: string,
  token: string,
  maxRequestAmount: number,
  startPage?: number,
  startDate?: Date
): Promise<ForkRecord[]> {
  // check if there are any issues at all
  if ((await getRepoForksCount(repo, token)) == 0) {
    return []
  }
  const requestPages: number[] = await utils.getHistoryPages(
    repo,
    token,
    maxRequestAmount,
    'fork',
    startPage
  )

  const resArray = await Promise.all(
    requestPages.map((page) => {
      return utils.getRepoPage(repo, token, 'fork', page, 'oldest') as Promise<
        AxiosResponse<ForksData[]>
      >
    })
  )

  const forkRecordsMap: Map<string, number> = new Map()

  if (requestPages.length < maxRequestAmount) {
    const forkRecordsData: { created_at: string }[] = []
    resArray.forEach(({ data }) => {
      forkRecordsData.push(...data)
    })
    for (let i = 0; i < forkRecordsData.length; ) {
      forkRecordsMap.set(utils.getDateString(forkRecordsData[i].created_at), i + 1)
      i += Math.floor(forkRecordsData.length / maxRequestAmount) || 1
    }
  } else {
    resArray.forEach(({ data }: { data: { created_at: string }[] }, index) => {
      if (data.length > 0) {
        const forkRecord = data[0]
        forkRecordsMap.set(
          utils.getDateString(forkRecord.created_at),
          DEFAULT_PER_PAGE * (requestPages[index] - 1)
        )
      }
    })
  }

  const forkAmount = await getRepoForksCount(repo, token)
  forkRecordsMap.set(utils.getDateString(Date.now()), forkAmount)

  const forkRecords: ForkRecord[] = []

  forkRecordsMap.forEach((v, k) => {
    forkRecords.push({
      date: k,
      count: v
    })
  })

  if (startDate == undefined || startDate == null) {
    return forkRecords
  }

  // filter out the wrong dates
  return forkRecords.filter((item) => {
    const itemDate = new Date(item.date)
    return itemDate >= startDate
  })
}
