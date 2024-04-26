import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Column } from '@tanstack/react-table'
import Button from '@/components/pure/Button'
import useAddProjectModalState from '@/hooks/useAddProjectModalState'
import EditColumns from '../../domain/projects/EditColumns'
import TimeFrameSelector from '../../pure/DropDown'
import FilterSelector from '../../domain/projects/filters/FilterSelector'
import SortingSelector from '../../domain/projects/filters/SortingSelector'
import { FilterType, TimeFilterOption } from '../../domain/projects/types'

type TopBarProps = {
  columns: Column<Project, unknown>[]
  filters: ProjectFilter
  sorting: ProjectOrderBy | null
  hideTimeFrame?: boolean
  setSorting: (sort: ProjectOrderBy | null) => void
  updateFilters: (filters: ProjectFilter) => void
}

const FirstRow = ({
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

        <Button
          onClick={() => {
            setIsAddProjectOpen(true)
          }}
          variant={Button.Variant.Selected}>
          <AiOutlinePlus />
          Add Project
        </Button>
      </div>
    </div>
  )
}

export default TopBar
