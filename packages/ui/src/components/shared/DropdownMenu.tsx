import { Menu } from '@headlessui/react'
import Button from '@/components/shared/Button'
import MenuItemsTransition from './MenuItemsTransition'

type DropdownMenuProps<T> = {
  value: T
  setValue: (value: T) => void
  options: { label: string; value: T }[]
  Icon?: IconComponentType
}

const DropdownMenu = <T,>({ value, setValue, options, Icon }: DropdownMenuProps<T>) => (
  <Menu as='div' className='relative'>
    <Menu.Button as='div'>
      <Button>
        {Icon && <Icon />}
        {options.find(o => o.value === value)?.label || options[0].label}
      </Button>
    </Menu.Button>

    <MenuItemsTransition>
      <Menu.Items className='absolute left-0 z-30 mt-2 origin-top-left rounded-md bg-gray-700 p-1 shadow-lg focus:outline-none'>
        {options.map(o => (
          <Menu.Item
            as='button'
            key={o.label}
            onClick={() => setValue(o.value)}
            className='min-w-[150px] rounded-md p-2 text-left text-sm text-gray-100 hover:bg-gray-600'>
            {o.label}
          </Menu.Item>
        ))}
      </Menu.Items>
    </MenuItemsTransition>
  </Menu>
)

export default DropdownMenu
