import { ReactNode } from 'react'
import GithubStatItem from './GithubStatItem'
import SocialMediaItem from './SocialMediaItem'
import FounderItem from './FounderItem'
import CompanyItem from './CompanyItem'
import LanguagesItem from './LanguagesItem'

type Props = {
  title: string
  children: ReactNode
}

const SidebarBox = ({ title, children }: Props) => (
  <div className="text-14 border-b border-solid border-gray-800 py-3 font-normal leading-4">
    <h3 className="text-12 px-7 py-2 font-medium uppercase text-gray-500">{title}</h3>
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
