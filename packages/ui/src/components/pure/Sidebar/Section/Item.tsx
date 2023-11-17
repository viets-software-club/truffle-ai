import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

type ItemProps = {
  Icon?: IconComponentType
  imageSrc?: string
  text: string
  path: string
  secondaryItem?: boolean
  highlighted?: boolean
}

/**
 * Item for main sidebar (3 types: overview, category/ folder, project)
 */
const Item = ({ Icon, imageSrc, text, path, secondaryItem, highlighted }: ItemProps) => (
  <div
    className={clsx('relative flex flex-col justify-between rounded-md hover:bg-gray-800', {
      'bg-gray-700': highlighted
    })}>
    <Link href={path}>
      <div className='inline-flex w-full items-center justify-between py-2.5 pl-7'>
        <div
          className={clsx('flex flex-row items-center justify-center gap-[5px] overflow-hidden', {
            'ml-2': secondaryItem
          })}>
          {Icon ? (
            <Icon className='h-[14px] w-[14px] text-gray-500' />
          ) : (
            <div className='relative ml-2 h-4 w-4 overflow-hidden rounded-md'>
              <Image src={imageSrc as string} alt='logo' fill sizes='24px' />
            </div>
          )}

          <span
            className='mt-[1px] h-[13px] w-[110px] overflow-hidden text-left text-xs not-italic leading-3 text-gray-100'
            style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {text}
          </span>
        </div>
      </div>
    </Link>
  </div>
)

Item.defaultProps = {
  Icon: null,
  imageSrc: null,
  secondaryItem: false,
  highlighted: false
}

export default Item
