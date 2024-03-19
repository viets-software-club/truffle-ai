import { useReactTable, flexRender } from '@tanstack/react-table'
import { GthbRepo } from '@/graphql/generated/gql'
import TableRow from './TableRow'

type TableProps = {
  table: ReturnType<typeof useReactTable<GthbRepo>>
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
      {/* Pinned rows */}
      {table.getTopRows().map(row => (
        <TableRow key={row.id} row={row} />
      ))}

      {/* Normal rows */}
      {table.getCenterRows().map(row => (
        <TableRow key={row.id} row={row} />
      ))}
    </tbody>
  </table>
)

export default Table
