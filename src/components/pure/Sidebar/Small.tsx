import { ReactNode } from 'react'

type SmallSidebarProps = {
  children: ReactNode
}

const SmallSidebar = ({ children }: SmallSidebarProps) => (
  <div className="h-full w-1/5 border-l border-solid border-gray-800">{children}</div>
)

export default SmallSidebar
