import { useEffect, useState } from 'react'
import { HiOutlineFolder, HiOutlineFolderOpen } from 'react-icons/hi2'
import { ArrowRightIcon } from '@primer/octicons-react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

type ItemProps = {
  title: string
  imgSrc: string
  link: string
  isSelected?: boolean
}
type SidebarItemGroupProps = {
  id: number | string,
  title: string
  link: string
  linkText: string
  items: ItemProps[]
}

const Item = (props: ItemProps) => (
  <div
    className={clsx(
      'relative flex flex-col justify-between rounded-md transition-colors duration-75 hover:bg-white/5',
      props.isSelected && 'bg-white/10'
    )}>
    <Link href={props.link}>
      <div className='inline-flex w-full items-center justify-between py-2.5 pl-5'>
        <div
          className='flex flex-row items-center justify-center gap-[5px] overflow-hidden'>
            <div className='relative ml-2 h-4 w-4 overflow-hidden rounded-md'>
              <Image src={props.imgSrc} alt='logo' fill sizes='24px' />
            </div>
          <span
            className='mt-[1px] h-[13px] w-[110px] overflow-hidden text-left text-xs not-italic leading-3 text-white/90'
            style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {props.title}
          </span>
        </div>
      </div>
    </Link>
  </div>
)

const SidebarItemGroup = (props: SidebarItemGroupProps) => {

  const [isExpanded, setIsExpanded] = useState(false)
  const Icon = isExpanded ? HiOutlineFolderOpen : HiOutlineFolder

  return (
    <div className='flex flex-col'>
      <button
        type='button'
        onClick={() => setIsExpanded(!isExpanded)}
        className='group relative flex w-full items-center justify-start gap-[5px] rounded-md px-5 py-2.5 transition-colors duration-75 hover:bg-white/5'>
        <Icon className='h-4 w-4 text-white/50' />
        <span
          className='mt-[1px] h-[13px] w-[130px] overflow-hidden text-left text-xs leading-3 text-white/90'
          style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {props.title}
        </span>
        <Link
          href={props.link}
          className='group/link invisible absolute right-1 top-1/2 flex -translate-y-1/2 items-center gap-1 overflow-hidden rounded-md px-2 py-1.5 text-white/50 opacity-0 transition-all duration-100 hover:bg-[#343435] group-hover:visible group-hover:opacity-100'>
          <span className='invisible max-w-0 text-xs opacity-0 transition-all delay-100 duration-200 group-hover/link:visible group-hover/link:max-w-[55px] group-hover/link:opacity-100'>
            {props.linkText}
          </span>
          <ArrowRightIcon className='h-4 w-4' />
        </Link>
      </button>

      <div
        className={clsx(
          'flex flex-col gap-1 transition-all duration-200',
          isExpanded ? 'visible opacity-100' : 'invisible opacity-0'
        )}
        style={{
          maxHeight: isExpanded ? `${props.items.length * 36 + (props.items.length - 1) * 4}px` : '0px'
        }}>
        {props.items
          .map((item) => (
              <Item
                key={item.link}
                imgSrc={item.imgSrc}
                title={item.title}
                link={item.link}
              />
            ))
          }
      </div>
    </div>
  )
}
SidebarItemGroup.Item = Item;

export default SidebarItemGroup