import { getRepositoryTopics, getContributorCount } from '../api/githubApi'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function testGetRepositoryTopics(repoFounder: string, repoName: string) {
  //get the real comments from method in hackerNewsScraper. E.g. searchHackerNewsStories('SuperAGI')

  console.log(await getRepositoryTopics(repoFounder, repoName, process.env.GITHUB_API_TOKEN))
}

//test function that calls the method and prints out all contributors
export async function testGetContributorCount(owner: string, repo: string) {
  console.log(await getContributorCount(owner, repo, ' ')) //here we need to pass an auth token
}

/*
testGetContributorCount('iv-org', 'invidious') //268
testGetContributorCount('microsoft', 'guidance') //98
testGetContributorCount('smol-ai', 'developer') //14
testGetContributorCount('sunner', 'ChatALL') //15
testGetContributorCount('google', 'comprehensive-rust') //155*/
