import { FC, DetailedHTMLProps, HTMLAttributes } from 'react'

interface ParagraphProps {
  size?: 'last' | 'sm' | 'md' | 'lg'
}

const Paragraph: FC<
  ParagraphProps & DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
> = ({ children, className, size }) => {
  let classNames = `text-14 font-light ${className || ''}`

  if (size === 'last') {
    classNames += 'pb-2'
  } else if (size === 'sm') {
    classNames += ' text-base'
  } else if (size === 'md') {
    classNames += ''
  }

  return <p className={classNames}>{children}</p>
}

Paragraph.defaultProps = {
  size: 'md'
}

export default Paragraph // Export the component as the default export
