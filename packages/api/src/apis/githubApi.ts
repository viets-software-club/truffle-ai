// eslint-disable-next-line @typescript-eslint/triple-slash-reference
import { Octokit } from 'octokit'
import { RequestParameters } from '@octokit/types'
class GithubApi {
  octokit
  constructor(githubToken: string) {
    this.octokit = new Octokit({ auth: githubToken })
  }
  async fetchGraphQLApi<T>(query: string, options: RequestParameters) {
    return this.octokit.graphql<T>(query, options)
  }
  async fetchRepositoryContributors(repositoryOwner: string, repositoryName: string) {
    return await this.octokit.rest.repos.listContributors({
      owner: repositoryOwner,
      repo: repositoryName
    })
  }
  async fetchRepositoryStargazersByTotalCount(
    repositoryOwner: string,
    repositoryName: string,
    stargazersTotalCount: number,
    amountOfPages: number
  ) {
    const steps = Math.floor(stargazersTotalCount / amountOfPages)
    return (
      await Promise.all(
        Array(amountOfPages).map(async (_, pageNumber) => {
          const response = await this.octokit.rest.activity.listStargazersForRepo({
            per_page: 30,
            page: (pageNumber + 1) * steps,
            owner: repositoryOwner,
            repo: repositoryName
          })
          return response
        })
      )
    ).flat()
  }
}

export default GithubApi

// async fetchRepositoryContributors(repositoryOwner: string, repositoryName: string) {
//   return await this.octokit.rest.repos.listContributors({
//     owner: repositoryOwner,
//     repo: repositoryName
//   })
// }

// async fetchRespositoryCollaborators(repositoryOwner: string, repositoryName: string) {
//   return await this.octokit.rest.repos.listCollaborators({
//     owner: repositoryOwner,
//     repo: repositoryName
//   })
// }

// async fetchRepositoryTopics(repositoryOwner: string, repo: string) {
//   return await this.octokit.rest.repos.getAllTopics({ owner: repositoryOwner, repo })
// }
