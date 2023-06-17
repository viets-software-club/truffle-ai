import { getRepositoryTopics } from '../api/githubApi'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function testGetRepositoryTopics(repoFounder: string, repoName: string) {
  console.log(await getRepositoryTopics(repoFounder, repoName, process.env.GITHUB_API_TOKEN))
}
