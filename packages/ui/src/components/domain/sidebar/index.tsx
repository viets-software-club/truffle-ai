import { PropsWithChildren, ReactNode } from 'react'
import Link from 'next/link'
import ProfileDropdownMenu from './ProfileDropdownMenu'

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
  <aside className='fixed z-30 flex h-screen w-56 flex-initial flex-col justify-between border-r border-gray-800 bg-gray-900'>
    <div>
      {/* Top bar with title and profile modal button */}
      <div className='flex h-[59px] w-full items-center justify-between px-7 text-gray-100'>
        <Link href='/'>
          <span className='mr-2 text-lg font-medium'>{props.title}</span>
        </Link>

        <ProfileDropdownMenu />
      </div>

      {props.children}
    </div>

    <footer className='border-t border-solid border-gray-800 p-2'>{footer}</footer>
  </aside>
)

export default Sidebar
