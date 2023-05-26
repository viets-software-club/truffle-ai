import Link from 'next/link'
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import { useTrendingProjectsQuery } from '@/generated/gql'
import columns from './columns'

/**
 * Table for displaying trending repositories
 */
const RepositoryTable = () => {
  // Fetch data from Supabase using generated Urql hook
  const [{ data, fetching, error }] = useTrendingProjectsQuery()
  const projects = data?.projectCollection?.edges?.map((edge) => edge.node) || []

  const table = useReactTable({
    data: projects,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  // TODO: Replace with loading component
  if (fetching) return <p>Loading...</p>
  // TODO: Replace with error component
  if (projects.length === 0 || error) return <p>{error?.message}</p>

  return (
    <div className="flex flex-col rounded-lg">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="text-left font-light">
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
                  <Link
                    href={`/details/${typeof row.original.id === 'string' ? row.original.id : ''}`}
                  >
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
