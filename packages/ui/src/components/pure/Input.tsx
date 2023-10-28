import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

const Input = (
  props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
) => {
  const { className } = props

  return (
    <input
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      className={twMerge(
        clsx(
          'min-w-[250px] rounded-md border border-gray-800/75 bg-gray-900/50 px-3 py-2 text-sm text-white focus:outline focus:outline-indigo-500',
          className
        )
      )}
    />
  )
}

export default Input
