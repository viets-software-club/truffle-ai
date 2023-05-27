import { useReactTable, getCoreRowModel } from '@tanstack/react-table'
import { useState } from 'react'
import TopBar from '@/components/page/repositoryTable/TopBar'
import Table from '@/components/page/repositoryTable/Table'
import FilterBar from '@/components/page/repositoryTable/Filterbar'
import Chart from '@/components/page/details/Chart'
import { starsMock, forksMock, issuesMock } from '@/data/detailPageMocks'
import Page from '@/components/side-effects/Page'
import Button from '@/components/pure/Button'
import { FiChevronDown } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import respositoriesMock from '../data/repositoriesMock'
import browseListColumns from '../components/page/repositoryTable/browseListColumns'

const initialDisplayColumns = new Array(browseListColumns.length).fill(true)
const nullFunc = () => null

const Compare = () => {
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
    <Page>
      <div className="flex w-full flex-col rounded-lg py-3.5">
        <TopBar
          toggleColumn={toggleColumn}
          displayColumns={displayColumns}
          browseListColumns={browseListColumns}
          nullFunc={nullFunc}
        />
        <FilterBar />
        <div className="flex flex-row items-center justify-between px-6 py-3.5">
          <div className="flex flex-col">
            <p className="text-12 font-medium uppercase text-gray-400">Compare</p>
            <h1 className="text-24 font-medium">Dev tools</h1>
          </div>
          <div>
            <Button
              onClick={nullFunc}
              variant="normal"
              text="Stars"
              Icon={FiChevronDown}
              order="ltr"
              iconColor="white"
              textColor="white"
            />
          </div>
        </div>
        <Chart starData={starsMock} forkData={forksMock} issueData={issuesMock} />
        <div className="flex flex-row items-center justify-between px-6 py-3.5">
          <div className="flex flex-col">
            <p>All projects in this category</p>
          </div>
          <div>
            <Button
              onClick={nullFunc}
              variant="normal"
              text="Add project to compare"
              Icon={AiOutlinePlus}
              order="ltr"
              iconColor="white"
              textColor="white"
            />
          </div>
        </div>
        <Table table={table} />
      </div>
    </Page>
  )
}
export default Compare
