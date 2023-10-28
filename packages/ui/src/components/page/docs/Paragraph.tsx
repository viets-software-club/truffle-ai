import { FC, DetailedHTMLProps, HTMLAttributes } from 'react'

const Paragraph: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
> = ({ children, className }) => (
  <p className={`${className || ''} text-sm leading-relaxed text-gray-100/80`}>{children}</p>
)

export default Paragraph
