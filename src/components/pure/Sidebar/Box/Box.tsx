import { ReactNode } from 'react'
import GithubStatItem from './GithubStatItem'
import SocialMediaItem from './SocialMediaItem'
import FounderItem from './FounderItem'
import CompanyItem from './CompanyItem'

type Props = {
  title: string
  children: ReactNode
}

const SidebarBox = ({ title, children }: Props) => (
  <div className="border-t border-solid border-gray-800 py-3 text-14 font-normal leading-4">
    <h3 className="px-7 py-2 text-12 font-medium uppercase text-gray-500">{title}</h3>
    {children}
  </div>
)

export default Object.assign(SidebarBox, {
  GithubStatItem,
  FounderItem,
  CompanyItem,
  SocialMediaItem
})
