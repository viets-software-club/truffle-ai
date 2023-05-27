import { useReactTable, getCoreRowModel } from '@tanstack/react-table'
import { useState } from 'react'
import TopBar from '@/components/page/repositoryTable/TopBar'
import Table from '@/components/page/repositoryTable/Table'
import FilterBar from '@/components/page/repositoryTable/Filterbar'
import respositoriesMock from '../../../data/repositoriesMock'
import browseListColumns from '../../page/repositoryTable/browseListColumns'

const initialDisplayColumns = new Array(browseListColumns.length).fill(true)
const nullFunc = () => null

const RepositoryTable = () => {
  const [displayColumns, setDisplayColumns] = useState<boolean[]>(initialDisplayColumns)

  const toggleColumn = (index: number) => {
    const newDisplayColumns = [...displayColumns]
    newDisplayColumns[index] = !newDisplayColumns[index]
    setDisplayColumns(newDisplayColumns)
  }

  const filteredColumns = browseListColumns.filter((column, index) => displayColumns[index])

  const table = useReactTable({
    data: respositoriesMock,
    columns: filteredColumns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div className="flex w-full flex-col rounded-lg py-3.5">
      {/* Top button bar */}
      <TopBar
        toggleColumn={toggleColumn}
        displayColumns={displayColumns}
        browseListColumns={browseListColumns}
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
