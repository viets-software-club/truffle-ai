import { useReactTable, getCoreRowModel } from '@tanstack/react-table'
import { Project, useTrendingProjectsQuery } from '@/graphql/generated/gql'
import Error from '@/components/pure/Error'
import Loading from '@/components/pure/Loading'
import TopBar from '@/components/page/overview/TopBar'
import columns from '@/components/pure/ProjectsTable/columns'
import FilterBar from '@/components/page/overview/Filterbar'
import { useEffect, useState } from 'react'
import CommandInterface from '@/components/commandinterface/CommandInterface'

const nullFunc = () => null

/**
 * Table for displaying trending projects
 */
const ProjectsTable = () => {
  // Fetch data from Supabase using generated Urql hook
  const [{ data, fetching, error }] = useTrendingProjectsQuery()
  const projects = data?.projectCollection?.edges?.map((edge) => edge.node) as Project[]
  const [openModal, setOpenModal] = useState<boolean>(false)

  // Initialize TanStack table
  const table = useReactTable({
    data: projects,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault()
        setOpenModal(true)
      } else if (event.key === 'Escape') {
        setOpenModal(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  const closeModel = () => {
    setOpenModal(false)
  }
  // Display loading/ error messages conditionally
  if (fetching) return <Loading message="Getting trending projects for you..." />
  if (!projects || projects.length === 0 || error) return <Error />

  return (
    <div className="flex w-full flex-col">
      <TopBar columns={table.getAllLeafColumns()} nullFunc={nullFunc} />
      <FilterBar />
      {openModal && <CommandInterface action={closeModel} />}
    </div>
  )
}

export default ProjectsTable
