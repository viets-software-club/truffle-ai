import { useReactTable, getCoreRowModel } from '@tanstack/react-table'
import { FiChevronDown } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { Project, useTrendingProjectsQuery } from '@/generated/gql'
import Error from '@/components/pure/Error'
import Button from '@/components/pure/Button'
import Loading from '@/components/pure/Loading'
import columns from '@/components/pure/ProjectsTable/columns'
import Chart from '@/components/page/details/Chart'
import Table from '@/components/page/overview/Table'
import TopBar from '@/components/page/overview/TopBar'
import FilterBar from '@/components/page/overview/Filterbar'
import Page from '@/components/side-effects/Page'
import { data as chartData } from '@/data/detailPageMocks'

const nullFunc = () => null

// @TODO Get id from url, fetch data from API & display real data
const Compare = () => {
  // Fetch data from Supabase using generated Urql hook
  const [{ data, fetching, error }] = useTrendingProjectsQuery()
  const projects = data?.projectCollection?.edges?.map((edge) => edge.node) as Project[]

  // Initialize TanStack table
  const table = useReactTable({
    data: projects,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  // Display loading/ error messages conditionally
  if (fetching) return <Loading message="Getting trending projects for you..." />
  if (projects.length === 0 || error) return <Error />

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

        <Chart data={chartData} />

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
