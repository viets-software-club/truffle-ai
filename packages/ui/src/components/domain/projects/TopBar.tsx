import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Column } from '@tanstack/react-table'
import Button from '@/components/shared/Button'
import { GthbTrendingFilter, GthbTrendingOrderBy, GthbRepo } from '@/graphql/generated/gql'
import useAddProjectModalState from '@/hooks/useAddProjectModalState'
import EditColumns from './EditColumns'
import TimeFrameSelector from './TimeFrameSelector'
import FilterSelector from './filters/FilterSelector'
import SortingSelector from './filters/SortingSelector'
import { FilterType, TimeFilterOption } from './types'

type TopBarProps = {
  columns: Column<GthbRepo, unknown>[]
  filters: GthbTrendingFilter
  sorting: GthbTrendingOrderBy | null
  hideTimeFrame?: boolean
  setSorting: (sort: GthbTrendingOrderBy | null) => void
  updateFilters: (filters: GthbTrendingFilter) => void
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
  const { setIsOpen: setIsAddProjectOpen } = useAddProjectModalState()

  const [selectedTimeFrame, setSelectedTimeFrame] = useState<TimeFilterOption>(
    TimeFilterOption.Today
  )

  // Adds new filter to the filter object/ bar
  const addFilter = (key: string, type: FilterType) => {
    const defaultFilter = type === 'string' ? { startsWith: '' } : { gt: -1 }

    updateFilters({ ...filters, [key]: defaultFilter })
  }

  const updateSorting = (sort: GthbTrendingOrderBy | null) => {
    setSorting(sort)
  }

  const updateTimeFrame = (timeFrame: TimeFilterOption) => {
    setSelectedTimeFrame(timeFrame)

    // Remove all other time filters
    const newFilters = { ...filters }
    // @TODO
    // Object.values(TimeFilterOption)
    //   .filter(t => t !== timeFrame)
    //   .forEach(t => delete newFilters[t])

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

        <Button
          onClick={() => {
            setIsAddProjectOpen(true)
          }}
          variant='highlighted'>
          <AiOutlinePlus />
          Add Project
        </Button>
      </div>
    </div>
  )
}

export default TopBar
