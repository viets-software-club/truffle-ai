import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const Textarea = ({
  className,
  ...props
}: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>) => (
  <textarea
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    className={twMerge(
      'h-96 w-full min-w-[250px] rounded-md border border-white/5 bg-white/5 px-3 py-2.5 text-sm text-white outline-none backdrop-blur-xl transition-all duration-75 placeholder:text-white/40 focus:ring-2 focus:ring-indigo-500',
      className
    )}
  />
)

export default Textarea
