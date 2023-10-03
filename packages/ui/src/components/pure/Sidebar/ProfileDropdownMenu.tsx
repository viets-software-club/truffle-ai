import Link from 'next/link'
import { Menu } from '@headlessui/react'
import { FiUser as UserIcon } from 'react-icons/fi'
import MenuItemsTransition from '@/components/page/overview/MenuItemsTransition'

const ProfileDropdownMenu = () => (
  <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button className="flex h-[30px] w-[30px] flex-row items-center rounded-[5px] border border-gray-800 bg-gray-850 px-2 py-1.5 text-14 transition-colors duration-100 hover:bg-gray-700">
        <UserIcon className="text-gray-500" />
      </Menu.Button>
    </div>

    {/* Dropdown menu with options */}
    <MenuItemsTransition>
      <div className="absolute left-0 z-20 mt-2 flex flex-col rounded-[5px] bg-gray-700 p-1 text-14 shadow-md focus:outline-none">
        <Link href="/settings" className="min-w-[150px] rounded-[5px] p-2 hover:bg-gray-600">
          Settings
        </Link>
        <Link href="/docs" className="min-w-[150px] rounded-[5px] p-2 hover:bg-gray-600">
          Documentation
        </Link>
        <hr className="my-1 h-px border-t border-gray-500 opacity-25" />
        <Link href="/logout" className="min-w-[150px] rounded-[5px] p-2 hover:bg-gray-600">
          Log out
        </Link>
      </div>
    </MenuItemsTransition>
  </Menu>
)

export default ProfileDropdownMenu
