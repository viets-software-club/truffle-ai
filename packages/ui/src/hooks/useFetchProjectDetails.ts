import { useParams } from 'next/navigation'
import { useUser } from '@supabase/auth-helpers-react'
import {
  ProjBookmark,
  ProjRepo,
  useBookmarkIdsQuery,
  useProjectDetailsQuery
} from '@/graphql/generated/gql'

const useFetchProjectDetails = () => {
  const projectId = useParams()?.id
  const id = (typeof projectId === 'string' ? projectId : projectId?.join('')) || ''

  // User data from Supabase auth session
  const user = useUser()

  // Get project details data using generated hook (returns array with 1 project if successful)
  const [{ data, fetching, error }] = useProjectDetailsQuery({
    variables: { id }
  })

  const [{ data: bookmarkIds }] = useBookmarkIdsQuery({
    variables: { userId: user?.id as string, projectId: id }
  })

  // First entry of returned collection contains project details
  const project = data?.projRepoCollection?.edges?.map(edge => edge.node)[0] as ProjRepo | undefined
  // Bookmarks for current user
  const bookmarks = bookmarkIds?.projBookmarkCollection?.edges?.map(
    edge => edge.node
  ) as ProjBookmark[]

  // Current category of if project is bookmarked
  const categories = bookmarks?.flatMap(
    bookmark => bookmark.projCatAndProjBookmarkCollection?.edges?.map(edge => edge.node.projCat)
  )

  return { project, fetching, error, bookmarks, categories }
}

export default useFetchProjectDetails
