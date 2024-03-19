import { AiOutlineFilter, AiOutlineNumber } from 'react-icons/ai'
import { IoTextOutline } from 'react-icons/io5'
import { Menu } from '@headlessui/react'
import Button from '@/components/shared/Button'
import { GthbTrendingFilter } from '@/graphql/generated/gql'
import MenuItemsTransition from '../../../shared/MenuItemsTransition'
import { FilterType, filterOptions } from '../types'

type FilterSelectorProps = {
  filters: GthbTrendingFilter
  addFilter: (key: string, type: FilterType) => void
}

const FilterSelector = ({ filters, addFilter }: FilterSelectorProps) => (
  <Menu as='div' className='relative hidden md:block'>
    <Menu.Button as='div'>
      <Button>
        <AiOutlineFilter />
        Add filters
      </Button>
    </Menu.Button>

    <MenuItemsTransition>
      <Menu.Items className='absolute left-0 z-30 mt-2 origin-top-right rounded-md border border-white/5 bg-white/5 p-1 backdrop-blur-xl focus:outline-none'>
        {filters && Object.keys(filters).length >= filterOptions.length && (
          <p className='py-1 pl-2 text-sm'>No more filters can be applied.</p>
        )}

        {filters &&
          filterOptions
            .filter(({ key }) => !Object.keys(filters).includes(key))
            .map(({ key, column, type }) => (
              <Menu.Item
                as='button'
                key={key}
                className='flex min-w-[150px] items-center gap-2 rounded-md p-2 text-left text-sm text-white/90 transition-colors duration-75 hover:bg-white/5'
                onClick={() => addFilter(key, type)}>
                {key === 'name' ? (
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

export default FilterSelector
