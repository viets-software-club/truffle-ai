import { useState, useEffect } from 'react'
import ProjectsTable from '@/components/domain/projects/ProjectsTable'
import { PercentileStats } from '@/components/domain/projects/columns'
import { defaultSort, PaginationParameters } from '@/components/domain/projects/types'
import Page from '@/components/shared/Page'
import {
  GthbTrending,
  GthbTrendingFilter,
  PageInfo,
  useTrendingProjectsQuery
} from '@/graphql/generated/gql'
import { useLastViewedPageState, useTrendingProjectsState } from '@/hooks/useProjectTableState'
import getPercentile from '@/util/getPercentile'
import { NextPageWithLayout } from './_app'

const PAGE_SIZE = 30

const TrendingProjects: NextPageWithLayout = () => {
  const { filters, setFilters, sorting, setSorting } = useTrendingProjectsState()
  const { setLastViewedPage } = useLastViewedPageState()

  const [data, setData] = useState<GthbTrending[]>()
  const [loading, setLoading] = useState(true)
  const [pageInfo, setPageInfo] = useState<PageInfo>()
  const [pagination, setPagination] = useState<PaginationParameters>({
    first: PAGE_SIZE,
    last: null,
    after: null,
    before: null
  })
  const [totalCount, setTotalCount] = useState(0)
  const [percentileStats, setPercentileStats] = useState<PercentileStats>({
    topTenPercent: {},
    topTwentyPercent: {},
    bottomTenPercent: {},
    bottomTwentyPercent: {}
  })

  const updateFilters = (filter: GthbTrendingFilter) => {
    setFilters(filter)
  }
  // Fetch data from Supabase using generated Urql hook
  const [{ data: urqlData, error }] = useTrendingProjectsQuery({
    variables: {
      orderBy: sorting || defaultSort,
      filter: {
        ...filters
      },
      ...pagination
    }
  })

  // Only update table data when urql data changes
  useEffect(() => {
    if (urqlData) {
      setPageInfo(urqlData?.gthbTrendingCollection?.pageInfo as PageInfo)
      setTotalCount(urqlData?.gthbTrendingCollection?.edges?.length ?? 0)
      const projectData = urqlData?.gthbTrendingCollection?.edges?.map(
        edge => edge.node
      ) as GthbTrending[]
      setData(projectData)
      setLoading(false)
      const repos = projectData.map(project => project.gthbRepo)
      setPercentileStats({
        topTenPercent: getPercentile(repos, 0.1),
        bottomTenPercent: getPercentile(repos, 0.1, false),
        topTwentyPercent: getPercentile(repos, 0.2),
        bottomTwentyPercent: getPercentile(repos, 0.2, false)
      })
    }
  }, [urqlData])

  useEffect(() => {
    setLastViewedPage('trending')
  }, [])

  return (
    <ProjectsTable
      data={data?.map(project => project.gthbRepo)}
      filters={filters}
      sorting={sorting}
      fetching={loading}
      error={error}
      setSorting={setSorting}
      updateFilters={updateFilters}
      totalCount={totalCount}
      pageInfo={pageInfo as PageInfo}
      setPagination={setPagination}
      pageSize={PAGE_SIZE}
      percentileStats={percentileStats}
    />
  )
}

TrendingProjects.getLayout = page => <Page>{page}</Page>

export default TrendingProjects
