import { PropsWithChildren, ReactNode } from 'react'
import Link from 'next/link'
import { Menu } from '@headlessui/react'
import { TransitionMenuItems } from '@/components/page/overview/TopBar'
import { FiUser as UserIcon } from 'react-icons/fi'
import Box from './Box/Box'
import Section from './Section'
import SmallSidebar from './Small'

type SidebarProps = PropsWithChildren<{
  title: string
  footer: ReactNode
}>

/**
 * Sidebar component which renders a sidebar with a title, a footer, and children elements.
 * @param {ReactNode} footer - The footer content to be displayed at the bottom of the sidebar.
 * @param {string} props.title - The title for the sidebar.
 * @returns {ReactNode} Returns a sidebar component with provided footer and title, and children elements.
 */
const Sidebar = ({ footer, ...props }: SidebarProps) => (
  <aside className="fixed z-20 flex h-screen w-56 flex-initial flex-col justify-between border-r border-gray-800">
    <div>
      {/* Top bar with title and profile modal button */}
      <div className="flex h-[59px] w-full items-center justify-between px-7 text-gray-100">
        <Link href="/">
          <span className="mr-2 text-18 font-medium">{props.title}</span>
        </Link>

        {/* The profile button opens a dropdown menu with options */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="flex h-[30px] w-[30px] flex-row items-center rounded-[5px] border border-gray-800 bg-gray-850 px-2 py-1.5 text-14 transition-colors duration-100 hover:bg-gray-700">
              <UserIcon className="text-gray-500" />
            </Menu.Button>
          </div>
          {/* Dropdown menu with options */}
          <TransitionMenuItems>
            <div className="absolute left-0 z-20 mt-2 flex flex-col rounded-[5px] bg-gray-700 p-1 text-14 shadow-md focus:outline-none">
              <Link
                href="/settings"
                className="min-w-[150px] rounded-[5px] px-4 py-2 hover:bg-gray-600"
              >
                Settings
              </Link>
              <Link
                href="/docs"
                className="min-w-[150px] rounded-[5px] px-4 py-2 hover:bg-gray-600"
              >
                Documentation
              </Link>
              <hr className="my-1 h-px border-t border-gray-500 opacity-25" />
              <Link
                href="/logout"
                className="min-w-[150px] rounded-[5px] px-4 py-2 hover:bg-gray-600"
              >
                Log out
              </Link>
            </div>
          </TransitionMenuItems>
        </Menu>
      </div>

      {props.children}
    </div>

    <footer className="border-t border-solid border-gray-800 p-2">{footer}</footer>
  </aside>
)

export default Object.assign(Sidebar, {
  Box,
  Section,
  Small: SmallSidebar
})
