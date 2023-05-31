import { useReactTable, getCoreRowModel } from '@tanstack/react-table'
import { FiChevronDown } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import columns from '@/components/page/repositoryTable/columns'
import TopBar from '@/components/page/repositoryTable/TopBar'
import Table from '@/components/page/repositoryTable/Table'
import FilterBar from '@/components/page/repositoryTable/Filterbar'
import Chart from '@/components/page/details/Chart'
import Page from '@/components/side-effects/Page'
import Button from '@/components/pure/Button'
import { data } from '@/data/detailPageMocks'
import respositoriesMock from '@/data/repositoriesMock'

const nullFunc = () => null

// @TODO Get id from url, fetch data from API & display real data
const Compare = () => {
  const table = useReactTable({
    data: respositoriesMock,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <Page>
      <div className="flex w-full flex-col rounded-lg py-3.5">
        <TopBar columns={table.getAllLeafColumns()} nullFunc={nullFunc} />

        <FilterBar />

        <div className="flex flex-row items-center justify-between px-6 py-3.5">
          <div className="flex flex-col">
            <p className="text-12 font-medium uppercase text-gray-400">Compare</p>
            {/* @TODO Update page title */}
            <h1 className="text-24 font-medium">Infrastructure</h1>
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

        <Chart data={data} />

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
