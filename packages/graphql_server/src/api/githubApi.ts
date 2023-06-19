import axios, { AxiosResponse } from 'axios'
import {
  GitHubOrganization,
  GitHubUser,
  GitHubInfo,
  GitHubCommitHistory,
  ProjectFounder,
  RepositoryTopicsResponse,
  ContributorData
} from '../../types/githubApi'

const githubApiUrl = process.env.GITHUB_API_URL || ''
/** Gets the repo's information via GitHub's GraphQL API
 * @param {string} query GraphQL query for the repo (including owner and name)
 * @param {string} authToken personal authorization token
 * @returns {any[]} the json data for the requested repo as by the graphql query
 */
export async function getRepoInfo(query: string, authToken: string): Promise<GitHubInfo | null> {
  const response: AxiosResponse<{ data: { repository: GitHubInfo } }> = await axios.post(
    githubApiUrl,
    {
      query
    },
    {
      headers: {
        Authorization: authToken
      }
    }
  )
  return response.data.data.repository
}

/** Gets a organizations information via GitHub's GraphQL API
 * @param {string} query GraphQL query for the organization (including owner and name)
 * @param {string} authToken personal authorization token
 * @returns {any[]} the json data for the requested organization as by the graphql query; null on error
 */
export async function getOrganizationInfo(
  query: string,
  authToken: string
): Promise<GitHubOrganization | null> {
  const response: AxiosResponse<{ data: { organization: GitHubOrganization } }> = await axios.post(
    githubApiUrl,
    {
      query: query
    },
    {
      headers: {
        Authorization: authToken
      }
    }
  )
  return response.data.data.organization
}

/** Gets a persons information via GitHub's GraphQL API
 * @param {string} query GraphQL query for the person (including owner and name)
 * @param {string} authToken personal authorization token
 * @returns {any[]} the json data for the requested person as by the graphql query; null on error
 */
export async function getUserInfo(query: string, authToken: string): Promise<GitHubUser | null> {
  const response: AxiosResponse<{ data: { user: GitHubUser } }> = await axios.post(
    githubApiUrl,
    {
      query: query
    },
    {
      headers: {
        Authorization: authToken
      }
    }
  )
  return response.data.data.user
}

/**
 * Returns a Array of Founders with their names, login names and twitter handles. This method goes trough the commit history of a specific repo
 * and fetches teh first 5 commits, which are most likley the initiators of a project. It then removes duplicates, because several commits can be from the
 * same person, but shouldn't be returned within the Array
 * @param owner: name of the owner of the github repo
 * @param name: name of the github repo
 * @returns An Array of the project founders
 */
export async function getRepoFounders(owner: string, name: string): Promise<ProjectFounder[]> {
  if (!owner || !name) {
    throw new Error('Not able to fetch repository to get founders of the project')
  }

  const query = `query {
        repository(owner: "${owner}", name: "${name}") {
          defaultBranchRef {
            target {
              ... on Commit {
                history(first: 5) {
                  edges {
                    node {
                      author {
                        user {
                          name
                          login
                          twitterUsername
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }`

  // Building the AxiosRequest and initiate the post request
  const authToken = 'Bearer ' + (process.env.GITHUB_API_TOKEN || '')
  const response: AxiosResponse<{ data: { repository: GitHubCommitHistory } }> = await axios.post(
    'https://api.github.com/graphql',
    {
      query
    },
    {
      headers: {
        Authorization: authToken
      }
    }
  )

  const distinctCommiters: ProjectFounder[] = []

  // checks, whether a login name appears twice and only pushes distinct founders into the array
  if (response?.data?.data?.repository?.defaultBranchRef?.target?.history?.edges) {
    response.data.data.repository.defaultBranchRef.target.history.edges.forEach((node) => {
      const loginName = node?.node?.author?.user?.login
      if (!distinctCommiters.find((c) => c.login === loginName)) {
        distinctCommiters.push({
          name: node?.node?.author?.user?.name ?? '',
          login: node?.node?.author?.user?.login ?? '',
          twitterUsername: node?.node?.author?.user?.twitterUsername ?? ''
        })
      }
    })
  } else {
    throw new Error(`No edges found in the commit history of the following repo: ${name}`)
  }

  return distinctCommiters
}

/**
 * Retrieves the repository topics from GitHub API for the specified repository.
 * @param repositoryOwner - The owner of the repository.
 * @param repositoryName - The name of the repository.
 * @returns A Promise that resolves to a string representing the repository topics.
 * @throws Error if the repository topics cannot be retrieved.
 * //returns topics defined by the founder
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getRepositoryTopics(
  repositoryOwner: string, //these need to be passed as parameter
  repositoryName: string,
  tokenGithub: string
) {
  const apiUrl = 'https://api.github.com/graphql'

  const query = `
    query {
      repository(owner: "${repositoryOwner}", name: "${repositoryName}") {
        repositoryTopics(first: 15) {
          nodes {
            topic {
              name
            }
          }
        }
      }
    }
  `

  const headers = {
    Authorization: `Bearer ${tokenGithub}`
  }

  const response: AxiosResponse<RepositoryTopicsResponse> = await axios.post(
    apiUrl,
    { query },
    { headers }
  )

  const repositoryTopics = response?.data?.data?.repository?.repositoryTopics?.nodes
  if (repositoryTopics && repositoryTopics?.length > 0) {
    const topics: string[] = repositoryTopics.map(
      (node: { topic: { name: string } }) => node.topic.name
    )
    return topics
  } else {
    return null
  }
}

/**
 * returns the amount of contribtuors. Not 100% accurate since the gitHub API does not return certain contributors and on the other hand
 * sometimes shows new contribtuors that can not be seen on the github page.
 * @param owner
 * @param repo
 * @returns array of strings containing the name of the contributor and the number of commits done by that perso
 */ export async function getContributorCount(
  owner: string,
  repo: string,
  authToken: string
): Promise<number> {
  try {
    const response: AxiosResponse<ContributorData> = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/contributors`,
      {
        params: {
          per_page: 1,
          anon: true
        },
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    )
    // console.log(response.headers)
    const linkHeader: string = response?.headers['link'] as string
    const lastPageMatch: RegExpMatchArray | null = linkHeader.match(/page=(\d+)>; rel="last"/)
    const lastPage: number = lastPageMatch ? parseInt(lastPageMatch[1]) : 1
    return lastPage
  } catch (error) {
    console.error(error)
    console.error('Error in getContributors')
    return 0
  }
}
