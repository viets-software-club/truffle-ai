import Link from 'next/link'
import { useReactTable, flexRender } from '@tanstack/react-table'
import clsx from 'clsx'
import { Project } from '@/graphql/generated/gql'

type TableProps = {
  table: ReturnType<typeof useReactTable<Project>>
}

/**
 * Generic table component using @tanstack/react-table
 */
const Table = ({ table }: TableProps) => (
  <table className='w-full'>
    <thead>
      {table.getHeaderGroups().map(headerGroup => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map(header => (
            <th
              key={header.id}
              className='pb-2 text-left text-xs font-medium uppercase text-white/50'>
              {header.isPlaceholder
                ? null
                : flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          ))}
        </tr>
      ))}
    </thead>

    <tbody>
      {table.getRowModel().rows.map(row => (
        <tr key={row.id} className='cursor-pointer transition-colors duration-75 hover:bg-white/10'>
          {row.getVisibleCells().map((cell, cellIndex) => {
            const isFirstChild = cellIndex === 0
            const isLastChild = cellIndex === row.getVisibleCells().length - 1

            return (
              <td
                key={cell.id}
                className={clsx('text-left', {
                  'rounded-l-lg': isFirstChild,
                  'rounded-r-lg': isLastChild
                })}>
                <Link href={`/details/${row.original.id as string}`} className='block p-2 pl-0'>
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
