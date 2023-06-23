import { Dispatch, FC, SetStateAction, useState } from 'react'
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
import defaultColumns from '@/components/side-effects/ProjectsTable/columns'
import Table from '@/components/page/overview/Table'
import FilterBar from '@/components/page/overview/FilterBar'
import { PageInfo, Project, ProjectFilter, ProjectOrderBy } from '@/graphql/generated/gql'
import { paginationParameters } from '@/components/page/overview/types'

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
  setSorting,
  updateFilters,
  totalCount,
  pageInfo,
  setPagination,
  pageSize
}) => {
  const [columns] = useState(() => [...defaultColumns])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([])

  // @TODO adapt default filters to new filtering system

  // const defaultFilters = () => {
  //   const starsColumn = table.getAllLeafColumns().find((c) => c.columnDef.header === 'Stars')
  //   const forksColumn = table.getAllLeafColumns().find((c) => c.columnDef.header === 'Forks')
  //   const issuesColumn = table.getAllLeafColumns().find((c) => c.columnDef.header === 'Issues')
  //   const contributorsColumn = table
  //     .getAllLeafColumns()
  //     .find((c) => c.columnDef.header === 'Contrib.')

  //   if (starsColumn && forksColumn && issuesColumn && contributorsColumn) {
  //     const savedStarsDefaultFilter = Number(localStorage.getItem('starsDefaultFilter'))
  //     const savedForksDefaultFilter = Number(localStorage.getItem('forksDefaultFilter'))
  //     const savedIssuesDefaultFilter = Number(localStorage.getItem('issuesDefaultFilter'))
  //     const savedContributorsDefaultFilter = Number(
  //       localStorage.getItem('contributorsDefaultFilter')
  //     )

  //     const preFilters = [
  //       {
  //         column: starsColumn,
  //         operator: NumberTableFilterOperator.GREATER_THAN,
  //         value: savedStarsDefaultFilter
  //       },
  //       {
  //         column: forksColumn,
  //         operator: NumberTableFilterOperator.GREATER_THAN,
  //         value: savedForksDefaultFilter
  //       },
  //       {
  //         column: issuesColumn,
  //         operator: NumberTableFilterOperator.GREATER_THAN,
  //         value: savedIssuesDefaultFilter
  //       },
  //       {
  //         column: contributorsColumn,
  //         operator: NumberTableFilterOperator.GREATER_THAN,
  //         value: savedContributorsDefaultFilter
  //       }
  //     ]

  //     return preFilters.filter((filter) => filter.value !== 0)
  //   }
  //   return []
  // }

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
