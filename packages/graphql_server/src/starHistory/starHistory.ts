import axios, { AxiosResponse } from 'axios'
import { StarRecord, StargazersData } from './types'
import * as utils from './utils'

const DEFAULT_PER_PAGE = 30

/** This method retrieves the stargazers from a page of a GitHub repository
 * @param {string} repo - Name of the Github repository: "owner/repository"
 * @param {string} token - Github Access token
 * @param {number} page - Page Number of the stargazers to retrieve
 * @returns Promise<Object>: A promise that resolves to the stargazers of the repository
 */
async function getRepoStargazers(
  repo: string,
  token?: string,
  page?: number
): Promise<AxiosResponse<StargazersData[]>> {
  let url = `https://api.github.com/repos/${repo}/stargazers?per_page=${DEFAULT_PER_PAGE}`

  if (page !== undefined) {
    url = `${url}&page=${page}`
  }
  return axios.get(url, {
    headers: {
      Accept: 'application/vnd.github.v3.star+json',
      Authorization: token ? `token ${token}` : ''
    }
  })
}

/** Retrieves the total count of stargazers for a Github repository
 * @param {string} repo - Name of the Github repository: "owner/repository"
 * @param {string} token - Github access token
 * @returns Promise<number> : A promise that resolves to the total count of stargzers for the repository
 */
async function getRepoStargazersCount(repo: string, token?: string): Promise<number> {
  const response: AxiosResponse<{ stargazers_count: number }> = await axios.get(
    `https://api.github.com/repos/${repo}`,
    {
      headers: {
        Accept: 'application/vnd.github.v3.star+json',
        Authorization: token ? `token ${token}` : ''
      }
    }
  )

  return response?.data?.stargazers_count
}

/** Retrieves the star records (star count by date) of a Github repository
 * @param {string} repo - Name of the Github repository: "owner/repository"
 * @param {string} token - Github Access token
 * @param {number} maxRequestAmount - Maximum number of API requests to make to retrieve the stars
 * The higher this value is the more accurate is going to be the graph of the star history
 * @returns Promise<Array<{ date: string, count: number }>>: A promise that resolves to an array of star records
 */
export async function getRepoStarRecords(repo: string, token: string, maxRequestAmount: number) {
  const patchRes: AxiosResponse<StargazersData[]> = await getRepoStargazers(repo, token)

  const headerLink: string = (patchRes.headers['link'] as string) || ''

  let pageCount = 1
  const regResult = /next.*&page=(\d*).*last/.exec(headerLink)

  if (regResult && regResult[1] && Number.isInteger(Number(regResult[1]))) {
    pageCount = Number(regResult[1])
  }

  if (pageCount === 1 && patchRes?.data?.length === 0) {
    throw {
      status: patchRes.status,
      data: []
    }
  }

  const requestPages: number[] = []
  if (pageCount < maxRequestAmount) {
    requestPages.push(...utils.range(1, pageCount))
  } else {
    utils.range(1, maxRequestAmount).forEach((i: number) => {
      requestPages.push(Math.round((i * pageCount) / maxRequestAmount) - 1)
    })
    if (!requestPages.includes(1)) {
      requestPages.unshift(1)
    }
  }
  return await getRepoStarsMap(repo, token, requestPages, maxRequestAmount)
}

/** Retrieves the star records (star count by date) of a GitHub repository and returns them as an array of `StarRecord` objects.
 * @param {string} repo - Name of the GitHub repository in the format "owner/repository".
 * @param {string} token - GitHub Access token for authentication (optional).
 * @param {number[]} requestPages - Array of page numbers to request from the API.
 * @param {number} maxRequestAmount - Maximum number of API requests to make to retrieve the star records.
 * @returns {StarRecord[]} - An array of `StarRecord` objects representing the star records.
 */
async function getRepoStarsMap(
  repo: string,
  token: string,
  requestPages: number[],
  maxRequestAmount: number
) {
  const resArray = await Promise.all(
    requestPages.map((page) => {
      return getRepoStargazers(repo, token, page)
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

  return starRecords
}
