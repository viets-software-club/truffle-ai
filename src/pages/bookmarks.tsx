import { useState, useEffect } from 'react'
import { useUser } from '@supabase/auth-helpers-react'
import Page from '@/components/side-effects/Page'
import withAuth from '@/components/side-effects/withAuth'
import ProjectsTable from '@/components/side-effects/ProjectsTable'
import { defaultSort } from '@/components/page/overview/types'
import {
  Project,
  ProjectFilter,
  ProjectOrderBy,
  useBookmarkIdsQuery,
  useTrendingProjectsQuery
} from '@/graphql/generated/gql'

// @TODO add category column to table

const NUMERIC_FIELDS = [
  'contributorCount',
  'forkCount',
  'issueCount',
  'pullRequestCount',
  'starCount'
] as const

type NumericField = (typeof NUMERIC_FIELDS)[number]
type NumericFieldStats = Record<NumericField, number | null>

/**
 * Project table with all bookmarks of a user
 */
const Bookmarks = () => {
  const [data, setData] = useState<Project[]>([])
  const [filters, setFilters] = useState<ProjectFilter>({})
  const [sorting, setSorting] = useState<ProjectOrderBy | null>(defaultSort)

  const getPercentileValue = (projects: Project[], percentile: number, sortDescending = true) => {
    const result: NumericFieldStats = {
      contributorCount: null,
      forkCount: null,
      issueCount: null,
      pullRequestCount: null,
      starCount: null
    }

    NUMERIC_FIELDS.forEach((field) => {
      const sortedData = projects
        .map((item) => item[field] ?? null)
        .filter((item: number | null): item is number => item !== null)
        .sort((a, b) => (sortDescending ? b - a : a - b))

      const percentileIndex = Math.floor(sortedData.length * percentile)
      result[field] =
        percentileIndex < sortedData.length && sortedData.length > 0
          ? sortedData[percentileIndex]
          : null
    })

    return result
  }

  const user = useUser()

  const [percentileStats, setPercentileStats] = useState({
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
    (edge) => edge.node.project?.id as string
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
        }
      }
    })

  // Only update table data when urql data changes
  useEffect(() => {
    if (urqlData) {
      const projectData = urqlData?.projectCollection?.edges?.map((edge) => edge.node) as Project[]
      setData(projectData)
      setPercentileStats({
        topTenPercent: getPercentileValue(projectData, 0.1),
        bottomTenPercent: getPercentileValue(projectData, 0.1, false),
        topTwentyPercent: getPercentileValue(projectData, 0.2),
        bottomTwentyPercent: getPercentileValue(projectData, 0.2, false)
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
        percentileStats={percentileStats}
      />
    </Page>
  )
}

export default withAuth(Bookmarks)
