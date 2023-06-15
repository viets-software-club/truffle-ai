import { useEffect, useState } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  ColumnOrderState,
  getFilteredRowModel
} from '@tanstack/react-table'
import Error from '@/components/pure/Error'
import Loading from '@/components/pure/Loading'
import Table from '@/components/page/overview/Table'
import TopBar from '@/components/page/overview/TopBar'
import defaultColumns from '@/components/pure/ProjectsTable/columns'
import FilterBar from '@/components/page/overview/FilterBar'
import { Project, useTrendingProjectsQuery } from '@/graphql/generated/gql'
import { TableFilter } from '@/components/page/overview/TableFilter'

const nullFunc = () => null

/**
 * Table for displaying trending projects
 */
const ProjectsTable = () => {
  const [filteredRowCount, setFilteredRowCount] = useState(0)
  const [data, setData] = useState<Project[]>([])
  const [columns] = useState(() => [...defaultColumns])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([])
  const [filters, setFilters] = useState<TableFilter[]>([])

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
    enableColumnFilters: true,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  })

  // Display loading/ error messages conditionally
  if (fetching) return <Loading message="Getting trending projects for you..." />
  if (data.length === 0 || error) return <Error />

  return (
    <div className="flex w-full flex-col">
      <TopBar
        columns={table.getAllLeafColumns()}
        nullFunc={nullFunc}
        addFilter={addFilter}
        filters={filters}
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
      <Table table={table} filters={filters} setFilteredRowCount={setFilteredRowCount} />
    </div>
  )
}

export default ProjectsTable
