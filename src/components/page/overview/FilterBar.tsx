import { TableFilter } from '@/components/page/overview/TableFilter'
import FilterFormModal from '@/components/page/overview/FilterFormModal'
import { TableSort } from '@/components/page/overview/TableSort'
import TableSortModal from '@/components/page/overview/TableSortModal'

type FilterBarProps = {
  filters: TableFilter[]
  removeFilter: (filter: TableFilter) => void
  updateFilter(filter: TableFilter): void
  currentEntries: number
  totalEntries: number
  tableSort: TableSort | null
  setTableSort(tableSort: TableSort | null): void
}

const FilterBar = ({
  filters,
  removeFilter,
  updateFilter,
  currentEntries,
  totalEntries,
  tableSort,
  setTableSort
}: FilterBarProps) => (
  <div className="flex flex-row justify-between border-b border-gray-800 px-6 py-2.5">
    <div className="flex flex-row gap-3">
      {tableSort && <TableSortModal tableSort={tableSort} setTableSort={setTableSort} />}
      {tableSort && filters.length > 0 && <div className="mx-3 h-full border-l border-gray-800" />}
      {filters.map((filter: TableFilter) => (
        <FilterFormModal
          filter={filter}
          removeFilter={removeFilter}
          updateFilter={updateFilter}
          defaultValue={filter.value as number}
        />
      ))}
    </div>

    <div className="flex flex-row items-center">
      <p className="text-14">Showing {currentEntries}&nbsp;</p>
      <p className="text-14 text-gray-500">/&nbsp;{totalEntries} entries</p>
    </div>
  </div>
)

export default FilterBar
