import { ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
}

const SidebarBox = ({ title, children }: Props) => (
  <div className='border-b border-solid border-gray-800 px-7 py-3 text-sm font-normal leading-4'>
    <h3 className='py-2 text-xs font-medium uppercase text-gray-500'>{title}</h3>
    {children}
  </div>
)

export default SidebarBox
