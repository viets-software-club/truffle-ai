// @TODO refactor component

import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant:
    | 'normal'
    | 'highlighted'
    | 'noBorderNoBG'
    | 'noBG'
    | 'onlyIcon'
    | 'onlyIconNoBorderNoBG'
    | 'normalHighlighted'
    | 'filter'
  text?: string
  Icon?: IconComponentType
  order?: 'ltr' | 'rtl'
  iconColor?: string
  textColor?: string
  fullWidth?: boolean
}

const baseClassNames =
  'flex items-center rounded-[5px] transition-all duration-200 hover:bg-opacity-80'

const variantToButtonVariantClassNames = new Map<ButtonProps['variant'], string>([
  ['normal', 'bg-gray-850 border border-gray-800 px-2 py-1.5'],
  ['normalHighlighted', 'bg-gray-700 border border-gray-800 px-2 py-1.5'],
  ['noBG', 'border border-gray-800 px-2 py-1.5'],
  ['noBorderNoBG', 'px-2 py-1.5'],
  ['highlighted', 'border border-indigo-500 bg-indigo-500 px-2 py-1.5'],
  ['onlyIcon', 'bg-gray-850 border border-gray-800 px-1.5 py-1.5'],
  ['onlyIconNoBorderNoBG', ''],
  ['filter', 'border border-dashed border-gray-800 px-2 py-1.5']
])

/**
 * Generic button with several variants
 *
 * @param {ButtonProps} props - The properties for this component.
 * @returns {React.Element} The button element.
 */
const Button = ({
  variant,
  onClick,
  text,
  Icon,
  order,
  iconColor = 'text-gray-500',
  textColor = 'text-gray-300',
  fullWidth,
  name,
  value,
  className = '',
  disabled,
  type = 'button'
}: ButtonProps) => {
  // Determine the class names to apply to the button based on the variant and whether it is full width

  const classNames = `${baseClassNames} ${variantToButtonVariantClassNames.get(variant) ?? ''} ${
    fullWidth ? 'w-full' : ''
  }  ${className}`

  // create a text node if text is provided
  const textNode = text && (
    <span key="1" className={`text-14 leading-none ${textColor}`}>
      {text}
    </span>
  )

  // Create an icon node if an Icon is provided
  const iconNode =
    Icon &&
    (variant === 'onlyIcon' || variant === 'onlyIconNoBorderNoBG' ? (
      <Icon key="2" className={iconColor} />
    ) : (
      <Icon key="2" className={`${order === 'ltr' ? 'mr-1.5' : 'ml-1.5'} ${iconColor}`} />
    ))
  const contentNode = order === 'ltr' ? [iconNode, textNode] : [textNode, iconNode]
  return (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      onClick={onClick}
      name={name}
      value={value}
      className={classNames}
      disabled={disabled}
    >
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
