import { useEffect, useState } from 'react'
import { useReactTable, getCoreRowModel, ColumnOrderState } from '@tanstack/react-table'
import Error from '@/components/pure/Error'
import Loading from '@/components/pure/Loading'
import TopBar from '@/components/page/overview/TopBar'
import defaultColumns from '@/components/pure/ProjectsTable/columns'
import FilterBar from '@/components/page/overview/Filterbar'
import Table from '@/components/page/overview/Table'
import { Project, useTrendingProjectsQuery } from '@/graphql/generated/gql'

const nullFunc = () => null

/**
 * Table for displaying trending projects
 */
const ProjectsTable = () => {
  const [data, setData] = useState<Project[]>([])
  const [columns] = useState(() => [...defaultColumns])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([])

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
  // Display loading/ error messages conditionally
  if (fetching) return <Loading message="Getting trending projects for you..." />
  if (data.length === 0 || error) return <Error />

  return (
    <div className="flex w-full flex-col">
      <TopBar columns={table.getAllLeafColumns()} nullFunc={nullFunc} />
      <FilterBar />
      <Table table={table} />
    </div>
  )
}

export default ProjectsTable
