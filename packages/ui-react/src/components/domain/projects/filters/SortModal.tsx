import Button from '@/components/pure/Button'
import { Popover } from '@headlessui/react'
import { ChevronDownIcon } from '@primer/octicons-react'
import clsx from 'clsx'
import { IconType } from 'react-icons'
import {
	BsSortAlphaDown,
	BsSortAlphaUpAlt,
	BsSortNumericDownAlt,
	BsSortNumericUp
} from 'react-icons/bs'
import { TbTrash } from 'react-icons/tb'
// import { OrderByDirection, ProjectOrderBy } from '@/graphql/generated/gql'
import MenuItemsTransition from '../../../shared/MenuItemsTransition'
import { filterOptions } from '../types'

// const ASC = OrderByDirection.AscNullsLast
// const DESC = OrderByDirection.DescNullsLast

// type SortModalProps = {
//   sorting: ProjectOrderBy
//   setSorting: (sort: ProjectOrderBy | null) => void
// }

// const SortModal = ({ sorting, setSorting }: SortModalProps) => {
const SortModal = () => {
	return null
	// const currentKey = Object.keys(sorting)[0] as keyof ProjectOrderBy
	// const column = filterOptions.find(option => option.key === currentKey)?.column
	// const currentDirection = sorting[currentKey]

	// let SortIcon: IconType

	// if (currentKey === 'name') {
	//   SortIcon = currentDirection === ASC ? BsSortAlphaUpAlt : BsSortAlphaDown
	// } else {
	//   SortIcon = currentDirection === ASC ? BsSortNumericUp : BsSortNumericDownAlt
	// }

	// return (
	//   <Popover as='div' className='relative inline-block text-left'>
	//     {({ open, close }) => (
	//       <>
	//         <Popover.Button as='div'>
	//           <Button>
	//             <SortIcon className='text-white/20' />
	//             {column}
	//             <ChevronDownIcon
	//               className={clsx('text-white/20 transition-transform duration-200', {
	//                 'rotate-180': open
	//               })}
	//             />
	//           </Button>
	//         </Popover.Button>

	//         <MenuItemsTransition>
	//           <Popover.Panel
	//             className={clsx(
	//               'absolute left-0 z-40 mt-2 rounded-md border border-white/5 bg-white/5 p-1 backdrop-blur-xl focus:outline-none',
	//               {
	//                 block: open,
	//                 hidden: !open
	//               }
	//             )}>
	//             <div className='flex flex-col space-y-3 p-2'>
	//               <div className='flex flex-row justify-between'>
	//                 <p className='text-sm text-white/90'>{column}</p>
	//                 <Button onClick={() => setSorting(null)}>
	//                   <TbTrash />
	//                 </Button>
	//               </div>

	//               <div className='flex flex-row space-x-1'>
	//                 <Button
	//                   onClick={() => {
	//                     setSorting({ [currentKey]: ASC })
	//                     close()
	//                   }}
	//                   variant={currentDirection === ASC ? 'highlighted' : 'default'}
	//                   className={clsx(currentDirection === ASC ? 'text-white/90' : 'text-white/50')}>
	//                   {currentKey === 'name' ? <BsSortAlphaUpAlt /> : <BsSortNumericUp />}Asc.
	//                 </Button>

	//                 <Button
	//                   onClick={() => {
	//                     setSorting({ [currentKey]: DESC })
	//                     close()
	//                   }}
	//                   variant={currentDirection === DESC ? 'highlighted' : 'default'}
	//                   className={clsx(currentDirection === DESC ? 'text-white/90' : 'text-white/50')}>
	//                   {currentKey === 'name' ? <BsSortAlphaDown /> : <BsSortNumericDownAlt />}Desc.
	//                 </Button>
	//               </div>
	//             </div>
	//           </Popover.Panel>
	//         </MenuItemsTransition>
	//       </>
	//     )}
	//   </Popover>
	// )
}

export default SortModal
