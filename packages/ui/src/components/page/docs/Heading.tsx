import { DetailedHTMLProps, FC, HTMLAttributes, createElement } from 'react'

type HeadingProps = {
  type: 'h1' | 'h2' | 'h3' | 'h4'
}

const headingClasses = (type: HeadingProps['type'], customClasses: string) => {
  switch (type) {
    case 'h1':
      return `text-24 font-semibold text-gray-300 ${customClasses}`
    case 'h2':
      return `text-20 font-semibold text-gray-300 pt-6 ${customClasses}`
    case 'h3':
      return `text-14 font-medium text-gray-300 ${customClasses}`
    default:
      return `text-14 font-normal ${customClasses}`
  }
}

const Heading: FC<
  HeadingProps & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = ({ type, className, children }) =>
  createElement(type, { className: headingClasses(type, className || '') }, children)

export default Heading
