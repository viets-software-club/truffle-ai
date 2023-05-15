import { NextPage } from 'next'
import { useProjectsQuery } from '@/generated/gql'

/**
 * Simple component demonstrating how to use GraphQL queries
 */
const Example: NextPage = () => {
  const [{ data, fetching, error }] = useProjectsQuery()

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  return (
    <div>
      {data?.projects.map((project) => (
        <div key={project.id}>
          <h1>{project?.gitHubInformation.name}</h1>
          <p>{project?.gitHubInformation.about}</p>
        </div>
      ))}
    </div>
  )
}

export default Example
