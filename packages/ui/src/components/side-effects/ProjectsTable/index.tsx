import { Dispatch, FC, SetStateAction, useState, useMemo, ReactNode } from 'react'
import { useReactTable, getCoreRowModel } from '@tanstack/react-table'
import { CombinedError } from 'urql'
import FilterBar from '@/components/page/overview/FilterBar'
import Table from '@/components/page/overview/Table'
import TopBar from '@/components/page/overview/TopBar'
import { PaginationParameters } from '@/components/page/overview/types'
import Error from '@/components/pure/Error'
import Loading from '@/components/pure/Loading'
import createColumns from '@/components/side-effects/ProjectsTable/columns'
import { PageInfo, Project, ProjectFilter, ProjectOrderBy } from '@/graphql/generated/gql'

export type PercentileStats = {
  topTenPercent: object
  topTwentyPercent: object
  bottomTenPercent: object
  bottomTwentyPercent: object
}

type ProjectsTableProps = {
  data: Project[]
  filters: ProjectFilter
  sorting: ProjectOrderBy | null
  fetching: boolean
  error: CombinedError | undefined
  hideTimeFrame?: boolean
  totalCount: number
  pageInfo: PageInfo
  pageSize: number
  percentileStats: PercentileStats
  setSorting: (sort: ProjectOrderBy | null) => void
  updateFilters: (filters: ProjectFilter) => void
  setPagination: Dispatch<SetStateAction<PaginationParameters>>
  beforeTable?: ReactNode
}

/**
 * Table for displaying trending projects
 */
const ProjectsTable: FC<ProjectsTableProps> = ({
  data,
  filters,
  sorting,
  fetching,
  error,
  hideTimeFrame,
  totalCount,
  pageInfo,
  pageSize,
  percentileStats,
  setSorting,
  updateFilters,
  setPagination,
  beforeTable
}) => {
  const [columnVisibility, setColumnVisibility] = useState({})

  const { topTenPercent, topTwentyPercent, bottomTenPercent, bottomTwentyPercent } = percentileStats

  const columns = useMemo(
    () => createColumns(bottomTenPercent, topTenPercent, topTwentyPercent, bottomTwentyPercent),
    [bottomTenPercent, topTenPercent, topTwentyPercent, bottomTwentyPercent]
  )

  // Initialize TanStack table
  const table = useReactTable({
    data,
    columns,
    state: {
      columnVisibility
    },
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <>
      <TopBar
        columns={table.getAllLeafColumns()}
        filters={filters}
        hideTimeFrame={hideTimeFrame}
        sorting={sorting}
        setSorting={setSorting}
        updateFilters={updateFilters}
      />

      {(Object.keys(filters).length > 0 || sorting) && pageInfo && (
        <FilterBar
          filters={filters}
          updateFilters={updateFilters}
          currentEntries={data.length}
          totalEntries={totalCount} // @TODO get total entries from DB
          sorting={sorting}
          setSorting={setSorting}
          pageInfo={pageInfo}
          setPagination={setPagination}
          pageSize={pageSize}
        />
      )}

      <div className='flex w-full flex-col pt-[120px]'>
        {beforeTable}

        {fetching && <Loading />}

        {error && <Error />}

        {data.length === 0 && !error && !fetching && (
          <p className='w-full p-12 text-center text-sm text-gray-300'>No projects found</p>
        )}

        {data.length > 0 && !error && <Table table={table} />}
      </div>
    </>
  )
}

export default ProjectsTable
