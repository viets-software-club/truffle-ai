const FilterBar = () => (
  <div className="flex flex-row justify-between border-b border-gray-800 px-6 py-2.5">
    <div className="flex flex-row gap-3">
      <p className="text-14 font-medium">Filters go here</p>
    </div>

    <div className="flex flex-row items-center">
      <p className="text-14">10&nbsp;</p>
      <p className="text-14 text-gray-500">/&nbsp;25</p>
    </div>
  </div>
)

export default FilterBar
