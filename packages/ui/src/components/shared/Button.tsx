import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: 'default' | 'highlighted' | 'unstyled' | 'error'
  size?: 'default' | 'large' | 'xl'
}

const baseClassNames =
  'flex min-h-[30px] items-center gap-1.5 rounded-md text-sm leading-none outline-none transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed'

const variantToButtonVariantClassNames = new Map<ButtonProps['variant'], string>([
  [
    'default',
    'bg-white/[2%] border border-white/5 [&_svg]:text-white/50 hover:bg-white/[7%] hover:border-white/[7%] disabled:hover:bg-white/[2%] disabled:hover:border-white/[2%]'
  ],
  [
    'highlighted',
    'border border-indigo-500 bg-indigo-500 hover:bg-opacity-90 text-white font-medium'
  ],
  ['error', 'border border-red-400 bg-red-400 text-white hover:bg-opacity-90'],
  ['unstyled', '']
])

const sizeToButtonSizeClassNames = new Map<ButtonProps['size'], string>([
  ['default', 'p-2'],
  ['large', 'px-3 py-2.5'],
  ['xl', 'p-3.5']
])

const Button = ({
  variant = 'default',
  size = 'default',
  className,
  type = 'button',
  children,
  ...props
}: ButtonProps) => {
  const classNames = twMerge(
    clsx(
      baseClassNames,
      variantToButtonVariantClassNames.get(variant),
      sizeToButtonSizeClassNames.get(size),
      className
    )
  )

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button {...props} type={type === 'button' ? 'button' : 'submit'} className={classNames}>
      {children}
    </button>
  )
}

export default Button
