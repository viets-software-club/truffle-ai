import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper
} from '@tanstack/react-table'
import React from 'react'
import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'
import { BiGitPullRequest } from 'react-icons/bi'
import { VscIssues } from 'react-icons/vsc'
import ProgrammingLanguages from '@/constants/programmingLanguages'
import RepositoryCategories from '@/constants/repositoryCategories'
import respositoriesMock from '../../data/repositoriesMock'
import ProgrammingLanguageIcon from '../ProgrammingLanguageIcon'

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
    cell: (info) => <p className="font-bold">{info.getValue()}</p>
  }),
  columnHelper.accessor('ownerName', {
    header: () => 'Owner Name'
  }),
  columnHelper.accessor('starCount', {
    header: () => 'Stars',
    cell: (info) => (
      <div className="flex flex-row items-center space-x-1 text-green">
        <AiOutlineStar />
        <p>{info.getValue()}</p>
      </div>
    )
  }),
  columnHelper.accessor('forkCount', {
    header: () => 'Forks',
    cell: (info) => (
      <div className="flex flex-row items-center space-x-1 text-red">
        <AiOutlineFork />
        <p>{info.getValue()}</p>
      </div>
    )
  }),
  columnHelper.accessor('issueCount', {
    header: 'Issues',
    cell: (info) => (
      <div className="flex flex-row items-center space-x-1">
        <VscIssues />
        <p>{info.getValue()}</p>
      </div>
    )
  }),
  columnHelper.accessor('contributorCount', {
    header: 'Contributors',
    cell: (info) => (
      <div className="flex flex-row items-center space-x-1">
        <BsPeople />
        <p>{info.getValue()}</p>
      </div>
    )
  }),
  columnHelper.accessor('pullRequestCount', {
    header: () => 'Pull Requests',
    cell: (info) => (
      <div className="flex flex-row items-center space-x-1">
        <BiGitPullRequest />
        <p>{info.getValue()}</p>
      </div>
    )
  }),
  columnHelper.accessor('programmingLanguage', {
    header: () => 'Programming Language',
    cell: (info) => <ProgrammingLanguageIcon programmingLang={info.getValue()} />
  }),
  columnHelper.accessor('category', {
    header: () => 'Category',
    cell: (info) => (
      <p className="text-primary inline-block rounded-lg border p-1.5 text-xs">{info.getValue()}</p>
    )
  })
]

const RepositoryTable = () => {
  // REACT TABLE
  const tableData = React.useMemo(() => respositoriesMock, [])

  const table = useReactTable({
    data: tableData,
    columns: browseListColumns,
    getCoreRowModel: getCoreRowModel()
  })
  return (
    <div className="flex flex-col rounded-lg p-8">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="text-secondary text-left font-light">
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
            <tr
              key={row.id}
              // TODO: Hover
              className=""
              // TODO
              // eslint-disable-next-line no-alert
              onClick={() => alert('This will soon open up a detail view page!')}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="text-primary py-2 text-left">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {/* We are not using Footers for now */}
        <tfoot>
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
        </tfoot>
      </table>
    </div>
  )
}
export default RepositoryTable
