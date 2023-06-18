import { useReactTable, flexRender } from '@tanstack/react-table'
import Link from 'next/link'
import { Project } from '@/graphql/generated/gql'
import { TableFilter } from '@/components/page/overview/TableFilter'
import { useEffect, useMemo } from 'react'
import { TableSort } from '@/components/page/overview/TableSort'
import { getSortComparator, matchesFilter } from '@/util/sortAndFilterTable'

type TableProps = {
  table: ReturnType<typeof useReactTable<Project>>
  filters: TableFilter[]
  setFilteredRowCount: React.Dispatch<React.SetStateAction<number>>
  tableSort: TableSort | null
}

/**
 * Generic table component using @tanstack/react-table
 */
const Table = ({ table, filters, setFilteredRowCount, tableSort }: TableProps) => {
  const filteredRows = useMemo(
    () =>
      table.getRowModel().rows.filter(
        (row) =>
          !row.getVisibleCells().some((cell) =>
            filters.some((filter) => {
              if (filter.column.columnDef.header === cell.column.columnDef.header) {
                return !matchesFilter(cell, filter)
              }
              return false
            })
          )
      ),
    [table, filters, tableSort]
  )

  useEffect(() => {
    setFilteredRowCount(filteredRows.length)
  }, [filteredRows]) // Update filteredRowCount when filteredRows change.

  return (
    <table className="mx-6 my-3.5">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="pb-2 text-left text-12 font-medium uppercase text-gray-500"
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
        {filteredRows.sort(getSortComparator(tableSort)).map((row) => (
          <tr key={row.id} className="cursor-pointer hover:bg-gray-800">
            {row.getVisibleCells().map((cell, cellIndex) => {
              const isFirstChild = cellIndex === 0
              const isLastChild = cellIndex === row.getVisibleCells().length - 1
              return (
                <td
                  key={cell.id}
                  className={`p-2 pl-0 text-left ${isFirstChild ? 'rounded-l-lg' : ''} ${
                    isLastChild ? 'rounded-r-lg' : ''
                  }`}
                >
                  <Link href={`/details/${row.original.id as string}`}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Link>
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
