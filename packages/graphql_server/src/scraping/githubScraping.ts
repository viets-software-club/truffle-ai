import axios, { AxiosResponse } from 'axios'
import * as cheerio from 'cheerio'
import * as showdown from 'showdown'
import { Developer, DeveloperRepo, timeMode, Contributor } from '../../types/githubScraping'

/** Get all the information from the GitHub trending page; all the repos and the names of their creators
 * @param {string} timeMode shoud be 'daily', 'weekly' or 'monthly' => timescope of the trending page
 * @returns {string[]} an array that stores alternatingly the owner and the name of each repo: [owner1, repo1, owner2, repo2]
 */
export async function fetchTrendingRepos(timeMode: timeMode) {
  const response: AxiosResponse<string> = await axios.get(
    `https://github.com/trending?since=${timeMode}`
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
export async function fetchRepositoryReadme(owner: string, name: string) {
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
      const html: string = converter.makeHtml(response.data).toString()
      return html
        .replace(/<[^>]*>/g, '')
        .replace(/\n\s+/g, '')
        .replace(/\//g, '')
    } catch (error) {
      // ignore error and try other read me file path
      continue
    }
  }
  console.log("ReadMe couldn't be found")
  return ' '
}

/** Get trending developers (and their trending repos) from the github page
 * @param {string} timeMode describes the timeframe; 'daily' | 'weekly' | 'monthly'
 * @returns   list of {name: 'NAME', username: 'USERNAME', repo: 'REPO'}
 */
export async function fetchTrendingDevelopers(timeMode: timeMode) {
  await axios
    .get('https://github.com/trending/developers?since=' + timeMode)
    .then((response: { data: string | Buffer }) => {
      const htmlC = cheerio.load(response.data)
      const developers: Developer[] = []
      const developerRepos: DeveloperRepo[] = []

      // get the developer names and usernames
      htmlC('h1.h3.lh-condensed a').each((i: number, el: cheerio.Element) => {
        const name: string = htmlC(el).text().trim()
        const username: string = htmlC(el).attr('href')?.substring(1) ?? ''
        developers.push({ name, username })
      })

      // get the repo name
      htmlC('h1.h4.lh-condensed a').each((i: number, el: cheerio.Element) => {
        const repo: string = htmlC(el).attr('href')?.substring(1) ?? ''
        // check if the repo exists
        if (repo) {
          const split = repo.split('/')
          developerRepos.push({ username: split[0], repo: split[1] })
        }
      })

      // correctly merge the two arrays
      return developers.map((developer) => {
        const matchingRepo = developerRepos.find((repo) => repo.username === developer.username)
        return { ...developer, ...(matchingRepo || { repo: '' }) }
      })
    })
}

/**
 * Method that retreives and array filled with all contributors for a given array
 * das Array kann so empfangen werden  contributors.forEach((contributor, index) => {...)
 * Um die Anzahl an Contributors zu erhalten kann man einfach die Länge des Arrays nehmen
 * @param owner
 * @param repo
 * @returns Each Index consts of a string that contains the name of the contributor and the number of commits done by the person
 */

export async function getContributors(owner: string, repo: string) {
  try {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/contributors`)
    return response.data as Contributor[]
  } catch (error) {
    console.log('could not find any repos')
    return []
  }
}
