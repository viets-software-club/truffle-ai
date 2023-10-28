import { PropsWithChildren } from 'react'
import clsx from 'clsx'
import Item from './Item'

type SectionProps = PropsWithChildren<{ title: string }>

/**
 * Section for main sidebar (includes header and items)
 */
const Section = ({ children, title }: SectionProps) => (
  <div
    className={clsx(
      'border-t border-solid border-gray-800 py-2.5 text-sm font-normal leading-4 text-gray-100',
      {
        'no-scrollbar max-h-[calc(100vh-270px)] overflow-y-scroll': title === 'Categories'
      }
    )}>
    <p className='px-7 py-2.5 text-xs font-medium uppercase text-gray-500'>{title}</p>
    <div className='px-2'>{children}</div>
  </div>
)

export default Object.assign(Section, {
  Item
})
