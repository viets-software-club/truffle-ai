import { ReactNode } from 'react'
import CompanyItem from './CompanyItem'
import FounderItem from './FounderItem'
import GithubStatItem from './GithubStatItem'
import LanguagesItem from './LanguagesItem'
import SocialMediaItem from './SocialMediaItem'

type Props = {
  title: string
  children: ReactNode
}

const SidebarBox = ({ title, children }: Props) => (
  <div className='border-b border-solid border-gray-800 py-3 text-sm font-normal leading-4'>
    <h3 className='px-7 py-2 text-xs font-medium uppercase text-gray-500'>{title}</h3>
    {children}
  </div>
)

export default Object.assign(SidebarBox, {
  GithubStatItem,
  LanguagesItem,
  FounderItem,
  CompanyItem,
  SocialMediaItem
})
