import { Dispatch, SetStateAction, useMemo } from 'react'
import { FiChevronLeft as ChevronLeft, FiChevronRight as ChevronRight } from 'react-icons/fi'
import FilterItemModal from '@/components/page/overview/FilterItemModal'
import SortModal from '@/components/page/overview/SortModal'
import Button from '@/components/pure/Button'
import { PageInfo, ProjectFilter, ProjectOrderBy } from '@/graphql/generated/gql'
import { FilterOption, TimeFilterOption, paginationParameters } from './types'

type FilterBarProps = {
  filters: ProjectFilter
  currentEntries: number
  totalEntries: number
  sorting: ProjectOrderBy | null
  pageInfo: PageInfo
  pageSize: number
  updateFilters: (filter: ProjectFilter) => void
  setSorting: (sorting: ProjectOrderBy | null) => void
  setPagination: Dispatch<SetStateAction<paginationParameters>>
}
const FilterBar = ({
  filters,
  currentEntries,
  totalEntries,
  sorting,
  pageInfo,
  pageSize,
  setSorting,
  updateFilters,
  setPagination
}: FilterBarProps) => {
  const handleClickLeft = () => {
    setPagination({
      last: pageSize,
      before: pageInfo.startCursor,
      first: null,
      after: null
    })
  }

  const handleClickRight = () => {
    setPagination({
      first: pageSize,
      after: pageInfo.endCursor,
      last: null,
      before: null
    })
  }

  // Filters (exclude time filter options)
  const filterItemModals = useMemo(
    () =>
      Object.keys(filters)
        .filter((key) => !Object.values(TimeFilterOption).includes(key as TimeFilterOption))
        .map((key) => (
          <FilterItemModal
            key={key}
            currentKey={key as FilterOption['key']}
            filters={filters}
            updateFilters={updateFilters}
          />
        )),
    [filters, updateFilters]
  )

  const { hasNextPage, hasPreviousPage } = pageInfo

  return (
    <div className="fixed top-[60px] z-10 flex w-11/12 flex-row justify-between border-b border-gray-800 bg-gray-900 px-6 py-2.5 pr-28">
      <div className="flex flex-row gap-3">
        {/* Sorting */}
        {sorting && <SortModal sorting={sorting} setSorting={setSorting} />}
        {/* Separator - only show when at least 1 filter is active
        (> 1 because isTrendingDaily/Weekly/Monthly is not displayed in filter bar) */}
        {sorting && Object.keys(filters).length > 1 && (
          <div className="my-auto h-4/5 border-l border-gray-800" />
        )}

        {filterItemModals}
      </div>

      {/* Row count */}
      <div className="flex flex-row items-center">
        {totalEntries > 1 && (hasNextPage || hasPreviousPage) && (
          <div className="mr-2 flex gap-3">
            <Button
              disabled={!pageInfo.hasPreviousPage}
              onClick={handleClickLeft}
              variant="onlyIcon"
              Icon={ChevronLeft}
              iconColor={!pageInfo.hasPreviousPage ? 'text-gray-600' : 'text-white-600'}
            />
            <Button
              disabled={!pageInfo.hasNextPage}
              onClick={handleClickRight}
              variant="onlyIcon"
              Icon={ChevronRight}
              iconColor={!pageInfo.hasNextPage ? 'text-gray-600' : 'text-white-600'}
            />
          </div>
        )}
        <p className="text-sm">Showing {currentEntries}&nbsp;</p>
        <p className="text-sm text-gray-500">/&nbsp;{totalEntries} entries</p>
      </div>
    </div>
  )
}
export default FilterBar
