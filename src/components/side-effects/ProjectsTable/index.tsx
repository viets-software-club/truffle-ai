import { Dispatch, FC, SetStateAction, useState, useMemo } from 'react'

import {
  useReactTable,
  getCoreRowModel,
  ColumnOrderState,
  getFilteredRowModel
} from '@tanstack/react-table'
import { CombinedError } from 'urql'
import Error from '@/components/pure/Error'
import Loading from '@/components/pure/Loading'
import TopBar from '@/components/page/overview/TopBar'
import Table from '@/components/page/overview/Table'
import FilterBar from '@/components/page/overview/FilterBar'
import { PageInfo, Project, ProjectFilter, ProjectOrderBy } from '@/graphql/generated/gql'
import { paginationParameters } from '@/components/page/overview/types'
import createColumns from '@/components/side-effects/ProjectsTable/columns'

type ProjectsTableProps = {
  data: Project[]
  filters: ProjectFilter
  sorting: ProjectOrderBy | null
  fetching: boolean
  error: CombinedError | undefined
  hideTimeFrame?: boolean
  setSorting: (sort: ProjectOrderBy | null) => void
  updateFilters: (filters: ProjectFilter) => void
  totalCount: number
  pageInfo: PageInfo
  setPagination: Dispatch<SetStateAction<paginationParameters>>
  pageSize: number
  percentileStats: {
    topTenPercent: object
    topTwentyPercent: object
    bottomTenPercent: object
    bottomTwentyPercent: object
  }
}

/**
 * Table for displaying trending projects
 *
 */
const ProjectsTable: FC<ProjectsTableProps> = ({
  data,
  filters,
  sorting,
  fetching,
  error,
  hideTimeFrame,
  setSorting,
  updateFilters,
  totalCount,
  pageInfo,
  setPagination,
  pageSize,
  percentileStats
}) => {
  const [columnVisibility, setColumnVisibility] = useState({})
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([])

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
      columnVisibility,
      columnOrder
    },
    enableColumnFilters: true,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel()
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

      {filters && (Object.keys(filters).length > 0 || sorting) && pageInfo && (
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

      <div className="flex w-full flex-col pt-[120px]">
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

ProjectsTable.defaultProps = {
  hideTimeFrame: false
}

export default ProjectsTable
