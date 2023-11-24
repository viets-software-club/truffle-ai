import { useState, useEffect } from 'react'
import ProjectsTable from '@/components/domain/projects/ProjectsTable'
import { PercentileStats } from '@/components/domain/projects/columns'
import defaultFilters from '@/components/domain/projects/filters/defaultFilters'
import { defaultSort, PaginationParameters } from '@/components/domain/projects/types'
import Page from '@/components/shared/Page'
import withAuth from '@/components/shared/hoc/withAuth'
import {
  PageInfo,
  Project,
  ProjectFilter,
  ProjectOrderBy,
  useTrendingProjectsQuery
} from '@/graphql/generated/gql'
import getPercentile from '@/util/getPercentile'

const PAGE_SIZE = 30

const TrendingProjects = () => {
  const [data, setData] = useState<Project[]>()
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState<ProjectFilter>(defaultFilters)
  const [sorting, setSorting] = useState<ProjectOrderBy | null>(defaultSort)
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

  const updateFilters = (filter: ProjectFilter) => {
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
      setPageInfo(urqlData?.projectCollection?.pageInfo as PageInfo)
      setTotalCount(urqlData?.projectCollection?.edges?.length ?? 0)
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

  return (
    <Page>
      <ProjectsTable
        data={data}
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
    </Page>
  )
}

export default withAuth(TrendingProjects)
