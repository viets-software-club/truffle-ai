import { PropsWithChildren, ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/logo.svg'

type SidebarProps = PropsWithChildren<{
  title: string
  footer: ReactNode
}>

/**
 * Sidebar component which renders a sidebar with a title, a footer, and children elements.
 * @param {ReactNode} footer - The footer content to be displayed at the bottom of the sidebar.
 * @param {string} title - The title for the sidebar.
 * @returns {ReactNode} Returns a sidebar component with provided footer and title, and children elements.
 */
const Sidebar = ({ footer, title, ...props }: SidebarProps) => (
  <aside className='fixed z-30 hidden h-screen w-56 flex-col justify-between border-r border-white/5 lg:flex'>
    <div>
      {/* Top bar with title and profile modal button */}
      <div className='flex h-[59px] w-full items-center justify-between px-7 text-white/90'>
        <Link href='/' className='flex items-center gap-2'>
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <Image src={Logo} alt='Logo' className='h-6 w-6' />
          <span className='text-lg font-medium'>{title}</span>
        </Link>
      </div>

      {props.children}
    </div>

    <footer className='border-t border-solid border-white/5 p-2'>{footer}</footer>
  </aside>
)

export default Sidebar
