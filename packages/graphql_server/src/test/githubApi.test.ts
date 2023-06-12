import { getRepositoryTopics } from '../api/githubApi'
import { getContributors } from '../scraping/githubScraping'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function testGetRepositoryTopics(repoFounder: string, repoName: string) {
  //get the real comments from method in hackerNewsScraper. E.g. searchHackerNewsStories('SuperAGI')

  console.log(await getRepositoryTopics(repoFounder, repoName, process.env.GITHUB_API_TOKEN))
}

//test function that calls the method and prints out all contributors
export async function testGetContributorCount(owner: string, repo: string) {
  await getContributors(owner, repo)
    .then((contributors) => {
      console.log(`Contributors für das Repository ${owner}/${repo}:`)
      contributors.forEach((contributor, index) => {
        console.log(
          `${index + 1}. ${contributor.login} (${contributor.contributions} Beitrag/Beträge)`
        )
      })
    })
    .catch((error) => {
      console.error('Fehler:', error)
    })
}
