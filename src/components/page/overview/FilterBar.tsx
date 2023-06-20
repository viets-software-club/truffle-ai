import FilterItemModal from '@/components/page/overview/FilterItemModal'
import SortModal from '@/components/page/overview/SortModal'
import { PageInfo, ProjectFilter, ProjectOrderBy } from '@/graphql/generated/gql'
import Button from '@/components/pure/Button'
import { FiChevronLeft as ChevronLeft, FiChevronRight as ChevronRight } from 'react-icons/fi'
import { Dispatch, SetStateAction } from 'react'
import { FilterOption, TimeFilterOption, paginationParameters } from './types'

type FilterBarProps = {
  filters: ProjectFilter
  currentEntries: number
  totalEntries: number
  sorting: ProjectOrderBy | null
  updateFilters: (filter: ProjectFilter) => void
  setSorting: (sorting: ProjectOrderBy | null) => void
  pageInfo: PageInfo
  setPagination: Dispatch<SetStateAction<paginationParameters>>
}
const FilterBar = ({
  filters,
  currentEntries,
  totalEntries,
  sorting,
  setSorting,
  updateFilters,
  pageInfo,
  setPagination
}: FilterBarProps) => {
  const handleClickLeft = () => {
    setPagination({
      last: 10,
      before: pageInfo.startCursor,
      first: null,
      after: null
    })
  }

  const handleClickRight = () => {
    setPagination({
      first: 10,
      after: pageInfo.endCursor,
      last: null,
      before: null
    })
  }

  return (
    <div className="flex flex-row justify-between border-b border-gray-800 px-6 py-2.5">
      <div className="flex flex-row gap-3">
        {/* Sorting */}
        {sorting && <SortModal sorting={sorting} setSorting={setSorting} />}

        {/* Separator */}
        {sorting && Object.keys(filters).length > 0 && (
          <div className="my-auto h-4/5 border-l border-gray-800" />
        )}

        {/* Filters (exclude time filter options) */}
        {Object.keys(filters)
          .filter((key) => !Object.values(TimeFilterOption).includes(key as TimeFilterOption))
          .map((key) => (
            <FilterItemModal
              key={key}
              currentKey={key as FilterOption['key']}
              filters={filters}
              updateFilters={updateFilters}
            />
          ))}
      </div>

      {/* Row count */}
      <div className="flex flex-row items-center">
        <div className="mr-2 flex gap-3">
          <Button
            disabled={!pageInfo.hasPreviousPage}
            onClick={handleClickLeft}
            variant="onlyIcon"
            Icon={ChevronLeft}
            iconColor="text-white-600"
          />
          <Button
            disabled={!pageInfo.hasNextPage}
            onClick={handleClickRight}
            variant="onlyIcon"
            Icon={ChevronRight}
            iconColor="text-white-600"
          />
        </div>
        <p className="text-14">Showing {currentEntries}&nbsp;</p>
        <p className="text-14 text-gray-500">/&nbsp;{totalEntries} entries</p>
      </div>
    </div>
  )
}
export default FilterBar
