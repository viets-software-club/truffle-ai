import { getRepositoryTopics, getContributorsCount } from '../api/githubApi'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function testGetRepositoryTopics(repoFounder: string, repoName: string) {
  //get the real comments from method in hackerNewsScraper. E.g. searchHackerNewsStories('SuperAGI')

  console.log(await getRepositoryTopics(repoFounder, repoName, process.env.GITHUB_API_TOKEN))
}

//test function that calls the method and prints out all contributors
export async function testGetContributorCount(owner: string, repo: string) {
  getContributorsCount('iv-org', 'invidious') //268
  getContributorsCount('microsoft', 'guidance') //98
  getContributorsCount('smol-ai', 'developer') //14
  getContributorsCount('sunner', 'ChatALL') //15
  getContributorsCount('google', 'comprehensive-rust') //155
}

testGetContributorCount(' ', ' ')
