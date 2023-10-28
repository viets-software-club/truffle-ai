import { useState } from 'react'
import { Column } from '@tanstack/react-table'
import AddProject from '@/components/side-effects/AddProject'
import { Project, ProjectFilter, ProjectOrderBy } from '@/graphql/generated/gql'
import EditColumns from './EditColumns'
import FilterSelector from './FilterSelector'
import SortingSelector from './SortingSelector'
import TimeFrameSelector from './TimeFrameSelector'
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
  hideTimeFrame,
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
    <div className='fixed left-56 right-0 z-20 flex h-[60px] flex-row items-center justify-between border-b border-gray-800 bg-gray-900 px-6'>
      {/* Time frame (only show on trending page) */}
      <div className='flex flex-row gap-3'>
        {!hideTimeFrame && (
          <TimeFrameSelector
            currentTimeFilterLabel={currentTimeFilterLabel}
            handleChange={updateTimeFrame}
          />
        )}

        {/* Sorting */}
        <SortingSelector sorting={sorting} updateSorting={updateSorting} />

        {/* Filtering */}
        <FilterSelector filters={filters} addFilter={addFilter} />
      </div>

      <div className='flex gap-3'>
        {/* Edit columns */}
        <EditColumns columns={columns} />

        <AddProject />
      </div>
    </div>
  )
}

TopBar.defaultProps = {
  hideTimeFrame: false
}

export default TopBar
