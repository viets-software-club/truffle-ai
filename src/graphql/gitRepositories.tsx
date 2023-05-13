import gql from 'graphql-tag'
import * as Urql from 'urql'
import * as Types from './types'

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type GitRepositoriesQueryVariables = Types.Exact<{ [key: string]: never }>

export type GitRepositoriesQuery = {
  __typename?: 'Query'
  gitRepositories: Array<{
    __typename?: 'GitRepository'
    id: string
    name: string
    stars: number
  } | null>
}

export const GitRepositoriesDocument = gql`
  query GitRepositories {
    gitRepositories {
      id
      name
      stars
    }
  }
`

export function useGitRepositoriesQuery(
  options?: Omit<Urql.UseQueryArgs<GitRepositoriesQueryVariables>, 'query'>
) {
  return Urql.useQuery<GitRepositoriesQuery, GitRepositoriesQueryVariables>({
    query: GitRepositoriesDocument,
    ...options
  })
}
