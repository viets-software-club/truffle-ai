import axios, { AxiosResponse } from 'axios'
import * as cheerio from 'cheerio'
import showdown from 'showdown'

type GithubTrendingTimePeriod = 'weekly' | 'daily' | 'monthly'

class GithubScraper {
  static showdownConverter = new showdown.Converter()
  /**
   * Get repositories from GitHub's trending page
   * @param timePeriod
   * @returns object consisting of repository owner and name
   */
  async fetchTrendingRepositories(timePeriod: GithubTrendingTimePeriod) {
    const response: AxiosResponse<string> = await axios.get(
      `https://github.com/trending?since=${timePeriod}`
    )
    const $ = cheerio.load(response.data)
    const repositoryNamesArr = $('h2 a')
      .map((_, el) => $(el).text().trim())
      .toArray()
    return repositoryNamesArr.map((repository: string) => {
      // remove / and \n\s+ if present in trending repository <a> tag and split at space into name and owner
      const [repositoryName, repositoryOwner] = repository
        .replace(/\n\s+/g, '')
        .replace(/\//g, '')
        .split(' ')
      return {
        repositoryName,
        repositoryOwner
      }
    })
  }

  /**
   * Reads possible readme files of a repository on Github
   * @param repositoryOwner owner of the repo
   * @param repositoryName name of the repo
   * @returns first found readme file
   */
  fetchRepositoryReadme(repositoryOwner: string, repositoryName: string) {
    // possible locations for readme's
    const readmeUrls = [
      `https://raw.githubusercontent.com/${repositoryOwner}/${repositoryName}/release/readme.md`,
      `https://raw.githubusercontent.com/${repositoryOwner}/${repositoryName}/dev/README.rst`,
      `https://raw.githubusercontent.com/${repositoryOwner}/${repositoryName}/main/README.md`,
      `https://raw.githubusercontent.com/${repositoryOwner}/${repositoryName}/master/README.md`
    ]

    return Promise.all(
      readmeUrls
        .map(async (readmeUrl) => {
          try {
            const response = await axios.get<string>(readmeUrl)
            return GithubScraper.showdownConverter
              .makeHtml(response.data)
              .replace(/<[^>]*>/g, '')
              .replace(/\n\s+/g, '')
              .replace(/\//g, '')
          } catch (error) {
            // ignore error and try other readme url
            return null
          }
        })
        .filter((val) => val != null)
    ) as Promise<string[]>
  }

  /**
   * Get developers from Github's trending developers page
   * @param timePeriod
   * @returns developers by username, normal name and repository
   */
  async fetchTrendingDevelopers(timePeriod: GithubTrendingTimePeriod) {
    const response = await axios.get<string>(
      `https://github.com/trending/developers?since=${timePeriod}`
    )
    const $ = cheerio.load(response.data)

    return $('article')
      .map((i, el) => {
        const $developerLink = $(el).find('h1.h3.lh-condensed a')
        const $repoLink = $(el).find('h1.h4.lh-condensed a')
        const repoHref = $repoLink.attr('href') as string
        return {
          name: $developerLink.text().trim(),
          username: ($developerLink.attr('href') as string).substring(1),
          repository: repoHref.substring(repoHref.lastIndexOf('/'))
        }
      })
      .toArray()
  }
}

export default GithubScraper
