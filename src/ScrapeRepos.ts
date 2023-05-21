import axios, { AxiosResponse } from 'axios'
import cheerio from 'cheerio'
import showdown from 'showdown'
import {
  Developer,
  DeveloperRepo,
  OpenAIResponse,
  StarRecord,
  Repository,
  StargazerCount,
  StargazersData,
  StargazerRecord
} from './types'

const DEFAULT_PER_PAGE = 30

/** Get all the information from the GitHub trending page; all the repos and the names of their creators
 * @param {number} timeMode 0: daily; 1: weekly; 2: monthly => timescope of the trending page
 * @returns {string[]} an array that stores alternatingly the owner and the name of each repo: [owner1, repo1, owner2, repo2]
 */
async function fetchRepos(timeMode: number) {
  const timeModes = ['daily', 'weekly', 'monthly']
  const response: AxiosResponse<string> = await axios.get(
    'https://github.com/trending?since=' + timeModes[timeMode]
  )
  const html = cheerio.load(response.data)
  const repos: string[] = []

  html('h2 a').each((i: number, el: cheerio.Element) => {
    const repoName = html(el).text().trim()
    repos.push(repoName)
  })

  const trendingSplit: string[] = []
  // trim the repos to be correctly formatted
  repos.forEach((repo) => {
    const trimmedName = repo.replace(/\n\s+/g, '').replace(/\//g, '')
    const stringSplit = trimmedName.split(' ')
    trendingSplit.push(stringSplit[0])
    trendingSplit.push(stringSplit[1])
  })
  return trendingSplit
}

/**  This function imports the ReadMe.md file for a repository (if it can be located)
 * @param {string} owner - owner of the repo
 * @param {string} name - name of the repo
 * @returns {string} a string containing the text of the repo. Throws an error if file can't be located
 * @todo paths in the beginning can be constantly adapted if new ReadMe file locations are being found
 */
async function getReadme(owner: string, name: string) {
  // these paths exists to check in multiple locations for the readme files
  const readmePaths: string[] = [
    `https://raw.githubusercontent.com/${owner}/${name}/release/readme.md`,
    `https://raw.githubusercontent.com/${owner}/${name}/dev/README.rst`,
    `https://raw.githubusercontent.com/${owner}/${name}/main/README.md`,
    `https://raw.githubusercontent.com/${owner}/${name}/master/README.md`
  ]

  for (let i = 0; i < readmePaths.length; i++) {
    try {
      const response: AxiosResponse<string> = await axios.get(readmePaths[i])
      const converter = new showdown.Converter()

      // Use the converter object to convert Markdown to HTML to String:
      const html: string = converter.makeHtml(response.data)
      const html2: string = html.toString()
      return html2
        .replace(/<[^>]*>/g, '')
        .replace(/\n\s+/g, '')
        .replace(/\//g, '')
    } catch (error) {
      continue
    }
  }
  throw new Error("ReadMe couldn't be found")
}

/** Gets the repo's information via GitHub's GraphQL API
 * @param {string} query GraphQL query for the repo (including owner and name)
 * @param {string} authToken personal authorization token
 * @returns {any[]} the json data for the requested repo as by the graphql query; null on error
 */
async function getRepoInfo(query: string, authToken: string): Promise<Repository | null> {
  try {
    const response: AxiosResponse<{ data: { repository: Repository } }> = await axios.post(
      'https://api.github.com/graphql',
      {
        query: query
      },
      {
        headers: {
          Authorization: authToken
        }
      }
    )
    return response.data.data.repository
  } catch (error) {
    return null
  }
}

/** Creates the ELI5 of the repository by passing the readme to chatgpt
 * @param {string} readME readMe file of the repository as a string
 * @param {string} OPENAI_API_KEY api key for OpenAI
 * @returns {string} the summary by ChatGPT of the repo
 */
async function openAIRequestTurbo(readME: string, OPENAI_API_KEY: string) {
  const question =
    'The following text describes a prorgamming project that is current in development. Explain to me what the project is trying to archieve without telling me' +
    "how they are doing so. Please use arround 50 words and don't get too technical" +
    readME
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + OPENAI_API_KEY
    },
    method: 'POST',
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a Computer Science Teacher to his students without tehcnical knowledge'
        },
        {
          role: 'user',
          content: question
        }
      ]
    })
  })
  const data: OpenAIResponse = (await response.json()) as OpenAIResponse
  return data.choices[0].message.content
}

/** Get trending developers (and their trending repos) from the github page
 * @param {number} userInput describes the timeframe; 0: daily, 1: weekly; 2: monthly
 * @returns   list of {name: 'NAME', username: 'USERNAME', repo: 'REPO'}
 */
function fetchDevelopers(userInput: number) {
  const timeModes = ['daily', 'weekly', 'monthly']

  axios
    .get('https://github.com/trending/developers?since=' + timeModes[userInput])
    .then((response: { data: string | Buffer }) => {
      const htmlC = cheerio.load(response.data)
      const developers: Developer[] = []
      const developerRepos: DeveloperRepo[] = []

      // get the developer names and usernames
      htmlC('h1.h3.lh-condensed a').each((i: number, el: cheerio.Element) => {
        const name: string = htmlC(el).text().trim()
        const username: string = htmlC(el).attr('href')?.substr(1) ?? ''
        developers.push({ name, username })
      })

      // get the repo name
      htmlC('h1.h4.lh-condensed a').each((i: number, el: cheerio.Element) => {
        const repo: string = htmlC(el).attr('href')?.substr(1) ?? ''
        // check if the repo exists
        if (repo) {
          const split = repo.split('/')
          developerRepos.push({ username: split[0], repo: split[1] })
        }
      })

      // correctly merge the two arrays
      const repo = ''
      return developers.map((developer) => {
        const matchingRepo = developerRepos.find((repo) => repo.username === developer.username)
        return { ...developer, ...(matchingRepo || { repo }) }
      })
    })
    .catch((error) => {
      throw new Error("Couldn't get trending developers")
    })
}

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
  const response: AxiosResponse<StargazerCount> = await axios.get(
    `https://api.github.com/repos/${repo}`,
    {
      headers: {
        Accept: 'application/vnd.github.v3.star+json',
        Authorization: token ? `token ${token}` : ''
      }
    }
  )

  const data: StargazerCount = response.data
  return data.stargazersCount
}

/** Retrieves the star records (star count by date) of a Github repository
 * @param {string} repo - Name of the Github repository: "owner/repository"
 * @param {string} token - Github Access token
 * @param {number} maxRequestAmount - Maximum number of API requests to make to retrieve the stars
 * The higher this value is the more accurate is going to be the graph of the star history
 * @returns Promise<Array<{ date: string, count: number }>>: A promise that resolves to an array of star records
 */
async function getRepoStarRecords(repo: string, token: string, maxRequestAmount: number) {
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
    requestPages.push(...range(1, pageCount))
  } else {
    range(1, maxRequestAmount).forEach((i: number) => {
      requestPages.push(Math.round((i * pageCount) / maxRequestAmount) - 1)
    })
    if (!requestPages.includes(1)) {
      requestPages.unshift(1)
    }
  }

  return await getRepoStarsMap(repo, token, requestPages, maxRequestAmount)
}

/** Retrieves the star records (star count by date) of a GitHub repository and returns them as an array of `StarRecord` objects.
 * Had to split up the original method by star-history because of ESLint
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
    const starRecordsData: { starredAt: string }[] = []
    resArray.forEach(({ data }) => {
      starRecordsData.push(...data)
    })
    for (let i = 0; i < starRecordsData.length; ) {
      starRecordsMap.set(getDateString(starRecordsData[i].starredAt), i + 1)
      i += Math.floor(starRecordsData.length / maxRequestAmount) || 1
    }
  } else {
    resArray.forEach(({ data }: { data: StargazerRecord[] }, index) => {
      if (data.length > 0) {
        const starRecord = data[0]
        starRecordsMap.set(
          getDateString(starRecord.starredAt),
          DEFAULT_PER_PAGE * (requestPages[index] - 1)
        )
      }
    })
  }

  const starAmount = await getRepoStargazersCount(repo, token)
  starRecordsMap.set(getDateString(Date.now()), starAmount)

  const starRecords: StarRecord[] = []

  starRecordsMap.forEach((v, k) => {
    starRecords.push({
      date: k,
      count: v
    })
  })
  return starRecords
}

/** Function generates an array of numbers within a given range
 * This is needed to only reconstruct the star history from some specific points in the history
 * And not from looking at every single star recorded
 * @param {number} from
 * @param {number} to
 * @returns Array<number>: An array of numbers within the specified range.
 */
function range(from: number, to: number): number[] {
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
function getTimeStampByDate(t: Date | number | string): number {
  const d = new Date(t)

  return d.getTime()
}

/** Formats a dat into a string using the specified format
 * @param {Date | number | string} t
 * @param {string} format - The format string for the desired date format.
 * Default is "yyyy/MM/dd hh:mm:ss".
 * @returns Formatted string
 */
function getDateString(t: Date | number | string, format = 'yyyy/MM/dd hh:mm:ss'): string {
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

/** Main function to test the functionality of the different methods
 * and how to correctly call them and what the intended workflow is about
 * @todo Github and OpenAI token still have to be added manually
 * @param {number} timeMode - 0: daily; 1: weekly; 2: monthly => defines the scope of which repos and developers the methods looks at
 */
async function main(timeMode: number) {
  const trendingSplit: string[] | undefined = await fetchRepos(timeMode)

  // your personal GitHub authToken
  const authToken = `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`
  // //Authorization: "Bearer " + process.env.OPENAI_API_KEY,
  const OPENAI_API_KEY = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'

  // check if any repos were actually found
  if (!trendingSplit) {
    console.log("Repos couldn't be scraped")
    process.exit()
  }

  for (let i = 0; i < trendingSplit.length / 2; i++) {
    const owner = trendingSplit[2 * i]
    const name = trendingSplit[2 * i + 1]
    const query = `query {
      repository(owner: "${owner}", name: "${name}") {
        name    
        description
        url
        createdAt
        stargazers {
          totalCount
        }
        forks {
          totalCount
        }
        primaryLanguage {
          name
        }
      }
    }`

    console.log(await getRepoInfo(query, 'Bearer ' + authToken))

    // TODO check if the repo has more than a 1k stars: repoInfo.stargazers.totalCount < 1000

    const readme: string = await getReadme(owner, name)

    if (readme != null) {
      // call openai api
      console.log(await openAIRequestTurbo(readme, OPENAI_API_KEY))
    }

    // get the star history of the repo
    console.log(await getRepoStarRecords(owner + '/' + name, authToken, 10))
  }
  // get the developers
  // console.log(fetchDevelopers(timeMode))
}
