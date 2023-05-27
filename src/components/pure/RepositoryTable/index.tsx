import { useReactTable, getCoreRowModel } from '@tanstack/react-table'
import TopBar from '@/components/page/repositoryTable/TopBar'
import Table from '@/components/page/repositoryTable/Table'
import FilterBar from '@/components/page/repositoryTable/Filterbar'
import columns from '@/components/page/repositoryTable/columns'
import respositoriesMock from '@/data/repositoriesMock'

const nullFunc = () => null

const RepositoryTable = () => {
  const table = useReactTable({
    data: respositoriesMock,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div className="flex w-full flex-col rounded-lg py-3.5">
      <TopBar columns={table.getAllLeafColumns()} nullFunc={nullFunc} />
      <FilterBar />
      <Table table={table} />
    </div>
  )
}
export default RepositoryTable
