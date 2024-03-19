import { useState, useEffect } from 'react'
import ProjectsTable from '@/components/domain/projects/ProjectsTable'
import { PercentileStats } from '@/components/domain/projects/columns'
import { defaultSort, PaginationParameters } from '@/components/domain/projects/types'
import Page from '@/components/shared/Page'
import {
  GthbRepo,
  GthbTrendingFilter,
  PageInfo,
  useTrendingProjectsQuery
} from '@/graphql/generated/gql'
import { useBookmarkedProjectsState, useLastViewedPageState } from '@/hooks/useProjectTableState'
import getPercentile from '@/util/getPercentile'
import { NextPageWithLayout } from './_app'

const PAGE_SIZE = 30

// @TODO create new query for bookmarked projects

/**
 * Project table with all bookmarks of a user
 */
const Bookmarks: NextPageWithLayout = () => {
  const { filters, setFilters, sorting, setSorting } = useBookmarkedProjectsState()
  const { setLastViewedPage } = useLastViewedPageState()

  const [data, setData] = useState<GthbRepo[]>()
  const [loading, setLoading] = useState(true)
  const [pageInfo, setPageInfo] = useState<PageInfo>()
  const [pagination, setPagination] = useState<PaginationParameters>({
    first: PAGE_SIZE,
    last: null,
    after: null,
    before: null
  })
  const [totalCount, setTotalCount] = useState(0)
  // const user = useUser()

  const [percentileStats, setPercentileStats] = useState<PercentileStats>({
    topTenPercent: {},
    topTwentyPercent: {},
    bottomTenPercent: {},
    bottomTwentyPercent: {}
  })

  const updateFilters = (filter: GthbTrendingFilter) => {
    setFilters(filter)
  }

  // const [{ data: bookmarkData, error: errorBookmarks }] = useBookmarkIdsQuery({
  //   variables: { userId: user?.id as string }
  // })

  // Get array with all bookmarked project ids
  // const bookmarkIds = bookmarkData?.projBookmarkCollection?.edges?.map(
  //   edge => edge.node.projBookmarkId as string
  // ) as string[]

  const [{ data: urqlData, error: errorProjects }] = useTrendingProjectsQuery({
    variables: {
      orderBy: sorting || defaultSort,
      filter: {
        ...filters
        // @TODO add filter for bookmarked projects
        // id: {
        //   in: bookmarkIds
        // }
      },
      ...pagination
    }
  })

  // Only update table data when urql data changes
  useEffect(() => {
    if (urqlData) {
      setPageInfo(urqlData?.gthbTrendingCollection?.pageInfo as PageInfo)
      setTotalCount(urqlData?.gthbTrendingCollection?.edges?.length ?? 0)
      const projectData =
        urqlData?.gthbTrendingCollection?.edges?.map(edge => edge.node.gthbRepo as GthbRepo) ?? []
      setData(projectData)
      setLoading(false)
      setPercentileStats({
        topTenPercent: getPercentile(projectData, 0.1),
        bottomTenPercent: getPercentile(projectData, 0.1, false),
        topTwentyPercent: getPercentile(projectData, 0.2),
        bottomTwentyPercent: getPercentile(projectData, 0.2, false)
      })
    }
  }, [urqlData])

  useEffect(() => {
    setLastViewedPage('bookmarked')
  }, [])

  return (
    <ProjectsTable
      data={data}
      filters={filters}
      sorting={sorting}
      fetching={loading}
      // error={errorProjects || errorBookmarks}
      error={errorProjects}
      hideTimeFrame
      setSorting={setSorting}
      updateFilters={updateFilters}
      pageInfo={pageInfo as PageInfo}
      totalCount={totalCount}
      pageSize={PAGE_SIZE}
      setPagination={setPagination}
      percentileStats={percentileStats}
    />
  )
}

Bookmarks.getLayout = page => <Page>{page}</Page>

export default Bookmarks
