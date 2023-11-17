import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  size?: 'default' | 'large'
}

const Input = (props: InputProps) => {
  const { className, size } = props

  return (
    <input
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      className={twMerge(
        clsx(
          'min-w-[250px] rounded-md border border-white/5 bg-white/5 text-white outline-none transition-all duration-75 placeholder:text-white/40 focus:ring-2 focus:ring-indigo-500',
          {
            'px-3 py-2.5 text-sm': size !== 'large',
            'p-3.5': size === 'large'
          },
          className
        )
      )}
    />
  )
}

export default Input
