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

const Item = ({ Icon, imageSrc, text, path, secondaryItem, highlighted }: ItemProps) => (
  <div
    className={clsx(
      'relative flex flex-col justify-between rounded-md transition-colors duration-75 hover:bg-white/5',
      highlighted && 'bg-white/10'
    )}>
    <Link href={path}>
      <div className='inline-flex w-full items-center justify-between py-2.5 pl-5'>
        <div
          className={clsx('flex flex-row items-center justify-center gap-[5px] overflow-hidden', {
            'ml-2': secondaryItem
          })}>
          {Icon ? (
            <Icon className='h-[14px] w-[14px] text-white/50' />
          ) : (
            <div className='relative ml-2 h-4 w-4 overflow-hidden rounded-md'>
              <Image src={imageSrc as string} alt='logo' fill sizes='24px' />
            </div>
          )}

          <span
            className='mt-[1px] h-[13px] w-[110px] overflow-hidden text-left text-xs not-italic leading-3 text-white/90'
            style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {text}
          </span>
        </div>
      </div>
    </Link>
  </div>
)

export default Item
