import { useEffect, useState } from 'react'
import { useUser } from '@supabase/auth-helpers-react'
import { PageInfo, ProjBookmark, useFilteredBookmarksQuery } from '@/graphql/generated/gql'
import useBookmarksSync from '@/hooks/useBookmarksSync'
import useSidebarCategories from './useSidebarCategories'

const PAGE_SIZE = 30

const useFetchBookmarks = (categoryId?: string) => {
  const [bookmarks, setBookmarks] = useState<ProjBookmark[]>([])
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    hasNextPage: true,
    hasPreviousPage: false
  })

  const user = useUser()
  const { counter } = useBookmarksSync()
  const { categoriesLength, setCategoriesLength } = useSidebarCategories()

  // Fetch data from Supabase using generated Urql hook
  const [{ data: urqlData, fetching }, refetch] = useFilteredBookmarksQuery({
    variables: {
      userId: user?.id as string,
      categoryId,
      first: PAGE_SIZE,
      after: pageInfo?.endCursor
    }
  })

  // Only update state when urql data changes
  useEffect(() => {
    if (urqlData) {
      const edges = urqlData?.projBookmarkCollection?.edges
      setBookmarks(
        [...bookmarks, ...(edges?.map(edge => edge.node) as ProjBookmark[])].reduceRight(
          (acc, bookmark) =>
            acc.some(b => b.projRepoId === bookmark.projRepoId) ? acc : [...acc, bookmark],
          [] as ProjBookmark[]
        )
      )

      if (pageInfo.hasNextPage) {
        setPageInfo(urqlData?.projBookmarkCollection?.pageInfo as PageInfo)
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
    const newCategoriesLength = Array.from(
      new Set(bookmarks?.flatMap(b => b.projCatAndProjBookmarkCollection.edges.map(e => e.node)))
    ).length

    // Only update categoriesLength if it has changed
    if (newCategoriesLength !== categoriesLength) setCategoriesLength(newCategoriesLength)
  }, [bookmarks])

  // Get unique list of categories from bookmarks
  const categories = Array.from(
    new Set(
      bookmarks?.flatMap(b => b.projCatAndProjBookmarkCollection.edges.map(e => e.node.projCat))
    )
  ).filter(value => value !== undefined && value !== null)

  return { bookmarks, categories, fetching, categoriesLength }
}

export default useFetchBookmarks
