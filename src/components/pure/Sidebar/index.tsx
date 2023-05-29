import { PropsWithChildren, ReactNode } from 'react'
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
      <div className="flex w-full items-center justify-between px-7 py-4 text-gray-100">
        <span className="mr-2">{props.title}</span>
        <div className="h-[30px] w-[30px] rounded-[5px] bg-gray-500" />
      </div>
      {props.children}
    </div>
    <footer className="border-t border-solid border-gray-800">{footer}</footer>
  </aside>
)

export default Object.assign(Sidebar, {
  Box,
  Section,
  Small: SmallSidebar
})
