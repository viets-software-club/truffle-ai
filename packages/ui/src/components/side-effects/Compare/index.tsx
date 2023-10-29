import { useEffect, useState } from 'react'
import { BiPencil } from 'react-icons/bi'
import { FaSlack } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { useUser } from '@supabase/auth-helpers-react'
import {
  useReactTable,
  getCoreRowModel,
  ColumnOrderState,
  getFilteredRowModel
} from '@tanstack/react-table'
import ChartWrapper, { DataPoint } from '@/components/page/details/ChartWrapper'
import FilterBar from '@/components/page/overview/FilterBar'
import Table from '@/components/page/overview/Table'
import TopBar from '@/components/page/overview/TopBar'
import { defaultSort, paginationParameters } from '@/components/page/overview/types'
import Banner from '@/components/page/settings/Banner'
import Button from '@/components/pure/Button'
import Error from '@/components/pure/Error'
import Loading from '@/components/pure/Loading'
import CategoryModal from '@/components/side-effects/Compare/CategoryModal'
import createColumns from '@/components/side-effects/ProjectsTable/columns'
import {
  PageInfo,
  Project,
  ProjectFilter,
  ProjectOrderBy,
  useBookmarkIdsQuery,
  useTrendingProjectsQuery
} from '@/graphql/generated/gql'
import getPercentile from '@/util/getPercentile'
import sendSlackNotification from '@/util/sendSlackNotification'

type CompareProps = {
  category: string
}

/**
 * Compare projects component
 */
const Compare = ({ category }: CompareProps) => {
  const PAGE_SIZE = 30
  const [data, setData] = useState<Project[]>([])
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([])
  const [filters, setFilters] = useState<ProjectFilter>({})
  const [sorting, setSorting] = useState<ProjectOrderBy | null>(defaultSort)
  const [columnVisibility, setColumnVisibility] = useState({})
  const [slackLoading, setSlackLoading] = useState(false)
  const [notificationStatus, setNotificationStatus] = useState<'success' | 'error' | ''>('')
  const [pageInfo, setPageInfo] = useState<PageInfo>()
  const [pagination, setPagination] = useState<paginationParameters>({
    first: PAGE_SIZE,
    last: null,
    after: null,
    before: null
  })
  const [selectedMetric, setSelectedMetric] = useState('Stars')
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)

  const [percentileStats, setPercentileStats] = useState({
    topTenPercent: {},
    topTwentyPercent: {},
    bottomTenPercent: {},
    bottomTwentyPercent: {}
  })

  const { topTenPercent, topTwentyPercent, bottomTenPercent, bottomTwentyPercent } = percentileStats

  const [columns, setColumns] = useState(() =>
    createColumns(bottomTenPercent, topTenPercent, topTwentyPercent, bottomTwentyPercent)
  )

  const user = useUser()
  const router = useRouter()

  const updateFilters = (filter: ProjectFilter) => {
    setFilters(filter)
  }

  // Redirects to new category page after renaming
  const redirect = (newCategory: string) => {
    void router.replace(`/compare/${newCategory}`)
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

  useEffect(() => {
    setColumns(() =>
      createColumns(bottomTenPercent, topTenPercent, topTwentyPercent, bottomTwentyPercent)
    )
  }, [bottomTenPercent, topTenPercent, topTwentyPercent, bottomTwentyPercent])

  // Initialize TanStack table
  const table = useReactTable({
    data,
    columns,
    state: {
      columnVisibility,
      columnOrder
    },
    enableColumnFilters: true,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  })

  const toggleCategoryModal = () => {
    setCategoryModalOpen(!categoryModalOpen)
  }

  const handleNotificationWrapper = async (message: string) => {
    setNotificationStatus(await sendSlackNotification(message))
  }

  const sendSlackMessage = () => {
    setSlackLoading(true)
    const savedMessage = localStorage.getItem('slackMessageMultiple') || ''
    const message = `${savedMessage}\n${table
      .getRowModel()
      .rows.map(
        row =>
          `- <${row.original.githubUrl as string}|${row.original.name as string}>, ${
            row.original.starCount as number
          } stars`
      )
      .join('\n')}\n`

    void handleNotificationWrapper(message)

    setSlackLoading(false)
  }

  return (
    <>
      <TopBar
        columns={table.getAllLeafColumns()}
        filters={filters}
        sorting={sorting}
        hideTimeFrame
        setSorting={setSorting}
        updateFilters={updateFilters}
      />

      {(Object.keys(filters).length > 0 || sorting) && pageInfo && (
        <FilterBar
          filters={filters}
          updateFilters={updateFilters}
          currentEntries={data.length}
          totalEntries={data.length} // @TODO get total entries from DB
          sorting={sorting}
          setSorting={setSorting}
          pageInfo={pageInfo}
          setPagination={setPagination}
          pageSize={PAGE_SIZE}
        />
      )}

      <div className='flex w-full flex-col pt-[120px]'>
        <div className='flex flex-row items-center justify-between px-6 pt-3.5'>
          <div className='flex flex-col'>
            <p className='text-xs font-medium uppercase text-gray-500'>Compare</p>
            <h1 className='text-2xl font-medium'>{category}</h1>
          </div>

          <div className='flex flex-row items-center justify-end gap-2'>
            <Button onClick={sendSlackMessage} className='text-white'>
              <FaSlack />
              {slackLoading ? 'Loading...' : 'Send to Slack'}
            </Button>

            {notificationStatus === 'success' && (
              <Banner variant='success' message='Slack notification sent' />
            )}

            {notificationStatus === 'error' && (
              <Banner variant='error' message='Error sending notification' />
            )}

            <Button className='text-white' onClick={toggleCategoryModal}>
              <BiPencil />
              Edit category
            </Button>
          </div>
        </div>

        {!fetching && !error && data.length > 0 && (
          <>
            <ChartWrapper
              datasets={data.map(project => ({
                id: project.id as string,
                name: project.name as string,
                data:
                  selectedMetric === 'Stars'
                    ? (project.starHistory as DataPoint[])
                    : (project.forkHistory as DataPoint[])
              }))}
              multipleLines
              selectedMetric={selectedMetric}
              setSelectedMetric={setSelectedMetric}
            />

            <div className='flex flex-row items-center justify-between px-6 py-3.5'>
              <div className='flex flex-col'>
                <p className='font-medium'>All projects in this category</p>
              </div>
            </div>
          </>
        )}

        {fetching && <Loading />}

        {error && <Error />}

        {data.length === 0 && !error && !fetching && (
          <p className='w-full p-12 text-center text-sm text-gray-300'>No projects found</p>
        )}

        {data.length > 0 && !error && <Table table={table} />}

        <CategoryModal
          open={categoryModalOpen}
          toggleModal={toggleCategoryModal}
          category={category}
          redirect={redirect}
        />
      </div>
    </>
  )
}

export default Compare
