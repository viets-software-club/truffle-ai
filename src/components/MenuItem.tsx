import { ComponentType } from 'react'

type MenuItemProps = {
  Icon: ComponentType<{ className?: string }>
  text: string
  onClick: () => void
  showIcon?: boolean
}

const MenuItem = ({ Icon, text, onClick, showIcon }: MenuItemProps) => (
  <div className="flex flex-col justify-between">
    <button
      type="button"
      onClick={onClick}
      className="inline-flex px-7 py-2.5 transition-colors duration-100 hover:bg-gray-850"
    >
      <div className="flex flex-row items-center justify-center gap-[5px]">
        {showIcon && <Icon className="h-[14px] w-[14px] text-gray-500" />}
        <span className="text-xs not-italic leading-3 text-gray-100">{text}</span>
      </div>
    </button>
  </div>
)

MenuItem.defaultProps = {
  showIcon: true
}

export default MenuItem
