import { PropsWithChildren } from 'react'
import Item from './Item'

type SectionProps = PropsWithChildren<{ title: string }>

/**
 * Section for main sidebar (includes header and items)
 */
const Section = ({ children, title }: SectionProps) => (
  <div
    className={`${
      title === 'Categories' ? 'no-scrollbar max-h-[calc(100vh-270px)] overflow-y-scroll' : ''
    } border-t border-solid border-gray-800 py-2.5 text-14 font-normal leading-4 text-gray-100`}
  >
    <p className="px-7 py-2.5 text-12 font-medium uppercase text-gray-500">{title}</p>
    <div className="px-2">{children}</div>
  </div>
)

export default Object.assign(Section, {
  Item
})
