import Link from 'next/link'
import { useReactTable, flexRender } from '@tanstack/react-table'
import { Project } from '@/graphql/generated/gql'

type TableProps = {
  table: ReturnType<typeof useReactTable<Project>>
}

/**
 * Generic table component using @tanstack/react-table
 */
const Table = ({ table }: TableProps) => (
  <table className="mx-6 my-3.5">
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              className="text-12 pb-2 text-left font-medium uppercase text-gray-500"
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

export default Table
