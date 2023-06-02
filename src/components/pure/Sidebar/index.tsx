import { PropsWithChildren, ReactNode } from 'react'
import Link from 'next/link'
import Box from './Box/Box'
import SmallSidebar from './Small'
import Section from './Section'

type SidebarProps = PropsWithChildren<{
  title: string
  footer: ReactNode
}>
const Sidebar = ({ footer, ...props }: SidebarProps) => (
  <aside className="flex h-screen w-56 flex-col justify-between border-r border-gray-800">
    <div>
      <div className="flex h-[59px] w-full items-center justify-between px-7 text-gray-100">
        <Link href="/">
          <span className="mr-2 text-18 font-medium">{props.title}</span>
        </Link>

        <div className="h-[30px] w-[30px] rounded-[5px] bg-gray-600" />
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
