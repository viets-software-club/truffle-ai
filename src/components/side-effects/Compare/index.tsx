/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { useEffect, useState } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  ColumnOrderState,
  getFilteredRowModel
} from '@tanstack/react-table'
import { AiOutlinePlus } from 'react-icons/ai'
import { FaSlack } from 'react-icons/fa'
import Error from '@/components/pure/Error'
import Button from '@/components/pure/Button'
import Loading from '@/components/pure/Loading'
import defaultColumns from '@/components/side-effects/ProjectsTable/columns'
import Chart from '@/components/page/details/Chart'
import Table from '@/components/page/overview/Table'
import TopBar from '@/components/page/overview/TopBar'
import FilterBar from '@/components/page/overview/FilterBar'
import { defaultFilters, defaultSort, paginationParameters } from '@/components/page/overview/types'
import {
  PageInfo,
  Project,
  ProjectFilter,
  ProjectOrderBy,
  useTrendingProjectsQuery
} from '@/graphql/generated/gql'
import Banner from '@/components/page/settings/Banner'
import sendSlackNotification from '@/util/sendSlackNotification'

/**
 * Compare projects component
 */
// @TODO Get id from props to fetch category title & projects from DB
const Compare = () => {
  const [data, setData] = useState<Project[]>([])
  const [columns] = useState(() => [...defaultColumns])
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([])
  const [filters, setFilters] = useState<ProjectFilter>(defaultFilters)
  const [sorting, setSorting] = useState<ProjectOrderBy | null>(defaultSort)
  const [columnVisibility, setColumnVisibility] = useState({})
  const [slackLoading, setSlackLoading] = useState(false)
  const [notificationStatus, setNotificationStatus] = useState<'success' | 'error' | ''>('')
  const [pageInfo, setPageInfo] = useState<PageInfo>()
  const [pagination, setPagination] = useState<paginationParameters>({
    first: 10,
    last: null,
    after: null,
    before: null
  })

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

  // Only update table data when urql data changes
  useEffect(() => {
    if (urqlData) {
      setData(urqlData?.projectCollection?.edges?.map((edge) => edge.node) as Project[])
      setPageInfo(urqlData?.projectCollection?.pageInfo as PageInfo)
    }
  }, [urqlData])

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

  const handleNotificationWrapper = async (message: string) => {
    setNotificationStatus(await sendSlackNotification(message))
  }

  const sendSlackMessage = () => {
    setSlackLoading(true)
    const savedMessage = localStorage.getItem('slackMessageMultiple') || ''
    const message = `${savedMessage}\n${table
      .getRowModel()
      .rows.map(
        (row) =>
          `- <${row.original.githubUrl as string}|${row.original.name || ''}>, ${
            row.original.starCount as number
          } stars`
      )
      .join('\n')}\n`

    void handleNotificationWrapper(message)

    setSlackLoading(false)
  }

  const displayChart = () => !fetching && !error && data.length > 0

  // @TODO Update page title
  return (
    <>
      <TopBar
        columns={table.getAllLeafColumns()}
        filters={filters}
        comparePage={false}
        sorting={sorting}
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
        />
      )}

      <div className="flex w-full flex-col pt-[120px]">
        <div className="flex flex-row items-center justify-between px-6 pt-3.5">
          <div className="flex flex-col">
            <p className="text-12 font-medium uppercase text-gray-500">Compare</p>
            <h1 className="text-24 font-medium">Infrastructure</h1>
          </div>

          <div className="flex flex-row items-center justify-end gap-2">
            <Button
              onClick={sendSlackMessage}
              variant="normal"
              text={slackLoading ? 'Loading...' : 'Send to Slack'}
              Icon={FaSlack}
              order="ltr"
              textColor="white"
            />

            {notificationStatus === 'success' && (
              <Banner variant="success" message="Slack notification sent" />
            )}

            {notificationStatus === 'error' && (
              <Banner variant="error" message="Error sending notification" />
            )}

            <Button
              variant="normal"
              text="Add project to compare"
              Icon={AiOutlinePlus}
              order="ltr"
              textColor="white"
            />
          </div>
        </div>

        {displayChart() && (
          <>
            <Chart
              datasets={data.map((project) => ({
                id: (project.id as string) ?? '',
                name: project.name ?? '',
                data: project.starHistory as React.ComponentProps<
                  typeof Chart
                >['datasets'][0]['data']
              }))}
              multipleLines
            />

            <div className="flex flex-row items-center justify-between px-6 py-3.5">
              <div className="flex flex-col">
                <p className="font-medium">All projects in this category</p>
              </div>
            </div>
          </>
        )}

        {fetching && <Loading />}

        {error && <Error />}

        {data.length === 0 && !error && !fetching && (
          <p className="w-full p-12 text-center text-14 text-gray-300">No projects found</p>
        )}

        {data.length > 0 && !error && <Table table={table} />}
      </div>
    </>
  )
}

export default Compare
