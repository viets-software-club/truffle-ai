import { ComponentType, useMemo } from 'react'

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
  Icon?: ComponentType<{ className?: string }>
  switchOrder?: boolean
  iconColor?: string
  textColor?: string
  fullWidth?: boolean
}

const Button = ({
  variant,
  onClick,
  text,
  Icon,
  switchOrder,
  iconColor = 'text-gray-500',
  textColor = 'text-gray-300',
  fullWidth
}: ButtonProps) => {
  const contentLayout = useMemo(() => {
    if (Icon && !text) {
      return <Icon className={`h-4 w-4 ${iconColor}`} />
    }
    return switchOrder ? (
      <>
        {text && <span className={`text-14 ${textColor}`}>{text}</span>}
        {Icon && <Icon className={`ml-2 h-4 w-4 ${iconColor}`} />}
      </>
    ) : (
      <>
        {Icon && <Icon className={`mr-2 h-4 w-4 ${iconColor}`} />}
        {text && <span className={`text-14 ${textColor}`}>{text}</span>}
      </>
    )
  }, [Icon, text, switchOrder, iconColor, textColor])

  const variantToButtonStyle = new Map([
    ['normal', 'bg-gray-850 border border-gray-800 px-4 py-2'],
    ['normalHighlighted', 'bg-gray-700 border border-gray-800 px-4 py-2'],
    ['noBG', 'border border-gray-800 px-4 py-2'],
    ['noBordernoBG', ' px-4 py-2'],
    ['highlighted', 'bg-indigo-500 px-4 py-2'],
    ['onlyIcon', 'bg-gray-850 border border-gray-800 px-1.5 py-1.5'],
    ['onlyIconnoBordernoBG', '']
  ])

  let buttonStyle = variantToButtonStyle.get(variant) || ''
  buttonStyle += fullWidth ? ' w-full' : ''

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center rounded-[5px] transition-colors duration-100 hover:bg-gray-700 ${buttonStyle}`}
    >
      {contentLayout}
    </button>
  )
}

Button.defaultProps = {
  text: null,
  Icon: null,
  switchOrder: false,
  iconColor: 'text-gray-500',
  textColor: 'text-gray-300',
  fullWidth: false
}

export default Button
