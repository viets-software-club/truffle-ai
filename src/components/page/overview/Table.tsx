import { useReactTable, flexRender } from '@tanstack/react-table'
import Link from 'next/link'
import { Project } from '@/generated/gql'

type TableProps = {
  table: ReturnType<typeof useReactTable<Project>>
}

const Table = ({ table }: TableProps) => (
  <table className="mx-6 my-3.5 w-full">
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id} className="text-left text-12 font-medium uppercase text-gray-400">
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
              <Link href={`/details/${row?.original?.id as string}`}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Link>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
)

export default Table
