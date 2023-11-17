import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useUser } from '@supabase/auth-helpers-react'
import { defaultSort, PaginationParameters } from '@/components/page/overview/types'
import CompareContent from '@/components/side-effects/Compare/CompareContent'
import Page from '@/components/side-effects/Page'
import ProjectsTable from '@/components/side-effects/ProjectsTable'
import { PercentileStats } from '@/components/side-effects/ProjectsTable/columns'
import withAuth from '@/components/side-effects/withAuth'
import {
  Project,
  ProjectFilter,
  ProjectOrderBy,
  PageInfo,
  useBookmarkIdsQuery,
  useTrendingProjectsQuery
} from '@/graphql/generated/gql'
import getPercentile from '@/util/getPercentile'

const PAGE_SIZE = 30

/**
 * Compare projects page
 */
const ComparePage: NextPage = () => {
  // Get project id from URL
  const {
    query: { category: categoryFromUrl }
  } = useRouter()

  const category =
    (typeof categoryFromUrl === 'string' ? categoryFromUrl : categoryFromUrl?.join('')) || ''

  const user = useUser()

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
  const [{ data: bookmarkData, fetching: fetchingBookmarks, error: errorBookmarks }] =
    useBookmarkIdsQuery({ variables: { userId: user?.id as string, category } })

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

  const fetching = fetchingBookmarks || fetchingProjects
  const error = errorBookmarks || errorProjects

  // Only update table data when urql data changes
  useEffect(() => {
    if (urqlData) {
      setPageInfo(urqlData?.projectCollection?.pageInfo as PageInfo)
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
        fetching={fetching}
        error={error}
        setSorting={setSorting}
        updateFilters={updateFilters}
        totalCount={data.length} // @TODO: Fix totalCount
        pageInfo={pageInfo as PageInfo}
        setPagination={setPagination}
        pageSize={PAGE_SIZE}
        percentileStats={percentileStats}
        beforeTable={<CompareContent data={data} category={category} />}
      />
    </Page>
  )
}

export default withAuth(ComparePage)
