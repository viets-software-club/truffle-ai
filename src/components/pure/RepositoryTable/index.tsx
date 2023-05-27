import { useState } from 'react'
import { useReactTable, getCoreRowModel } from '@tanstack/react-table'
import TopBar from '@/components/page/repositoryTable/TopBar'
import Table from '@/components/page/repositoryTable/Table'
import FilterBar from '@/components/page/repositoryTable/Filterbar'
import columns from '@/components/page/repositoryTable/columns'
import respositoriesMock from '@/data/repositoriesMock'

const initialDisplayColumns = new Array(columns.length).fill(true)
const nullFunc = () => null

const RepositoryTable = () => {
  const [displayColumns, setDisplayColumns] = useState<boolean[]>(initialDisplayColumns)

  const toggleColumn = (index: number) => {
    const newDisplayColumns = [...displayColumns]
    newDisplayColumns[index] = !newDisplayColumns[index]
    setDisplayColumns(newDisplayColumns)
  }

  const filteredColumns = columns.filter((_column, index) => displayColumns[index])

  const table = useReactTable({
    data: respositoriesMock,
    columns: filteredColumns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div className="flex w-full flex-col rounded-lg py-3.5">
      {/* Top button bar */}
      <TopBar
        columns={columns}
        displayColumns={displayColumns}
        headers={table.getHeaderGroups()[0].headers}
        toggleColumn={toggleColumn}
        nullFunc={nullFunc}
      />
      {/* Filterbar */}
      <FilterBar />
      {/* Table */}
      <Table table={table} />
    </div>
  )
}
export default RepositoryTable
