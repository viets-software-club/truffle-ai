import { FC } from 'react'
import { Menu } from '@headlessui/react'

type FilterMenuItemProps = { label: string; handleClick: () => void }

const FilterMenuItem: FC<FilterMenuItemProps> = ({ label, handleClick }) => (
  <Menu.Item key={label}>
    <button
      type="button"
      className="flex w-44 flex-row items-center space-x-2 px-4 py-2 hover:bg-gray-600"
      onClick={handleClick}
    >
      <p className="text-14 text-gray-100">{label}</p>
    </button>
  </Menu.Item>
)

export default FilterMenuItem
