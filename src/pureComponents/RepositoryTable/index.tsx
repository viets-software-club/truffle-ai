import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper
} from '@tanstack/react-table'
import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'
import Link from 'next/link'
import { BiGitPullRequest } from 'react-icons/bi'
import { VscIssues } from 'react-icons/vsc'
import ProgrammingLanguages from '@/constants/programmingLanguages'
import RepositoryCategories from '@/constants/repositoryCategories'
import GitHubStatisticItem from '@/pureComponents/Sidebar/Box/GithubStatItem'
import respositoriesMock from '../../data/repositoriesMock'

type Repository = {
  name: string
  ownerName: string
  starCount: number
  forkCount: number
  issueCount: number
  contributorCount: number
  pullRequestCount: number
  programmingLanguage: ProgrammingLanguages
  category: RepositoryCategories
}

const columnHelper = createColumnHelper<Repository>()
const browseListColumns = [
  columnHelper.accessor('name', {
    header: () => 'Name',
    cell: (info) => <p className="text-14 font-bold">{info.getValue()}</p>
  }),
  columnHelper.accessor('ownerName', {
    header: () => 'Owner',
    cell: (info) => <p className="text-14">{info.getValue()}</p>
  }),
  columnHelper.accessor('starCount', {
    header: () => 'Stars',
    cell: (info) => (
      <GitHubStatisticItem
        Icon={AiOutlineStar}
        paddingOn={false}
        outerPaddingOn={false}
        hoverOn={false}
        value={info.getValue().toString()}
      />
    )
  }),
  columnHelper.accessor('forkCount', {
    header: () => 'Forks',
    cell: (info) => (
      <GitHubStatisticItem
        Icon={AiOutlineFork}
        paddingOn={false}
        outerPaddingOn={false}
        hoverOn={false}
        value={info.getValue().toString()}
      />
    )
  }),
  columnHelper.accessor('issueCount', {
    header: 'Issues',
    cell: (info) => (
      <GitHubStatisticItem
        Icon={VscIssues}
        paddingOn={false}
        outerPaddingOn={false}
        hoverOn={false}
        value={info.getValue().toString()}
      />
    )
  }),
  columnHelper.accessor('contributorCount', {
    header: 'Contributors',
    cell: (info) => (
      <GitHubStatisticItem
        Icon={BsPeople}
        paddingOn={false}
        outerPaddingOn={false}
        hoverOn={false}
        value={info.getValue().toString()}
      />
    )
  }),
  columnHelper.accessor('pullRequestCount', {
    header: () => 'Pull Requests',
    cell: (info) => (
      <GitHubStatisticItem
        Icon={BiGitPullRequest}
        paddingOn={false}
        outerPaddingOn={false}
        hoverOn={false}
        value={info.getValue().toString()}
      />
    )
  }),
  columnHelper.accessor('programmingLanguage', {
    header: () => 'Language',
    cell: (info) => (
      <p className="inline-block rounded-lg bg-gray-800 px-2 py-0.5 text-12 font-light text-gray-300">
        {info.getValue()}
      </p>
    )
  }),
  columnHelper.accessor('category', {
    header: () => 'Category',
    cell: (info) => (
      <p className="inline-block rounded-lg bg-gray-800 px-2 py-0.5 text-12 font-light text-gray-300">
        {info.getValue()}
      </p>
    )
  })
]

const RepositoryTable = () => {
  const table = useReactTable({
    data: respositoriesMock,
    columns: browseListColumns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div className="flex flex-col rounded-lg">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="text-left font-light">
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="cursor-pointer hover:bg-gray-800">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-2 text-left">
                  <Link href="/details">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Link>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {/* @TODO We are not using Footers for now */}
        {/* <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.footer, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </tfoot> */}
      </table>
    </div>
  )
}
export default RepositoryTable
