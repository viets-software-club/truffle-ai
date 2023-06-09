import { PropsWithChildren, ReactNode } from 'react'
import Link from 'next/link'

import { AiFillSmile } from 'react-icons/ai'
import { Menu } from '@headlessui/react'
import { TransitionMenuItems } from '@/components/page/overview/TopBar'
import { FiSettings as Settings, FiLogOut as LogOut } from 'react-icons/fi'

import Box from './Box/Box'
import SmallSidebar from './Small'
import Section from './Section'

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
  <aside className="flex h-screen w-56 flex-col justify-between border-r border-gray-800">
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
              <AiFillSmile color="#A5B4FC" />
            </Menu.Button>
          </div>
          {/* Dropdown menu with options */}
          <TransitionMenuItems>
            <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-gray-700 shadow-lg ring-1 focus:outline-none">
              <div className="py-1">
                <Section.Item
                  id={0}
                  Icon={Settings}
                  text="Settings"
                  path="/settings"
                  showIcon
                  editable={false}
                />
                <hr className="my-1 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
                <Section.Item
                  id={1}
                  Icon={LogOut}
                  text="Logout"
                  path="/logout"
                  showIcon
                  editable={false}
                />
              </div>
            </Menu.Items>
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
