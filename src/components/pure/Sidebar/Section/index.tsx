import { PropsWithChildren } from 'react'
import Item from './Item'

type SectionProps = PropsWithChildren<{ title: string }>

/**
 * Section for main sidebar (includes header and items)
 */
const Section = ({ children, title }: SectionProps) => (
  <div
    key="div-2"
    className="border-t border-solid border-gray-800 py-2.5 text-14 font-normal leading-4 text-gray-100"
  >
    <p className="px-7 py-2.5 text-10 font-medium uppercase text-gray-400">{title}</p>
    <div className="px-2">{children}</div>
  </div>
)

export default Object.assign(Section, {
  Item
})
