import { flexRender, useReactTable } from '@tanstack/react-table'
import TableRow from './TableRow'


const Table = ({ table }) => {

  const header = (<thead>
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
    </thead>)

const body = (<tbody>
  {table.getTopRows().map(row => (
    <TableRow key={row.id} row={row} />
  ))}
  {table.getCenterRows().map(row => (
    <TableRow key={row.id} row={row} />
  ))}
  </tbody>)

 return (<table className='w-full'>
    {header}
    {body}
  </table>)
)

export default Table
