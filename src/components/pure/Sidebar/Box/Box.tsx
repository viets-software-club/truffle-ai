import { ReactNode } from 'react'
import GithubStatItem from './GithubStatItem'
import SocialMediaItem from './SocialMediaItem'
import FounderItem from './FounderItem'
import CompanyItem from './CompanyItem'
import css from './Box.module.sass'

type Props = {
  title: string
  children: ReactNode
}

const SidebarBox = ({ title, children }: Props) => (
  <div className={css.sidebarBox}>
    <h1 className={css.sidebarBox__title}>{title}</h1>
    {children}
  </div>
)

export default Object.assign(SidebarBox, {
  GithubStatItem,
  FounderItem,
  CompanyItem,
  SocialMediaItem
})
