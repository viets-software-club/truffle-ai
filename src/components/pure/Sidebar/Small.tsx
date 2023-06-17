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
  <div className="h-full min-h-[calc(100vh-60px)] w-1/5 border-l border-solid border-gray-800">
    {children}
  </div>
)

export default SmallSidebar
