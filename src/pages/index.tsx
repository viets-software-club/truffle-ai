import { useState, useEffect } from 'react'
import Page from '@/components/side-effects/Page'
import withAuth from '@/components/side-effects/withAuth'
import ProjectsTable from '@/components/side-effects/ProjectsTable'
import { defaultFilters, defaultSort, paginationParameters } from '@/components/page/overview/types'
import {
  PageInfo,
  Project,
  ProjectFilter,
  ProjectOrderBy,
  useTrendingProjectsQuery
} from '@/graphql/generated/gql'

const TrendingProjects = () => {
  const PAGE_SIZE = 30
  const [data, setData] = useState<Project[]>([])
  const [filters, setFilters] = useState<ProjectFilter>(defaultFilters)
  const [sorting, setSorting] = useState<ProjectOrderBy | null>(defaultSort)
  const [pageInfo, setPageInfo] = useState<PageInfo>()
  const [pagination, setPagination] = useState<paginationParameters>({
    first: PAGE_SIZE,
    last: null,
    after: null,
    before: null
  })
  const [totalCount, setTotalCount] = useState(0)

  const updateFilters = (filter: ProjectFilter) => {
    setFilters(filter)
  }
  // Fetch data from Supabase using generated Urql hook
  const [{ data: urqlData, fetching, error }] = useTrendingProjectsQuery({
    variables: {
      orderBy: sorting || defaultSort,
      filter: filters || defaultFilters,
      ...pagination
    }
  })

  // Fetch data from Supabase using generated Urql hook for total count
  const [{ data: urqlDataTotal }] = useTrendingProjectsQuery({
    variables: {
      orderBy: sorting || defaultSort,
      filter: filters || defaultFilters
    }
  })

  // Only update table data when urql data changes
  useEffect(() => {
    if (urqlData) {
      setData(urqlData?.projectCollection?.edges?.map((edge) => edge.node) as Project[])
      setPageInfo(urqlData?.projectCollection?.pageInfo as PageInfo)
      setTotalCount(urqlDataTotal?.projectCollection?.edges?.length ?? 0)
    }
  }, [urqlData, urqlDataTotal])

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
        totalCount={totalCount}
        pageInfo={pageInfo}
        setPagination={setPagination}
        pageSize={PAGE_SIZE}
      />
    </Page>
  )
}

export default withAuth(TrendingProjects)
