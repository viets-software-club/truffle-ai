import { useReactTable, flexRender, Cell, Row } from '@tanstack/react-table'
import Link from 'next/link'
import { Project } from '@/graphql/generated/gql'
import {
  NumberTableFilterOperator,
  StringTableFilterOperator,
  TableFilter
} from '@/components/page/overview/TableFilter'
import { useEffect, useMemo } from 'react'
import { TableSort } from '@/components/page/overview/TableSort'

type TableProps = {
  table: ReturnType<typeof useReactTable<Project>>
  filters: TableFilter[]
  setFilteredRowCount: React.Dispatch<React.SetStateAction<number>>
  tableSort: TableSort | null
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
  } else if (value !== undefined && value !== '') {
    const cellValueNum = cellValue as number
    switch (operator) {
      case NumberTableFilterOperator.EQUALS:
        return cellValueNum === Number(value)
      case NumberTableFilterOperator.GREATER_THAN:
        return cellValueNum > value
      case NumberTableFilterOperator.LESS_THAN:
        return cellValueNum < value
      default:
        return true
    }
  } else return true
}

// eslint-disable-next-line sonarjs/cognitive-complexity
const getSortComparator = (sort: TableSort | null) => (r1: Row<Project>, r2: Row<Project>) => {
  if (!sort) {
    return Number(r2.getValue('Stars')) - Number(r1.getValue('Stars'))
  }

  if (sort.column === 'Name') {
    const v1 = r1.original.name
    const v2 = r2.original.name
    if (typeof v1 === 'string' && typeof v2 === 'string') {
      return sort.direction === 'asc' ? v2.localeCompare(v1) : v1.localeCompare(v2)
    }
  }

  if (sort.column === 'Contrib.') {
    const v1 = r1.original.contributorCount
    const v2 = r2.original.contributorCount
    if (typeof v1 === 'number' && typeof v2 === 'number') {
      return sort.direction === 'desc' ? v2 - v1 : v1 - v2
    }
  }

  if (sort.column === 'Forks/Contrib.') {
    const v1forks = r1.original.forkCount
    const v1contrib = r1.original.contributorCount
    const v2forks = r2.original.forkCount
    const v2contrib = r2.original.contributorCount
    if (
      typeof v1forks === 'number' &&
      typeof v1contrib === 'number' &&
      typeof v2forks === 'number' &&
      typeof v2contrib === 'number'
    ) {
      const v1 = v1forks / v1contrib
      const v2 = v2forks / v2contrib
      return sort.direction === 'desc' ? v2 - v1 : v1 - v2
    }
  }

  if (sort.column === 'Issues/Contrib.') {
    const v1issues = r1.original.issueCount
    const v1contrib = r1.original.contributorCount
    const v2issues = r2.original.issueCount
    const v2contrib = r2.original.contributorCount
    if (
      typeof v1issues === 'number' &&
      typeof v1contrib === 'number' &&
      typeof v2issues === 'number' &&
      typeof v2contrib === 'number'
    ) {
      const v1 = v1issues / v1contrib
      const v2 = v2issues / v2contrib
      return sort.direction === 'desc' ? v2 - v1 : v1 - v2
    }
  }

  const value1 = r1.getValue(sort.column)
  const value2 = r2.getValue(sort.column)

  if (typeof value1 === 'number' && typeof value2 === 'number') {
    return sort.direction === 'desc' ? value2 - value1 : value1 - value2
  }

  return 0
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
