import { useGitRepositoriesQuery } from '@/graphql/gitRepositories'

/**
 * Simple component demonstrating how to use GraphQL queries
 */
export default function Example() {
  const [{ data, fetching, error }] = useGitRepositoriesQuery()

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  return (
    <div>
      {data?.gitRepositories.map((repository) => (
        <div key={repository?.id}>
          <h1>{repository?.name}</h1>
          <p>{repository?.stars}</p>
        </div>
      ))}
    </div>
  )
}
