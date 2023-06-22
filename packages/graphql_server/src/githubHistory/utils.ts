import { HistoryType, ForksData, StargazersData, IssueData } from './types'
import axios, { AxiosResponse } from 'axios'

const DEFAULT_PER_PAGE = 30
// utility functions used by currently just the star-history.ts file

/** Function generates an array of numbers within a given range
 * This is needed to only reconstruct the star history from some specific points in the history
 * And not from looking at every single star recorded
 * @param {number} from
 * @param {number} to
 * @returns Array<number>: An array of numbers within the specified range.
 */
export function range(from: number, to: number): number[] {
  const r: number[] = []
  for (let i = from; i <= to; i++) {
    r.push(i)
  }
  return r
}

/** Retuns the timestamp of a given date
 * @param {Date | number | string} t - Date, timestamp or string
 * @returns Timestamp of the given date
 */
export function getTimeStampByDate(t: Date | number | string): number {
  return new Date(t).getTime()
}

/** Formats a date into a string using the specified format
 * @param {Date | number | string} t
 * @param {string} format - The format string for the desired date format.
 * Default is "yyyy/MM/dd hh:mm:ss".
 * @returns Formatted string
 */
export function getDateString(t: Date | number | string, format = 'yyyy/MM/dd hh:mm:ss'): string {
  const d = new Date(getTimeStampByDate(t))

  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const date = d.getDate()
  const hours = d.getHours()
  const minutes = d.getMinutes()
  const seconds = d.getSeconds()

  return format
    .replace('yyyy', String(year))
    .replace('MM', String(month))
    .replace('dd', String(date))
    .replace('hh', String(hours))
    .replace('mm', String(minutes))
    .replace('ss', String(seconds))
}

/** Retrieves the pages to scrape for a parameter of a github repository to
 * recreate the history for this specific parameter
 * @param {string} repo - Name of the Github repository: "owner/repository"
 * @param {string} token - Github Access token
 * @param {number} maxRequestAmount - Maximum number of API requests to make
 * The higher this value is the more accurate is going to be the graph of the history
 * @param {HistoryType} historyType - Determines which history to create
 * "issue" | "star" | "fork"
 * @param {number} startPage - a possible start page for the partial history
 * @returns {number[]} returns a number array of the pages to look at to recreate the history
 */
export async function getHistoryPages(
  repo: string,
  token: string,
  maxRequestAmount: number,
  historyType: HistoryType,
  startPage?: number
) {
  const pageCount = await getPageCount(repo, token, historyType)

  const requestPages: number[] = []
  if (startPage == undefined || startPage == null) {
    if (pageCount < maxRequestAmount) {
      requestPages.push(...range(1, pageCount))
    } else {
      range(1, maxRequestAmount).forEach((i: number) => {
        requestPages.push(Math.round((i * pageCount) / maxRequestAmount) - 1)
      })
      if (!requestPages.includes(1)) {
        requestPages.unshift(1)
      }
    }
  } else {
    if (pageCount < maxRequestAmount) {
      requestPages.push(...range(pageCount - startPage, pageCount))
    } else {
      range(1, maxRequestAmount).forEach((i: number) => {
        requestPages.push(
          Math.round(pageCount - startPage + (i * startPage) / maxRequestAmount) - 1
        )
      })
    }
  }
  return requestPages
}

/** Retrieves the page count for a historyType in a GitHub repository.
 * @param {string} repo - Name of the GitHub repository in the format "owner/repository".
 * @param {string} token - GitHub access token.
 * @param {HistoryType} historyType - what type of history to create
 * "issue" | "star" | "fork"
 * @returns {Promise<number>} A promise that resolves to the total number of pages.
 * @throws {object} Throws an error object if the request fails or the repository has none of the parameter
 */
export async function getPageCount(repo: string, token: string, historyType: HistoryType) {
  let patchRes: AxiosResponse<StargazersData[] | ForksData[] | IssueData[]>

  if (historyType === 'star') {
    patchRes = await getRepoPage(repo, token, 'star')
  } else if (historyType === 'fork') {
    patchRes = await getRepoPage(repo, token, 'fork')
  } else {
    patchRes = await getRepoPage(repo, token, 'issue')
  }

  const headerLink: string = (patchRes.headers['link'] as string) || ''

  let pageCount = 1
  // Regex to extract the 'next' and 'last' page numbers from GitHub's pagination Link header
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
  return pageCount
}

/** This method retrieves the historyType from a page of a GitHub repository
 * @param {string} repo - Name of the Github repository: "owner/repository"
 * @param {string} token - Github Access token
 * @param {number} page - Page Number to retrieve
 * @param {string} direction - Determines in which order the pages will be: 'oldest' | 'newest' / 'asc' | 'desc'
 * All the normal history functions should use 'oldest' / 'asc', the partial history should use 'newest' / 'desc'
 * only fork history uses 'oldest' | 'newest'
 * @param {HistoryType} historyType - determines which history to create
 * "issue" | "star" | "fork"
 * @returns Promise<Object>: A promise that resolves to the historyType of the repository
 */
export async function getRepoPage(
  repo: string,
  token: string,
  historyType: HistoryType,
  page?: number,
  direction?: string
): Promise<
  AxiosResponse<ForksData[]> | AxiosResponse<IssueData[]> | AxiosResponse<StargazersData[]>
> {
  let url = ''
  let accept = ''
  if (historyType == 'fork') {
    url = `https://api.github.com/repos/${repo}/forks?per_page=${DEFAULT_PER_PAGE}`

    if (direction != undefined) {
      url += `&sort=${direction}`
    }
    accept = 'application/vnd.github+json'
  } else if (historyType == 'star') {
    url = `https://api.github.com/repos/${repo}/stargazers?per_page=${DEFAULT_PER_PAGE}`

    if (direction != undefined) {
      url += `&sort=created&direction=${direction}`
    }
    accept = 'application/vnd.github.star+json'
  } else {
    url = `https://api.github.com/repos/${repo}/issues?per_page=${DEFAULT_PER_PAGE}`

    if (direction != undefined) {
      url += `&sort=created&direction=${direction}`
    }
    accept = 'application/vnd.github+json'
  }

  if (page !== undefined) {
    url = `${url}&page=${page}`
  }

  return axios.get(url, {
    headers: {
      Accept: accept,
      Authorization: `token ${token}`
    }
  })
}
