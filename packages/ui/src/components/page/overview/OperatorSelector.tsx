import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@primer/octicons-react'
import MenuItemsTransition from './MenuItemsTransition'
import { StringFilterOperator, IntFilterOperator } from './types'

type OperatorSelectorProps = {
  operator: StringFilterOperator | IntFilterOperator
  type?: string
  stringFilterOperators: JSX.Element[]
  intFilterOperators: JSX.Element[]
}

const OperatorSelector = ({
  operator,
  type,
  stringFilterOperators,
  intFilterOperators
}: OperatorSelectorProps) => (
  <Menu as='div'>
    <Menu.Button className='flex items-center space-x-1 text-sm text-gray-500 outline-none'>
      <p className='text-sm font-medium text-gray-300'>{operator}</p>
      <ChevronDownIcon className='text-gray-500' />
    </Menu.Button>

    <MenuItemsTransition>
      <Menu.Items className='absolute right-0 z-40 mt-2 w-44 origin-top-right rounded-md bg-gray-700 shadow-lg focus:outline-none'>
        <div className='py-1'>{type === 'string' ? stringFilterOperators : intFilterOperators}</div>
      </Menu.Items>
    </MenuItemsTransition>
  </Menu>
)

export default OperatorSelector
