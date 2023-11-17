import { ReactNode } from 'react'

type SmallSidebarProps = {
  children: ReactNode
}

/**
 * A sidebar component with a predefined width.
 *
 * @param {SmallSidebarProps} props - The properties for this component.
 * @returns {React.Element} The sidebar element.
 */
const SmallSidebar = ({ children }: SmallSidebarProps) => (
  <div className='fixed right-0 top-[60px] h-[calc(100vh-60px)] w-[250px] border-l border-white/5'>
    {children}
  </div>
)

export default SmallSidebar
