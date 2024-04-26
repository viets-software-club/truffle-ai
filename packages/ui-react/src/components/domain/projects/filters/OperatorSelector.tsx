import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@primer/octicons-react'
import MenuItemsTransition from '../../../shared/MenuItemsTransition'
import { StringFilterOperator, IntFilterOperator } from '../types'

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
    <Menu.Button className='flex items-center space-x-1 text-sm text-white/50 outline-none'>
      <p className='text-sm font-medium text-white/75'>{operator}</p>
      <ChevronDownIcon className='text-white/50' />
    </Menu.Button>

    <MenuItemsTransition>
      <Menu.Items className='absolute right-0 z-40 mt-2 w-44 origin-top-right rounded-md border border-white/5 bg-gray-850/90 p-1 backdrop-blur-xl focus:outline-none'>
        {type === 'string' ? stringFilterOperators : intFilterOperators}
      </Menu.Items>
    </MenuItemsTransition>
  </Menu>
)

export default OperatorSelector
