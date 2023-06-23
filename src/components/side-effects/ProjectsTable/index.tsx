import { useEffect, useState } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  ColumnOrderState,
  getFilteredRowModel
} from '@tanstack/react-table'
import Error from '@/components/pure/Error'
import Loading from '@/components/pure/Loading'
import TopBar from '@/components/page/overview/TopBar'
import defaultColumns from '@/components/side-effects/ProjectsTable/columns'
import Table from '@/components/page/overview/Table'
import FilterBar from '@/components/page/overview/FilterBar'
import {
  Project,
  ProjectFilter,
  ProjectOrderBy,
  useTrendingProjectsQuery,
  PageInfo
} from '@/graphql/generated/gql'
import { defaultFilters, defaultSort, paginationParameters } from '@/components/page/overview/types'

/**
 * Table for displaying trending projects
 */
const ProjectsTable = () => {
  const PAGE_SIZE = 30
  const [data, setData] = useState<Project[]>([])
  const [columns] = useState(() => [...defaultColumns])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([])
  const [filters, setFilters] = useState<ProjectFilter>(defaultFilters)
  const [sorting, setSorting] = useState<ProjectOrderBy | null>(defaultSort)
  const [pageInfo, setPageInfo] = useState<PageInfo>()
  const [pagination, setPagination] = useState<paginationParameters>({
    first: PAGE_SIZE,
    last: null,
    after: null,
    before: null
  })
  const [totalCount, setTotalCount] = useState(0)

  const updateFilters = (filter: ProjectFilter) => {
    setFilters(filter)
  }

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

  // Fetch data from Supabase using generated Urql hook
  const [{ data: urqlData, fetching, error }] = useTrendingProjectsQuery({
    variables: {
      orderBy: sorting || defaultSort,
      filter: filters || defaultFilters,
      ...pagination
    }
  })

  // Fetch data from Supabase using generated Urql hook for total count
  const [{ data: urqlDataTotal }] = useTrendingProjectsQuery({
    variables: {
      orderBy: sorting || defaultSort,
      filter: filters || defaultFilters
    }
  })

  // Only update table data when urql data changes
  useEffect(() => {
    if (urqlData) {
      setData(urqlData?.projectCollection?.edges?.map((edge) => edge.node) as Project[])
      setPageInfo(urqlData?.projectCollection?.pageInfo as PageInfo)
      setTotalCount(urqlDataTotal?.projectCollection?.edges?.length ?? 0)
    }
  }, [urqlData, urqlDataTotal])

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
          totalEntries={totalCount} // @TODO get total entries from DB
          sorting={sorting}
          setSorting={setSorting}
          pageInfo={pageInfo}
          setPagination={setPagination}
          pageSize={PAGE_SIZE}
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

export default ProjectsTable
