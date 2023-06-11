import { TableFilter } from '@/components/page/overview/TableFilter'
import FilterFormModal from '@/components/page/overview/FilterFormModal'

type FilterBarProps = {
  filters: TableFilter[]
  removeFilter: (filter: TableFilter) => void
  updateFilter(filter: TableFilter): void
}
const FilterBar = ({ filters, removeFilter, updateFilter }: FilterBarProps) => (
  <div className="flex flex-row justify-between border-b border-gray-800 px-6 py-2.5">
    <div className="flex flex-row gap-3">
      {filters.map((filter: TableFilter) => (
        <FilterFormModal filter={filter} removeFilter={removeFilter} updateFilter={updateFilter} />
      ))}
    </div>

    <div className="flex flex-row items-center">
      <p className="text-14">Showing 10&nbsp;</p>
      <p className="text-14 text-gray-500">/&nbsp;25 entries</p>
    </div>
  </div>
)

export default FilterBar
