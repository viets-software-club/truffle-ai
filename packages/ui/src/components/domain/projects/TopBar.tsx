import { useState } from 'react'
import { Column } from '@tanstack/react-table'
import AddProject from '@/components/domain/projects/AddProject'
import { Project, ProjectFilter, ProjectOrderBy } from '@/graphql/generated/gql'
import EditColumns from './EditColumns'
import TimeFrameSelector from './TimeFrameSelector'
import FilterSelector from './filters/FilterSelector'
import SortingSelector from './filters/SortingSelector'
import { FilterType, TimeFilterOption } from './types'

type TopBarProps = {
  columns: Column<Project, unknown>[]
  filters: ProjectFilter
  sorting: ProjectOrderBy | null
  hideTimeFrame?: boolean
  setSorting: (sort: ProjectOrderBy | null) => void
  updateFilters: (filters: ProjectFilter) => void
}

/**
 * Top navigation for the table view, including filter, sort, edit columns and add project buttons
 */
const TopBar = ({
  columns,
  filters,
  hideTimeFrame = false,
  sorting,
  setSorting,
  updateFilters
}: TopBarProps) => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState<TimeFilterOption>(
    TimeFilterOption.Today
  )

  // Adds new filter to the filter object/ bar
  const addFilter = (key: string, type: FilterType) => {
    const defaultFilter = type === 'string' ? { startsWith: '' } : { gt: -1 }

    updateFilters({ ...filters, [key]: defaultFilter })
  }

  const updateSorting = (sort: ProjectOrderBy | null) => {
    setSorting(sort)
  }

  const updateTimeFrame = (timeFrame: TimeFilterOption) => {
    setSelectedTimeFrame(timeFrame)

    // Remove all other time filters
    const newFilters = { ...filters }
    Object.values(TimeFilterOption)
      .filter(t => t !== timeFrame)
      .forEach(t => delete newFilters[t])

    updateFilters({ ...newFilters, [timeFrame]: { eq: true } })
  }

  // Maps time frame enum value to the corresponding key
  const currentTimeFilterLabel = Object.entries(TimeFilterOption).filter(
    option => option[1] === selectedTimeFrame
  )[0][0]

  return (
    <div className='flex h-[60px] w-full flex-row items-center justify-between border-b border-white/5 px-4 md:px-6'>
      <div className='flex flex-row gap-3'>
        {!hideTimeFrame && ( // only show on trending page
          <TimeFrameSelector
            currentTimeFilterLabel={currentTimeFilterLabel}
            handleChange={updateTimeFrame}
          />
        )}
        <SortingSelector sorting={sorting} updateSorting={updateSorting} />
        <FilterSelector filters={filters} addFilter={addFilter} />
      </div>

      <div className='flex gap-3'>
        <EditColumns columns={columns} />
        <AddProject />
      </div>
    </div>
  )
}

export default TopBar
