import { useEffect, useState } from 'react'
import { useUser } from '@supabase/auth-helpers-react'
import { Bookmark, PageInfo, useFilteredBookmarksQuery } from '@/graphql/generated/gql'
import useBookmarksSync from '@/hooks/useBookmarksSync'
import useSidebarCategories from './useSidebarCategories'

const PAGE_SIZE = 30

const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    hasNextPage: true,
    hasPreviousPage: false
  })

  const user = useUser()
  const { counter } = useBookmarksSync()
  const { categoriesLength, setCategoriesLength } = useSidebarCategories()

  // Fetch data from Supabase using generated Urql hook
  const [{ data: urqlData, fetching }, refetch] = useFilteredBookmarksQuery({
    variables: { userId: user?.id as string, first: PAGE_SIZE, after: pageInfo?.endCursor }
  })

  // Only update state when urql data changes
  useEffect(() => {
    if (urqlData) {
      const edges = urqlData?.bookmarkCollection?.edges
      setBookmarks(
        [...bookmarks, ...(edges?.map(edge => edge.node) as Bookmark[])].reduceRight(
          (acc, bookmark) =>
            acc.some(b => b.project?.id === bookmark.project?.id) ? acc : [...acc, bookmark],
          [] as Bookmark[]
        )
      )

      if (pageInfo.hasNextPage) {
        setPageInfo(urqlData?.bookmarkCollection?.pageInfo as PageInfo)
      }
    }
  }, [urqlData, pageInfo])

  // Refetch when bookmarks are added or removed
  useEffect(() => {
    if (counter > 0) {
      setPageInfo({ hasNextPage: true, hasPreviousPage: false, endCursor: null })
      refetch({
        requestPolicy: 'network-only'
      })
    }
  }, [counter])

  useEffect(() => {
    const newCategoriesLength = Array.from(new Set(bookmarks?.map(b => b.category))).length

    // Only update categoriesLength if it has changed
    if (newCategoriesLength !== categoriesLength) setCategoriesLength(newCategoriesLength)
  }, [bookmarks])

  // Get unique list of categories from bookmarks
  const categories = Array.from(new Set(bookmarks.map(bookmark => bookmark.category))).filter(
    value => value !== undefined && value !== null
  ) as string[]

  return { bookmarks, categories, fetching, categoriesLength }
}

export default useBookmarks
