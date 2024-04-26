import clsx from 'clsx'

interface MenuIconProps {
  isActive: boolean
}

const MenuIcon = ({ isActive }: MenuIconProps) => (
  <div className='flex h-6 w-6 flex-col items-center justify-center gap-2 transition-opacity duration-75 hover:opacity-80'>
    <div
      className={clsx('h-[1.5px] w-[18px] rounded-full bg-white transition-transform', {
        'translate-y-[5px] rotate-45': isActive
      })}
    />
    <div
      className={clsx('h-[1.5px] w-[18px] rounded-full bg-white transition-transform', {
        '-translate-y-[5px] -rotate-45': isActive
      })}
    />
  </div>
)

export default MenuIcon
