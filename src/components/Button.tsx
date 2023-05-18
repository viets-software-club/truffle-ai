type ButtonProps = {
  variant:
    | 'normal'
    | 'highlighted'
    | 'noBordernoBG'
    | 'noBG'
    | 'onlyIcon'
    | 'onlyIconnoBordernoBG'
    | 'normalHighlighted'
  onClick: () => void
  text?: string
  Icon?: IconComponentType
  order?: 'ltr' | 'rtl'
  iconColor?: string
  textColor?: string
  fullWidth?: boolean
}

const baseClassNames = `flex items-center rounded-[5px] transition-colors duration-100 hover:bg-gray-700`

const variantToButtonVariantClassNames = new Map<ButtonProps['variant'], string>([
  ['normal', 'bg-gray-850 border border-gray-800 px-4 py-2'],
  ['normalHighlighted', 'bg-gray-700 border border-gray-800 px-4 py-2'],
  ['noBG', 'border border-gray-800 px-4 py-2'],
  ['noBordernoBG', ' px-4 py-2'],
  ['highlighted', 'bg-indigo-500 px-4 py-2'],
  ['onlyIcon', 'bg-gray-850 border border-gray-800 px-1.5 py-1.5'],
  ['onlyIconnoBordernoBG', '']
])

const Button = ({
  variant,
  onClick,
  text,
  Icon,
  order,
  iconColor = 'text-gray-500',
  textColor = 'text-gray-300',
  fullWidth
}: ButtonProps) => {
  const classNames = `${baseClassNames} ${variantToButtonVariantClassNames.get(variant) ?? ''} ${
    fullWidth ? 'w-full' : ''
  }`
  const textNode = text && (
    <span key="1" className={`text-14 ${textColor}`}>
      {text}
    </span>
  )
  const iconNode =
    Icon &&
    (variant === 'onlyIcon' || variant === 'onlyIconnoBordernoBG' ? (
      <Icon key="2" className={`h-4 w-4 ${iconColor}`} />
    ) : (
      <Icon key="2" className={`${order === 'ltr' ? 'mr-2' : 'ml-2'} h-4 w-4 ${iconColor}`} />
    ))
  const contentNode = order === 'ltr' ? [iconNode, textNode] : [textNode, iconNode]

  return (
    <button type="button" onClick={onClick} className={classNames}>
      {contentNode}
    </button>
  )
}

Button.defaultProps = {
  text: null,
  Icon: null,
  order: 'rtl',
  iconColor: 'text-gray-500',
  textColor: 'text-gray-300',
  fullWidth: false
}

export default Button
