import { IconType } from 'react-icons'
import {
  BsSortAlphaDown,
  BsSortAlphaUpAlt,
  BsSortNumericDownAlt,
  BsSortNumericUp
} from 'react-icons/bs'
import { TbTrash } from 'react-icons/tb'
import { Popover } from '@headlessui/react'
import { ChevronDownIcon } from '@primer/octicons-react'
import clsx from 'clsx'
import Button from '@/components/pure/Button'
import { OrderByDirection, ProjectOrderBy } from '@/graphql/generated/gql'
import MenuItemsTransition from './MenuItemsTransition'
import { filterOptions } from './types'

const ASC = OrderByDirection.AscNullsLast
const DESC = OrderByDirection.DescNullsLast

type SortModalProps = {
  sorting: ProjectOrderBy
  setSorting: (sort: ProjectOrderBy | null) => void
}

const SortModal = ({ sorting, setSorting }: SortModalProps) => {
  const currentKey = Object.keys(sorting)[0] as keyof ProjectOrderBy
  const column = filterOptions.find(option => option.key === currentKey)?.column
  const currentDirection = sorting[currentKey]

  let SortIcon: IconType

  if (currentKey === 'name') {
    SortIcon = currentDirection === ASC ? BsSortAlphaUpAlt : BsSortAlphaDown
  } else {
    SortIcon = currentDirection === ASC ? BsSortNumericUp : BsSortNumericDownAlt
  }

  return (
    <Popover as='div' className='relative inline-block text-left'>
      {({ open, close }) => (
        <>
          <Popover.Button className='flex h-[30px] flex-row items-center space-x-2 rounded-md border border-gray-800 bg-gray-850 px-2 py-1.5 text-sm outline-none transition-colors duration-100 hover:bg-gray-700'>
            <div className='flex flex-row items-center space-x-1'>
              <SortIcon className='text-gray-500' />

              <p className='text-sm text-gray-100'>{column}</p>

              <ChevronDownIcon
                className={clsx('text-gray-500 transition-transform duration-200', {
                  'rotate-180': open
                })}
              />
            </div>
          </Popover.Button>

          <MenuItemsTransition>
            <Popover.Panel
              className={clsx(
                'absolute left-0 z-40 mt-2 rounded-md bg-gray-700 shadow-lg focus:outline-none',
                {
                  block: open,
                  hidden: !open
                }
              )}>
              <div className='flex flex-col space-y-3 p-2'>
                <div className='flex flex-row justify-between'>
                  <p className='text-sm text-gray-100'>{column}</p>
                  <Button onClick={() => setSorting(null)}>
                    <TbTrash />
                  </Button>
                </div>

                <div className='flex flex-row space-x-1'>
                  <Button
                    onClick={() => {
                      setSorting({ [currentKey]: ASC })
                      close()
                    }}
                    variant={currentDirection === ASC ? 'highlighted' : 'default'}
                    className={clsx(currentDirection === ASC ? 'text-gray-100' : 'text-gray-500')}>
                    {currentKey === 'name' ? <BsSortAlphaUpAlt /> : <BsSortNumericUp />}Asc.
                  </Button>

                  <Button
                    onClick={() => {
                      setSorting({ [currentKey]: DESC })
                      close()
                    }}
                    variant={currentDirection === DESC ? 'highlighted' : 'default'}
                    className={clsx(currentDirection === DESC ? 'text-gray-100' : 'text-gray-500')}>
                    {currentKey === 'name' ? <BsSortAlphaDown /> : <BsSortNumericDownAlt />}Desc.
                  </Button>
                </div>
              </div>
            </Popover.Panel>
          </MenuItemsTransition>
        </>
      )}
    </Popover>
  )
}

export default SortModal
