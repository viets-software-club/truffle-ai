import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '@supabase/auth-helpers-react'
import { RowPinningState } from '@tanstack/react-table'
import CompareContent from '@/components/domain/compare'
import ProjectsTable from '@/components/domain/projects/ProjectsTable'
import { PercentileStats } from '@/components/domain/projects/columns'
import { defaultSort, PaginationParameters } from '@/components/domain/projects/types'
import Page from '@/components/shared/Page'
import {
  Project,
  ProjectFilter,
  PageInfo,
  useBookmarkIdsQuery,
  useTrendingProjectsQuery,
  ProjectOrderBy
} from '@/graphql/generated/gql'
import {
  useCategoryProjectsState,
  useComparePageRowPinningState,
  useLastViewedPageState
} from '@/stores/useProjectTableState'
import getPercentile from '@/util/getPercentile'
import { NextPageWithLayout } from '../_app'

const PAGE_SIZE = 30

/**
 * Compare projects page
 */
const ComparePage: NextPageWithLayout = () => {
  // Get project id from URL
  const {
    query: { category: categoryFromUrl }
  } = useRouter()

  const category =
    (typeof categoryFromUrl === 'string' ? categoryFromUrl : categoryFromUrl?.join('')) || ''

  const user = useUser()

  const { setFilters: setCategoryFilters, setSorting: setCategorySorting } =
    useCategoryProjectsState()
  const { lastViewedPage, setLastViewedPage } = useLastViewedPageState()

  const { rowPinning, setRowPinning } = useComparePageRowPinningState()

  const [data, setData] = useState<Project[]>()
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState<ProjectFilter>({})
  const [sorting, setSorting] = useState<ProjectOrderBy | null>(defaultSort)
  const [pageInfo, setPageInfo] = useState<PageInfo>()
  const [pagination, setPagination] = useState<PaginationParameters>({
    first: PAGE_SIZE,
    last: null,
    after: null,
    before: null
  })

  const [percentileStats, setPercentileStats] = useState<PercentileStats>({
    topTenPercent: {},
    topTwentyPercent: {},
    bottomTenPercent: {},
    bottomTwentyPercent: {}
  })

  const updateFilters = (filter: ProjectFilter) => {
    setFilters(filter)
  }

  // Fetches all bookmarked project ids of a user in the given category
  const [{ data: bookmarkData, fetching: bookmarksFetching, error: errorBookmarks }] =
    useBookmarkIdsQuery({
      variables: { userId: user?.id as string, category }
    })

  // Get array with all bookmarked project ids
  const bookmarkIds = bookmarkData?.bookmarkCollection?.edges?.map(
    edge => edge.node.project?.id as string
  ) as string[]

  const [{ data: urqlData, error: errorProjects }] = useTrendingProjectsQuery({
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

  const error = errorBookmarks || errorProjects

  // Only update table data when urql data changes
  useEffect(() => {
    if (urqlData) {
      setPageInfo(urqlData?.projectCollection?.pageInfo as PageInfo)
      const projectData = urqlData?.projectCollection?.edges?.map(edge => edge.node) as Project[]
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
    if (lastViewedPage !== category && bookmarkIds && !bookmarksFetching) {
      setLastViewedPage(category)
      setCategoryFilters({ ...filters, id: { in: bookmarkIds } })
    }
  }, [bookmarkIds])

  useEffect(() => {
    if (lastViewedPage === category && !bookmarksFetching) {
      setCategoryFilters({ ...filters, id: bookmarkIds ? { in: bookmarkIds } : undefined })
      setCategorySorting(sorting)
    }
  }, [filters, sorting])

  return (
    <ProjectsTable
      data={data}
      filters={filters}
      sorting={sorting}
      fetching={loading}
      error={error}
      setSorting={setSorting}
      updateFilters={updateFilters}
      totalCount={data?.length ?? 0} // @TODO: Fix totalCount
      pageInfo={pageInfo as PageInfo}
      setPagination={setPagination}
      pageSize={PAGE_SIZE}
      percentileStats={percentileStats}
      beforeTable={<CompareContent data={data} category={category} loading={loading} />}
      hideTimeFrame
      showPinned
      rowPinning={{
        top: rowPinning[category]
      }}
      setRowPinning={(
        pinning: RowPinningState | ((prevState: RowPinningState) => RowPinningState)
      ) => {
        setRowPinning({
          ...rowPinning,
          [category]: [
            ...(rowPinning[category] ?? []),
            ...((typeof pinning === 'function'
              ? pinning({ top: rowPinning[category] }).top
              : pinning.top) ?? [])
          ].filter((value, index, self) => self.indexOf(value) === index)
        })
      }}
    />
  )
}

ComparePage.getLayout = page => <Page>{page}</Page>

export default ComparePage
