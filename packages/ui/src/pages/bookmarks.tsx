import { useState, useEffect } from 'react'
import { useUser } from '@supabase/auth-helpers-react'
import { defaultSort, PaginationParameters } from '@/components/page/overview/types'
import Page from '@/components/side-effects/Page'
import ProjectsTable from '@/components/side-effects/ProjectsTable'
import { PercentileStats } from '@/components/side-effects/ProjectsTable/columns'
import withAuth from '@/components/side-effects/withAuth'
import {
  PageInfo,
  Project,
  ProjectFilter,
  ProjectOrderBy,
  useBookmarkIdsQuery,
  useTrendingProjectsQuery
} from '@/graphql/generated/gql'
import getPercentile from '@/util/getPercentile'

// @TODO add category column to table

/**
 * Project table with all bookmarks of a user
 */
const Bookmarks = () => {
  const PAGE_SIZE = 30
  const [data, setData] = useState<Project[]>([])
  const [filters, setFilters] = useState<ProjectFilter>({})
  const [sorting, setSorting] = useState<ProjectOrderBy | null>(defaultSort)
  const [pageInfo, setPageInfo] = useState<PageInfo>()
  const [pagination, setPagination] = useState<PaginationParameters>({
    first: PAGE_SIZE,
    last: null,
    after: null,
    before: null
  })
  const [totalCount, setTotalCount] = useState(0)
  const user = useUser()

  const [percentileStats, setPercentileStats] = useState<PercentileStats>({
    topTenPercent: {},
    topTwentyPercent: {},
    bottomTenPercent: {},
    bottomTwentyPercent: {}
  })

  const updateFilters = (filter: ProjectFilter) => {
    setFilters(filter)
  }

  const [{ data: bookmarkData, fetching: fetchingBookmarks, error: errorBookmarks }] =
    useBookmarkIdsQuery({ variables: { userId: user?.id as string } })

  // Get array with all bookmarked project ids
  const bookmarkIds = bookmarkData?.bookmarkCollection?.edges?.map(
    edge => edge.node.project?.id as string
  ) as string[]

  const [{ data: urqlData, fetching: fetchingProjects, error: errorProjects }] =
    useTrendingProjectsQuery({
      variables: {
        orderBy: sorting || defaultSort,
        filter: {
          ...filters,
          id: {
            in: bookmarkIds
          }
        },
        ...pagination
      }
    })

  // Only update table data when urql data changes
  useEffect(() => {
    if (urqlData) {
      setPageInfo(urqlData?.projectCollection?.pageInfo as PageInfo)
      setTotalCount(urqlData?.projectCollection?.edges?.length ?? 0)
      const projectData = urqlData?.projectCollection?.edges?.map(edge => edge.node) as Project[]
      setData(projectData)
      setPercentileStats({
        topTenPercent: getPercentile(projectData, 0.1),
        bottomTenPercent: getPercentile(projectData, 0.1, false),
        topTwentyPercent: getPercentile(projectData, 0.2),
        bottomTwentyPercent: getPercentile(projectData, 0.2, false)
      })
    }
  }, [urqlData])

  return (
    <Page>
      <ProjectsTable
        data={data}
        filters={filters}
        sorting={sorting}
        fetching={fetchingProjects || fetchingBookmarks}
        error={errorProjects || errorBookmarks}
        hideTimeFrame
        setSorting={setSorting}
        updateFilters={updateFilters}
        pageInfo={pageInfo as PageInfo}
        totalCount={totalCount}
        pageSize={PAGE_SIZE}
        setPagination={setPagination}
        percentileStats={percentileStats}
      />
    </Page>
  )
}

export default withAuth(Bookmarks)
