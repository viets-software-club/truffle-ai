import FilterItemModal from '@/components/page/overview/FilterItemModal'
import SortModal from '@/components/page/overview/SortModal'
import { ProjectFilter, ProjectOrderBy } from '@/graphql/generated/gql'
import { FilterOption, TimeFilterOption } from './types'

type FilterBarProps = {
  filters: ProjectFilter
  currentEntries: number
  totalEntries: number
  sorting: ProjectOrderBy | null
  updateFilters: (filter: ProjectFilter) => void
  setSorting: (sorting: ProjectOrderBy | null) => void
}

const FilterBar = ({
  filters,
  currentEntries,
  totalEntries,
  sorting,
  setSorting,
  updateFilters
}: FilterBarProps) => (
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
      <p className="text-14">Showing {currentEntries}&nbsp;</p>
      <p className="text-14 text-gray-500">/&nbsp;{totalEntries} entries</p>
    </div>
  </div>
)

export default FilterBar
