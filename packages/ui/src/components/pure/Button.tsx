import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?:
    | 'default'
    | 'highlighted'
    | 'noBorderNoBG'
    | 'noBG'
    | 'normalHighlighted'
    | 'filter'
    | 'red'
}

const baseClassNames =
  'flex min-h-[30px] items-center gap-1.5 rounded-md text-sm leading-none outline-none transition-all duration-200 hover:bg-opacity-80'

const variantToButtonVariantClassNames = new Map<ButtonProps['variant'], string>([
  ['default', 'bg-gray-850 border border-gray-800 px-2 py-1.5 [&_svg]:text-gray-500'],
  ['normalHighlighted', 'bg-gray-700 border border-gray-800 px-2 py-1.5'],
  ['noBG', 'border border-gray-800 px-2 py-1.5'],
  ['noBorderNoBG', 'px-2 py-1.5'],
  ['highlighted', 'border border-indigo-500 bg-indigo-500 px-2 py-1.5'],
  ['filter', 'border border-dashed border-gray-800 px-2 py-1.5'],
  ['red', 'bg-red-500 px-2 py-1.5']
])

const Button = ({
  variant = 'default',
  className,
  type = 'button',
  children,
  ...props
}: ButtonProps) => {
  const classNames = twMerge(
    clsx(baseClassNames, variantToButtonVariantClassNames.get(variant), className)
  )

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button {...props} type={type === 'button' ? 'button' : 'submit'} className={classNames}>
      {children}
    </button>
  )
}

export default Button
