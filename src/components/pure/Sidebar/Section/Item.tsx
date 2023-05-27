type ItemProps = {
  Icon: IconComponentType
  text: string
  onClick: () => void
  showIcon?: boolean
  secondaryItem?: boolean
  highlighted?: boolean
}

const Item = ({ Icon, text, onClick, showIcon, secondaryItem, highlighted }: ItemProps) => (
  <div className={`flex flex-col justify-between ${highlighted ? 'bg-gray-700' : ''} `}>
    <button
      type="button"
      onClick={onClick}
      className="inline-flex px-7 py-2.5 transition-colors duration-100 hover:bg-gray-850"
    >
      <div
        className={`flex flex-row items-center justify-center gap-[5px] 
        ${secondaryItem ? 'ml-2' : ''}`}
      >
        {showIcon && <Icon className="h-[14px] w-[14px] text-gray-500" />}
        <span className="text-xs not-italic leading-3 text-gray-100">{text}</span>
      </div>
    </button>
  </div>
)

Item.defaultProps = {
  showIcon: true,
  secondaryItem: false,
  highlighted: false
}

export default Item
