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
import getPercentile from '@/util/getPercentile'

// @TODO add category column to table

/**
 * Project table with all bookmarks of a user
 */
const Bookmarks = () => {
  const [data, setData] = useState<Project[]>([])
  const [filters, setFilters] = useState<ProjectFilter>({})
  const [sorting, setSorting] = useState<ProjectOrderBy | null>(defaultSort)

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
        percentileStats={percentileStats}
      />
    </Page>
  )
}

export default withAuth(Bookmarks)
