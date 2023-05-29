import { useReactTable, getCoreRowModel } from '@tanstack/react-table'
import { useTrendingProjectsQuery } from '@/generated/gql'
import Error from '@/components/pure/Error'
import Loading from '@/components/pure/Loading'
import Table from '@/components/page/overview/Table'
import TopBar from '@/components/page/overview/TopBar'
import columns from '@/components/pure/ProjectsTable/columns'
import FilterBar from '@/components/page/overview/Filterbar'

const nullFunc = () => null

/**
 * Table for displaying trending projects
 */
const ProjectsTable = () => {
  // Fetch data from Supabase using generated Urql hook
  const [{ data, fetching, error }] = useTrendingProjectsQuery()
  const projects = data?.projectCollection?.edges?.map((edge) => edge.node) || []

  // Initialize TanStack table
  const table = useReactTable({
    data: projects,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  // Display loading/ error messages conditionally
  if (fetching) return <Loading message="Getting trending projects for you..." />
  if (projects.length === 0 || error) return <Error />

  return (
    <div className="flex w-full flex-col rounded-lg py-3.5">
      <TopBar columns={table.getAllLeafColumns()} nullFunc={nullFunc} />
      <FilterBar />
      <Table table={table} />
    </div>
  )
}

export default ProjectsTable
