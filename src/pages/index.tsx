import { useState, useEffect } from 'react'
import Page from '@/components/side-effects/Page'
import withAuth from '@/components/side-effects/withAuth'
import ProjectsTable from '@/components/side-effects/ProjectsTable'
import { defaultSort } from '@/components/page/overview/types'
import {
  Project,
  ProjectFilter,
  ProjectOrderBy,
  useTrendingProjectsQuery
} from '@/graphql/generated/gql'
import defaultFilters from '@/components/page/overview/defaultFilters'
import getPercentile from '@/util/getPercentile'

const TrendingProjects = () => {
  const [data, setData] = useState<Project[]>([])
  const [filters, setFilters] = useState<ProjectFilter>(defaultFilters)
  const [sorting, setSorting] = useState<ProjectOrderBy | null>(defaultSort)

  const [percentileStats, setPercentileStats] = useState({
    topTenPercent: {},
    topTwentyPercent: {},
    bottomTenPercent: {},
    bottomTwentyPercent: {}
  })

  const updateFilters = (filter: ProjectFilter) => {
    setFilters(filter)
  }

  // Fetch data from Supabase using generated Urql hook
  const [{ data: urqlData, fetching, error }] = useTrendingProjectsQuery({
    variables: {
      orderBy: sorting || defaultSort,
      filter: filters || defaultFilters
    }
  })

  // Only update table data when urql data changes
  useEffect(() => {
    if (urqlData) {
      const projectData = urqlData?.projectCollection?.edges?.map((edge) => edge.node) as Project[]
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
        percentileStats={percentileStats}
      />
    </Page>
  )
}

export default withAuth(TrendingProjects)
