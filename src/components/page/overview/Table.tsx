import { useReactTable, flexRender, Cell } from '@tanstack/react-table'
import Link from 'next/link'
import { Project } from '@/graphql/generated/gql'
import {
  NumberTableFilterOperator,
  StringTableFilterOperator,
  TableFilter
} from '@/components/page/overview/TableFilter'
import { useEffect, useMemo } from 'react'

type TableProps = {
  table: ReturnType<typeof useReactTable<Project>>
  filters: TableFilter[]
  setFilteredRowCount: React.Dispatch<React.SetStateAction<number>>
}

const matchesFilter = (cell: Cell<Project, unknown>, filter: TableFilter) => {
  const cellValue = cell.getValue()
  const { operator, value } = filter
  if (
    value !== undefined &&
    Object.values(StringTableFilterOperator).includes(operator as StringTableFilterOperator)
  ) {
    const cellValueStr = cellValue as string
    switch (operator) {
      case StringTableFilterOperator.IS:
        return cellValueStr === value
      case StringTableFilterOperator.IS_NOT:
        return cellValueStr !== value
      case StringTableFilterOperator.CONTAINS:
        return cellValueStr.includes(value)
      case StringTableFilterOperator.DOES_NOT_CONTAIN:
        return !cellValueStr.includes(value)
      case StringTableFilterOperator.STARTS_WITH:
        return cellValueStr.startsWith(value)
      case StringTableFilterOperator.ENDS_WITH:
        return cellValueStr.endsWith(value)
      default:
        return true
    }
  } else if (value !== undefined) {
    const cellValueNum = cellValue as number
    switch (operator) {
      case NumberTableFilterOperator.EQUALS:
        return cellValueNum === Number(value)
      case NumberTableFilterOperator.NOT_EQUALS:
        return cellValueNum !== Number(value)
      case NumberTableFilterOperator.GREATER_THAN:
        return cellValueNum > value
      case NumberTableFilterOperator.LESS_THAN:
        return cellValueNum < value
      case NumberTableFilterOperator.GREATER_THAN_OR_EQUAL:
        return cellValueNum >= value
      case NumberTableFilterOperator.LESS_THAN_OR_EQUAL:
        return cellValueNum <= value
      default:
        return true
    }
  } else return true
}

/**
 * Generic table component using @tanstack/react-table
 */
const Table = ({ table, filters, setFilteredRowCount }: TableProps) => {
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
    [table, filters]
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
        {filteredRows.map((row) => (
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
