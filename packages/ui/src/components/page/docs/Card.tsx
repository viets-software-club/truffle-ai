import { FC } from 'react'
import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi'
import Heading from './Heading'
import Paragraph from './Paragraph'

type DocsCardProps = {
  title: string
  description: string
  link: string
}

const DocsCard: FC<DocsCardProps> = ({ title, description, link }) => (
  <Link
    href={link}
    className="flex flex-col items-start gap-3 rounded-md border border-gray-800/50 bg-gray-800/30 p-5 shadow-md transition-all duration-200 hover:bg-gray-800/60"
  >
    <Heading type="h3">{title}</Heading>
    <Paragraph className="text-gray-500">{description}</Paragraph>
    <p className="mt-auto flex items-center gap-1 text-xs text-gray-300">
      Learn more <FiChevronRight className="mb-[-2px] text-sm font-medium text-gray-500" />
    </p>
  </Link>
)

export default DocsCard
