import { ReactNode } from 'react'

type SmallSidebarProps = {
  children: ReactNode
}

const SmallSidebar = ({ children }: SmallSidebarProps) => (
  <div className='z-10 border-white/5 lg:fixed lg:right-0 lg:top-[60px] lg:h-[calc(100vh-60px)] lg:w-[250px] lg:border-l'>
    {children}
  </div>
)

export default SmallSidebar
