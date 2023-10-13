export type defaultFilters = {
  stars: number
  forks: number
  issues: number
  contributors: number
}
type filterInputProps = {
  filterType: string
  filters: defaultFilters
  setFilters: (filters: defaultFilters) => void
  saveSettings: (value: number, filterType: string) => void
}

const FilterInput = ({ filterType, filters, setFilters, saveSettings }: filterInputProps) => (
  <div className="flex flex-col rounded pr-4 text-white">
    <p className="text-14 mb-2 font-normal">
      {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
    </p>
    <input
      type="number"
      value={filters[filterType as keyof defaultFilters]}
      className="text-14 rounded-[5px] border border-gray-800 bg-gray-900 px-3 py-2 text-white focus:outline focus:outline-indigo-500"
      onChange={(e) => {
        const num = Number(e.target.value)
        setFilters({ ...filters, [filterType]: num })
        saveSettings(num, filterType)
      }}
      placeholder={`${filters[filterType as keyof defaultFilters]}`}
    />
  </div>
)

export default FilterInput
