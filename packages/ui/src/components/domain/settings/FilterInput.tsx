import Input from '@/components/shared/Input'

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
  <div className='flex w-full flex-col gap-2 text-white sm:w-auto'>
    <p className='text-sm'>{filterType.charAt(0).toUpperCase() + filterType.slice(1)}</p>
    <Input
      type='number'
      value={filters[filterType as keyof defaultFilters]}
      onChange={e => {
        const num = Number(e.target.value)
        setFilters({ ...filters, [filterType]: num })
        saveSettings(num, filterType)
      }}
      placeholder={`${filters[filterType as keyof defaultFilters]}`}
    />
  </div>
)

export default FilterInput
