import { useState } from 'react'
import { Column } from '@tanstack/react-table'
import AddProject from '@/components/side-effects/AddProject'
import { Project, ProjectFilter, ProjectOrderBy } from '@/graphql/generated/gql'
import { FilterType, TimeFilterOption } from './types'
import TimeFrameSelector from './TimeFrameSelector'
import SortingSelector from './SortingSelector'
import FilterSelector from './FilterSelector'
import EditColumns from './EditColumns'

type TopBarProps = {
  columns: Column<Project, unknown>[]
  filters: ProjectFilter
  comparePage: boolean
  sorting: ProjectOrderBy | null
  setSorting: (sort: ProjectOrderBy | null) => void
  updateFilters: (filters: ProjectFilter) => void
}

/**
 * Top navigation for the table view, including filter, sort, edit columns and add project buttons
 */
const TopBar = ({
  columns,
  filters,
  comparePage,
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
      .filter((t) => t !== timeFrame)
      .forEach((t) => delete newFilters[t])

    updateFilters({ ...newFilters, [timeFrame]: { eq: true } })
  }

  // Maps time frame enum value to the corresponding key
  const currentTimeFilterLabel = Object.entries(TimeFilterOption).filter(
    (option) => option[1] === selectedTimeFrame
  )[0][0]

  return (
    <div className="flex h-[60px] flex-row items-center justify-between border-b border-gray-800 px-6">
      {/* Time frame (only show on trending page) */}
      <div className="flex flex-row gap-3">
        {!comparePage && (
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

      <div className="flex gap-3">
        {/* Edit columns */}
        <EditColumns columns={columns} />

        <AddProject />
      </div>
    </div>
  )
}

export default TopBar
