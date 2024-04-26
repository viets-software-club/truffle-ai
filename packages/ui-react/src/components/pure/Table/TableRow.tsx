import Link from 'next/link'
import { flexRender } from '@tanstack/react-table'
import clsx from 'clsx'

type TableRowProps = {
}

const TableRow = ({ row: { id, original, getVisibleCells } }: TableRowProps) => (
  <tr key={id} className='cursor-pointer transition-colors duration-75 hover:bg-white/5'>
    {getVisibleCells().map((cell, cellIndex) => {
      const isFirstChild = cellIndex === 0
      const isLastChild = cellIndex === getVisibleCells().length - 1

      return (
        <td
          key={cell.id}
          className={clsx('text-left', {
            'rounded-l-lg': isFirstChild,
            'rounded-r-lg': isLastChild
          })}>
          <Link
            href={`/details/${original.id as string}`}
            className={clsx('block p-2 pl-0', id === 'Pin' && 'pr-1')}
            data-tooltip-id={cell.column.id === 'Name' ? 'tooltip' : undefined}
            data-tooltip-content={
              cell.column.id === 'Name'
                ? original.eli5 ?? original.about ?? 'No description'
                : undefined
            }
            data-tooltip-place='top'
            data-tooltip-offset={-5}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </Link>
        </td>
      )
    })}
  </tr>
)

export default TableRow