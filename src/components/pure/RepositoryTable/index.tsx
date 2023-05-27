/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper
} from '@tanstack/react-table'
import { AiOutlineFork, AiOutlinePlus, AiOutlineStar, AiOutlineCalendar } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'
import Link from 'next/link'
import { BiGitPullRequest } from 'react-icons/bi'
import { VscIssues, VscSettings } from 'react-icons/vsc'
import ProgrammingLanguages from '@/constants/programmingLanguages'
import RepositoryCategories from '@/constants/repositoryCategories'
import GitHubStatisticItem from '@/components/pure/Sidebar/Box/GithubStatItem'
import Button from '@/components/pure/Button'
import { TbColumns2 } from 'react-icons/tb'
import { Menu, Transition } from '@headlessui/react'
import { useState, Fragment } from 'react'
import { RiCheckboxBlankLine, RiCheckboxFill } from 'react-icons/ri'
import respositoriesMock from '../../../data/repositoriesMock'

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

const nullFunc = () => null

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
        redValue={20000}
        greenValue={40000}
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
        redValue={5000}
        greenValue={10000}
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
        redValue={500}
        greenValue={1000}
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
        redValue={120}
        greenValue={500}
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
        redValue={100}
        greenValue={500}
        value={info.getValue().toString()}
      />
    )
  }),
  columnHelper.accessor('programmingLanguage', {
    header: () => 'Language',
    cell: (info) => (
      <p className="inline-block rounded-lg bg-gray-850 px-2 py-0.5 text-12 font-light text-gray-300">
        {info.getValue()}
      </p>
    )
  }),
  columnHelper.accessor('category', {
    header: () => 'Category',
    cell: (info) => (
      <p className="inline-block rounded-lg bg-gray-850 px-2 py-0.5 text-12 font-light text-gray-300">
        {info.getValue()}
      </p>
    )
  })
]

const initialDisplayColumns = new Array(browseListColumns.length).fill(true)

const RepositoryTable = () => {
  const [displayColumns, setDisplayColumns] = useState(initialDisplayColumns)

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
      <div className="flex flex-row justify-between border-b border-gray-800 px-6 pb-3.5">
        {/* Filter, Sort, Edit Columns buttons */}
        <div className="flex flex-row gap-3">
          <div className="inline-block">
            <Button
              onClick={nullFunc}
              variant="normal"
              text="This week"
              Icon={AiOutlineCalendar}
              order="ltr"
              iconColor="white"
              textColor="white"
            />
          </div>
          <div className="inline-block">
            <Button
              onClick={nullFunc}
              variant="filter"
              text="Add Filter"
              Icon={AiOutlinePlus}
              order="ltr"
              iconColor="white"
              textColor="white"
            />
          </div>
        </div>

        <div className="flex flex-row gap-3">
          <div className="inline-block">
            <Button
              onClick={nullFunc}
              variant="normal"
              text="Sort"
              Icon={VscSettings}
              order="ltr"
              iconColor="white"
              textColor="white"
            />
          </div>
          <div className="mb-8 flex flex-row space-x-2">{/* Dropdown */}</div>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="flex flex-row items-center space-x-2 rounded-[5px] border border-gray-800 bg-gray-850 px-3 py-1.5 text-14 transition-colors duration-100 hover:bg-gray-700">
                <TbColumns2 />
                <p>Edit Columns</p>
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              {/* eslint-disable-next-line tailwindcss/migration-from-tailwind-2 */}
              <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {browseListColumns.map((column, index) => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    const text =
                      typeof column.header === 'function' ? column.header() : column.header
                    const headerText = column.header && text

                    return (
                      <Menu.Item key={column.id}>
                        <button
                          type="button"
                          onClick={() => toggleColumn(index)}
                          className="flex w-44 flex-row items-center space-x-2 px-4 py-2 hover:bg-gray-600"
                        >
                          {displayColumns[index] ? (
                            <RiCheckboxFill className="text-indigo-600" />
                          ) : (
                            <RiCheckboxBlankLine />
                          )}
                          <p
                            className={
                              displayColumns[index]
                                ? 'text-14 text-gray-100'
                                : 'text-14 text-gray-400'
                            }
                          >
                            {headerText}
                          </p>
                        </button>
                      </Menu.Item>
                    )
                  })}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <div className="inline-block">
            <Button
              onClick={nullFunc}
              variant="highlighted"
              text="Add Project"
              Icon={AiOutlinePlus}
              order="ltr"
              iconColor="white"
              textColor="white"
            />
          </div>
        </div>
      </div>
      {/* Filterbar */}
      <div className="flex flex-row justify-between border-b border-gray-800 px-6 py-2.5">
        <div className="flex flex-row gap-3">
          <div className="inline-block">
            <Button
              onClick={nullFunc}
              variant="normal"
              text="This week"
              Icon={AiOutlineCalendar}
              order="ltr"
              iconColor="white"
              textColor="white"
            />
          </div>
        </div>
        <div className="flex flex-row items-center">
          <p className="text-14">10</p>
          <p className="text-14 text-gray-500">/25</p>
        </div>
      </div>
      {/* Table */}
      <table className="mx-6 my-3.5 w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="text-left text-12 font-medium uppercase text-gray-400"
                >
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
      </table>
    </div>
  )
}
export default RepositoryTable
