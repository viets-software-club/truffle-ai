import { FC, DetailedHTMLProps, HTMLAttributes } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

const Paragraph: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
> = ({ children, className }) => (
  <p className={twMerge(clsx('text-sm leading-relaxed text-gray-100/80', className))}>{children}</p>
)

export default Paragraph
