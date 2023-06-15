import { timeMode } from '../../types/githubScraping'
import * as github from '../api/githubApi'
import * as githubScraping from '../scraping/githubScraping'
import * as eli5 from '../api/openAIApi'
import * as starHistory from '../starHistory/starHistory'
import * as hackernews from '../scraping/hackerNewsScraping'

/** Main function to test the functionality of the different methods
 * and how to correctly call them and what the intended workflow is about
 * @todo Github and OpenAI token still have to be added manually
 * @param {string} timeMode - should be 'daily', 'weekly' or 'monthly' => defines the scope of which repos and developers the methods looks at
 *
 *
 *
 *
 *
 * You need to add the process.env.OPenai_API_KEY because it needs to be used
 *
 */
export async function main(timeMode: timeMode, firstNRepos: number) {
  const trendingSplit: string[] | undefined = await githubScraping.fetchTrendingRepos(timeMode)
  // your personal GitHub authToken
  const authToken: string = process.env.GITHUB_API_TOKEN
  // your personal OpenAI API Key
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const OPENAI_API_KEY: string = process.env.OPENAI_API_KEY //you still need to define this token for the openAIApi.ts

  // check if any repos were actually found
  if (!trendingSplit) {
    console.log("Repos couldn't be scraped")
    process.exit()
  }

  trendingSplit.length / 2 < firstNRepos ? (firstNRepos = trendingSplit.length / 2) : null

  for (let i = 0; i < firstNRepos; i++) {
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

    console.log('-------------------------------------------------------')
    console.log(await github.getRepoInfo(query, 'Bearer ' + authToken))

    // TODO check if the repo has more than a 1k stars: repoInfo.stargazers.totalCount < 1000
    //tries to find the readme file -> TODO check if owner returns the correct value
    const readme: string = await githubScraping.fetchRepositoryReadme(owner, name)
    //  console.log(readme)

    //sumarrieses the readME but also checks if the readme is not empty
    if (readme == ' ') {
      console.log('Can not summarise project as no ReadMefile was found')
    } else {
      console.log('Eli5:')
      console.log(await eli5.getELI5FromReadMe(readme)) //prints summarised readme if one was found
    }
    console.log(owner)
    console.log(name)
    const categories = await github.getRepositoryTopics(owner, name, authToken)
    //Categorizes the project
    console.log('Categories:\n')
    console.log(await eli5.categorizeProjectGeneral(categories, readme))
    console.log('\n')
    console.log('hackernewsstories:\n')

    //receives the scraped hackernews
    const commentsAndLinks: string[] | undefined = await hackernews.searchHackerNewsStories(name)

    if (commentsAndLinks != undefined) {
      if (commentsAndLinks[0] == ' ' && commentsAndLinks[1] == ' ') {
        console.log('no comments were found')
      } else {
        //summs them up for the sentiment
        console.log('sentiment and links:\n')
        console.log(await eli5.getHackernewsSentiment(commentsAndLinks[0]))
        console.log('\n')
        console.log(commentsAndLinks[1])
      }
    }

    // get the star history of the repo
    console.log(await starHistory.getRepoStarRecords(owner + '/' + name, authToken, 10))

    // get the contributor count of the repo
    console.log(await github.getContributorCount(owner, name))
  }
  // get the developers
  // console.log(scrape.fetchTrendingDevelopers(timeMode))
}

//void main('monthly', 30)
