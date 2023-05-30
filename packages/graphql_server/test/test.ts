import { timeMode } from '../types/githubScraping'
import * as scrape from '../src/scraping/githubScraping'
import * as github from '../src/api/githubApi'
import * as eli5 from '../src/api/openAIApi'
import * as starHistory from '../src/starHistory/starHistory'

/** Main function to test the functionality of the different methods
 * and how to correctly call them and what the intended workflow is about
 * @todo Github and OpenAI token still have to be added manually
 * @param {string} timeMode - should be 'daily', 'weekly' or 'monthly' => defines the scope of which repos and developers the methods looks at
 */
async function main(timeMode: timeMode) {
  const trendingSplit: string[] | undefined = await scrape.fetchTrendingRepos(timeMode)

  // your personal GitHub authToken
  const authToken: string = process.env.GITHUB_API_KEY as string
  // your personal OpenAI API Key
  const OPENAI_API_KEY: string = process.env.OPENAI_API_KEY as string

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

    console.log(await github.getRepoInfo(query, 'Bearer ' + authToken))

    // TODO check if the repo has more than a 1k stars: repoInfo.stargazers.totalCount < 1000

    const readme: string = await scrape.fetchRepositoryReadme(owner, name)

    if (readme != null) {
      // call openai api
      console.log(await eli5.getELI5DescriptionForRepositoryFromText(readme, OPENAI_API_KEY))
    }

    // get the star history of the repo
    console.log(await starHistory.getRepoStarRecords(owner + '/' + name, authToken, 10))
  }
  // get the developers
  // console.log(scrape.fetchTrendingDevelopers(timeMode))
}

void main('daily')
