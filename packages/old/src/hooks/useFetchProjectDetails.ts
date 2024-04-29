// import { useParams } from 'next/navigation'
// import { useUser } from '@supabase/auth-helpers-react'
// import {
//   Bookmark,
//   Project,
//   useBookmarkIdsQuery,
//   useProjectDetailsQuery
// } from '@/graphql/generated/gql'

// const useFetchProjectDetails = () => {
//   const projectId = useParams()?.id
//   const id = (typeof projectId === 'string' ? projectId : projectId?.join('')) || ''

//   // User data from Supabase auth session
//   const user = useUser()

//   // Get project details data using generated hook (returns array with 1 project if successful)
//   const [{ data, fetching, error }] = useProjectDetailsQuery({
//     variables: { id }
//   })

//   const [{ data: bookmarkIds }] = useBookmarkIdsQuery({
//     variables: { userId: user?.id as string, projectId: id }
//   })

//   // First entry of returned collection contains project details
//   const project = data?.projectCollection?.edges?.map(edge => edge.node)[0] as Project | undefined
//   // Array of length 1 with bookmark details if bookmarked, otherwise empty array
//   const bookmarks = bookmarkIds?.bookmarkCollection?.edges?.map(edge => edge.node) as Bookmark[]

//   // Whether project is bookmarked or not
//   const isBookmarked = bookmarks?.length > 0 && bookmarks[0].project?.id === id
//   // Current category of if project is bookmarked
//   const category = isBookmarked ? (bookmarks[0].category as string) : undefined

//   return { project, fetching, error, isBookmarked, category }
// }

// export default useFetchProjectDetails
