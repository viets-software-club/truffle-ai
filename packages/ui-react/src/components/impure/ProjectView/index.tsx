import { useProjectTableVisibilityState } from '@/hooks/useProjectTableState'
import FirstRow from './FirstRow'
import SecondRow from './SecondRow'
import TableView from './TableView'
const ProjectView = () => {
	return (
		<div className="flex w-full flex-col">
			<FirstRow />
			<SecondRow />
			<TableView />
		</div>
	)
}

export default ProjectView

// Initialize TanStack table
//   const table = useReactTable({
//     data: data ?? [],
//     columns,
//     state: {
//       columnVisibility: {
//         ...columnVisibility,
//         Pin: showPinned
//       },
//       rowPinning
//     },
//     onRowPinningChange: setRowPinning,
//     onColumnVisibilityChange: setColumnVisibility,
//     getCoreRowModel: getCoreRowModel()
//   })

//       <div className='flex w-full flex-col'>
//         {beforeTable}

//         {error && <Error />}

//         {!error && (
//           <div className='mx-4 my-2 md:w-full md:max-w-[calc(100vw-32px)] md:overflow-hidden lg:mx-6 lg:my-3.5 lg:max-w-[calc(100vw-224px-48px)]'>
//             {/* Desktop */}
//             {fetching ? (
//               <div className='flex flex-col gap-2'>
//                 {Array.from(Array(loadingSkeletons).keys()).map(i => (
//                   <Skeleton key={i} className='h-12' />
//                 ))}
//               </div>
//             ) : data?.length === 0 ? (
//               <p className='w-full p-12 text-center text-sm text-white/75'>No projects found</p>
//             ) : (
//               <div className='custom-scrollbar 2xl:no-scrollbar hidden w-full overflow-x-scroll md:block'>
//                 <div className='w-[1400px] 2xl:w-full'>
//                   <Table table={table} />
//                 </div>
//               </div>
//             )}

//             {/* Mobile */}
//             <div className='flex flex-col gap-1 md:hidden'>
//               {data?.map(project => (
//                 <ProjectListItem
//                   key={project.id as string}
//                   project={project}
//                   percentileStats={percentileStats}
//                 />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   )
