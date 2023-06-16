import { useEffect, useState } from 'react'
import { useReactTable, getCoreRowModel, ColumnOrderState } from '@tanstack/react-table'
import { FiChevronDown } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { FaSlack } from 'react-icons/fa'
import Error from '@/components/pure/Error'
import Button from '@/components/pure/Button'
import Loading from '@/components/pure/Loading'
import defaultColumns from '@/components/pure/ProjectsTable/columns'
import Chart from '@/components/page/details/Chart'
import Table from '@/components/page/overview/Table'
import TopBar from '@/components/page/overview/TopBar'
import FilterBar from '@/components/page/overview/FilterBar'
import Banner from '@/components/page/settings/Banner'
import { TableFilter } from '@/components/page/overview/TableFilter'
import sendSlackNotification from '@/util/sendSlackNotification'
import { Project, useTrendingProjectsQuery } from '@/graphql/generated/gql'

const nullFunc = () => null

/**
 * Compare projects component
 */
// @TODO Get id from props to fetch category title & projects from DB
const Compare = () => {
  const [data, setData] = useState<Project[]>([])
  const [columns] = useState(() => [...defaultColumns])
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([])
  const [filters, setFilters] = useState<TableFilter[]>([])
  const [filteredRowCount, setFilteredRowCount] = useState(0)
  const [columnVisibility, setColumnVisibility] = useState({})
  const [slackLoading, setSlackLoading] = useState(false)
  const [notificationStatus, setNotificationStatus] = useState<'success' | 'error' | ''>('')

  // Fetch data from Supabase using generated Urql hook
  const [{ data: urqlData, fetching, error }] = useTrendingProjectsQuery()

  // Only update table data when urql data changes
  useEffect(() => {
    if (urqlData) {
      setData(urqlData?.projectCollection?.edges?.map((edge) => edge.node) as Project[])
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
    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,
    getCoreRowModel: getCoreRowModel()
  })

  const addFilter = (filter: TableFilter) => {
    setFilters([...filters, filter])
  }

  const updateFilter = (filter: TableFilter) => {
    setFilters(
      filters.map((f) =>
        f.column.columnDef.header === filter.column.columnDef.header ? filter : f
      )
    )
  }

  const removeFilter = (filter: TableFilter) => {
    setFilters(filters.filter((f) => f !== filter))
  }

  // Display loading/ error messages conditionally
  if (fetching) return <Loading message="Getting saved projects for you..." />
  if (data.length === 0 || error) return <Error />

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
          `- <${row.original.githubUrl as string}|${row.original.name as string}>, ${
            row.original.starCount as number
          } stars`
      )
      .join('\n')}\n`

    void handleNotificationWrapper(message)

    setSlackLoading(false)
  }

  return (
    <div className="flex w-full flex-col">
      <TopBar
        columns={table.getAllLeafColumns()}
        nullFunc={nullFunc}
        addFilter={addFilter}
        filters={filters}
        comparePage
      />
      {filters.length > 0 && (
        <FilterBar
          filters={filters}
          removeFilter={removeFilter}
          updateFilter={updateFilter}
          currentEntries={filteredRowCount}
          totalEntries={data.length}
        />
      )}

      <div className="flex flex-row items-center justify-between px-6 pt-3.5">
        <div className="flex flex-col">
          <p className="text-12 font-medium uppercase text-gray-500">Compare</p>
          {/* @TODO Update page title */}
          <h1 className="text-24 font-medium">Infrastructure</h1>
        </div>

        <div>
          <Button
            onClick={nullFunc}
            variant="normal"
            text="Stars"
            Icon={FiChevronDown}
            order="ltr"
            textColor="white"
          />
        </div>
      </div>

      {/* @TODO Remove slice to put all projects into chart */}
      <Chart
        datasets={data.map((project) => ({
          id: project.id as string,
          name: project.name as string,
          data: project.starHistory as React.ComponentProps<typeof Chart>['datasets'][0]['data']
        }))}
        multipleLines
      />

      <div className="flex flex-row items-center justify-between px-6 py-3.5">
        <div className="flex flex-col">
          <p className="font-medium">All projects in this category</p>
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

          <div>
            <Button
              onClick={nullFunc}
              variant="normal"
              text="Add project to compare"
              Icon={AiOutlinePlus}
              order="ltr"
              textColor="white"
            />
          </div>
        </div>
      </div>

      <Table table={table} filters={filters} setFilteredRowCount={setFilteredRowCount} />
    </div>
  )
}

export default Compare
