import axios, { AxiosResponse } from 'axios'
import cheerio from 'cheerio'
import showdown from 'showdown'
import {
  Developer,
  DeveloperRepo,
  starHistoryScraper,
  StarData,
  Repository,
  GraphQLResponse,
  OpenAIResponse
} from './interfaces'

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

/** Method to scrape the star history from a repo
 * @param {string} owner Owner of the repository
 * @param {string} repo Repository name
 * @param {string} authToken AuthToken for GitHub API
 * @returns {[date: 'DATE', count: 'COUNT']}: { date: '2023-05-10', count: 1549 }
 * => on error empty array and error message
 */
async function fetchRepositoryStars(owner: string, repo: string, authToken: string) {
  const query = `
    query ($owner: String!, $repo: String!, $cursor: String) {
      repository(owner: $owner, name: $repo) {
        stargazers(first: 100, orderBy: { field: STARRED_AT, direction: DESC }, after: $cursor) {
          totalCount
          edges {
            starredAt
            node {
              login
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    }
  `

  const headers = {
    Authorization: authToken
  }

  let hasNextPage = true
  let endCursor: string | null = null

  const starHistoryList: StarData[] = []

  try {
    while (hasNextPage) {
      const variables: starHistoryScraper = {
        owner,
        repo,
        cursor: endCursor
      }

      const response = await axios.post<GraphQLResponse>(
        'https://api.github.com/graphql',
        { query, variables },
        { headers }
      )
      starHistoryList.push(response.data.data.repository.stargazers.edges)

      hasNextPage = response.data.data.repository.stargazers.pageInfo.hasNextPage
      endCursor = (response.data.data.repository.stargazers.pageInfo.endCursor as string) || null

      variables.cursor = endCursor
    }
  } catch (error) {
    return []
  }

  // get the real star history
  const mergedArray: StarData[] = starHistoryList.flat()
  return starHistory(mergedArray)
}

/** Transforms an array of all the logged stars timestamps into a merged array with the star History
 * @param {[starredAt: 'TIME', node: {Object} ]} starsData Array with the timestamps of the star history
 * @returns {[date: 'DATE', count: 'COUNT']}:  { date: '2023-05-13', count: 515 }
 */
function starHistory(starsData: StarData[]) {
  const dateCounts: { [date: string]: number } = {}
  starsData.forEach((item) => {
    const date: string = item.starredAt.split('T')[0] // Extract date portion
    dateCounts[date] = (dateCounts[date] || 0) + 1 // Increment count for the date
  })

  // Convert dateCounts object into an array of objects
  return Object.keys(dateCounts).map((date) => ({
    date,
    count: dateCounts[date]
  }))
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

/** Main function to test the functionality of the different methods
 * and how to correctly call them and what the intended workflow is about
 * @todo Github and OpenAI token still have to be added manually
 * @param {number} timeMode - 0: daily; 1: weekly; 2: monthly => defines the scope of which repos and developers the methods looks at
 */
async function main(timeMode: number) {
  const trendingSplit: string[] | undefined = await fetchRepos(timeMode)

  // your personal GitHub authToken
  const authToken = `Bearer XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`
  // //Authorization: "Bearer " + process.env.OPENAI_API_KEY,
  const OPENAI_API_KEY = 'sk-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'

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

    await getRepoInfo(query, authToken)

    // TODO check if the repo has more than a 1k stars: repoInfo.stargazers.totalCount < 1000

    const readme: string = await getReadme(owner, name)

    if (readme != null) {
      // call openai api
      await openAIRequestTurbo(readme, OPENAI_API_KEY)
    }

    // get the star history of the repo
    await fetchRepositoryStars(owner, name, authToken)
  }
  // get the developers
  fetchDevelopers(timeMode)
}
