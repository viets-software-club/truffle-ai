import { Dispatch, FC, SetStateAction, useState, useMemo, ReactNode } from 'react'
import { useReactTable, getCoreRowModel } from '@tanstack/react-table'
import { CombinedError } from 'urql'
import FilterBar from '@/components/domain/projects/FilterBar'
import Table from '@/components/domain/projects/Table'
import TopBar from '@/components/domain/projects/TopBar'
import createColumns, { PercentileStats } from '@/components/domain/projects/columns'
import { PaginationParameters } from '@/components/domain/projects/types'
import Error from '@/components/shared/Error'
import Skeleton from '@/components/shared/Skeleton'
import { PageInfo, Project, ProjectFilter, ProjectOrderBy } from '@/graphql/generated/gql'
import ProjectListItem from './ProjectListItem'

type ProjectsTableProps = {
  data?: Project[]
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
  loadingSkeletons?: number
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
  beforeTable,
  loadingSkeletons = 2
}) => {
  const [columnVisibility, setColumnVisibility] = useState({})

  const columns = useMemo(() => createColumns(percentileStats), [percentileStats])

  // Initialize TanStack table
  const table = useReactTable({
    data: data ?? [],
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

      {(Object.keys(filters).length > 0 || sorting) && (pageInfo || fetching) && !error && (
        <FilterBar
          loading={fetching && !data}
          filters={filters}
          updateFilters={updateFilters}
          currentEntries={data?.length ?? 0}
          totalEntries={totalCount} // @TODO get total entries from DB
          sorting={sorting}
          setSorting={setSorting}
          pageInfo={pageInfo}
          setPagination={setPagination}
          pageSize={pageSize}
        />
      )}

      <div className='flex w-full flex-col'>
        {beforeTable}

        {error && <Error />}

        {!error && (
          <div className='mx-4 my-2 md:w-full md:max-w-[calc(100vw-32px)] md:overflow-hidden lg:mx-6 lg:my-3.5 lg:max-w-[calc(100vw-224px-48px)]'>
            {/* Desktop */}
            {fetching && !data ? (
              <div className='flex flex-col gap-2'>
                {Array.from(Array(loadingSkeletons).keys()).map(i => (
                  <Skeleton key={i} className='h-12' />
                ))}
              </div>
            ) : data?.length === 0 ? (
              <p className='w-full p-12 text-center text-sm text-white/75'>No projects found</p>
            ) : (
              <div className='custom-scrollbar 2xl:no-scrollbar hidden w-full overflow-x-scroll md:block'>
                <div className='w-[1400px] 2xl:w-full'>
                  <Table table={table} />
                </div>
              </div>
            )}

            {/* Mobile */}
            <div className='flex flex-col gap-1 md:hidden'>
              {data?.map(project => (
                <ProjectListItem
                  key={project.id as string}
                  project={project}
                  percentileStats={percentileStats}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default ProjectsTable
