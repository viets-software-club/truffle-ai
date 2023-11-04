import { FC } from 'react'
import { AiOutlineNumber } from 'react-icons/ai'
import { IoTextOutline } from 'react-icons/io5'
import { TbArrowsSort } from 'react-icons/tb'
import { Menu } from '@headlessui/react'
import Button from '@/components/shared/Button'
import { OrderByDirection, ProjectOrderBy } from '@/graphql/generated/gql'
import MenuItemsTransition from '../../../shared/MenuItemsTransition'
import { filterOptions } from '../types'

type SortingSelectorProps = {
  sorting: ProjectOrderBy | null
  updateSorting: (sort: ProjectOrderBy | null) => void
}

const SortingSelector: FC<SortingSelectorProps> = ({ sorting, updateSorting }) => (
  <Menu as='div' className='relative'>
    <Menu.Button as='div'>
      <Button>
        <TbArrowsSort />
        Sorting
      </Button>
    </Menu.Button>

    <MenuItemsTransition>
      <Menu.Items className='absolute left-0 z-30 mt-2 origin-top-right rounded-md border border-white/5 bg-white/5 p-1 backdrop-blur-xl focus:outline-none'>
        {/* Populate sort modal, filter out currently sorted by key */}
        {filterOptions
          .filter(({ key }) => key !== Object.keys(sorting || {})[0])
          .map(({ key, column, type }) => (
            <Menu.Item
              as='button'
              key={key}
              onClick={() => {
                updateSorting({
                  [key]: OrderByDirection.DescNullsLast
                })
              }}
              className='flex min-w-[150px] items-center gap-2 rounded-md p-2 text-left text-sm text-white/90 transition-colors duration-75 hover:bg-white/5'>
              {type === 'string' ? (
                <IoTextOutline className='text-white/50' />
              ) : (
                <AiOutlineNumber className='text-white/50' />
              )}

              <p className='text-sm text-white/90'>{column}</p>
            </Menu.Item>
          ))}
      </Menu.Items>
    </MenuItemsTransition>
  </Menu>
)

export default SortingSelector
