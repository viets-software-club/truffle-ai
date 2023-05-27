import {
  FiBookOpen as BookOpen,
  FiCompass as Compass,
  FiBookmark as Bookmark,
  FiFolder as Folder
} from 'react-icons/fi'
import { RxDot as Dot } from 'react-icons/rx'
import { withRouter, NextRouter } from 'next/router'
import Sidebar from '@/components/pure/Sidebar'

// @TODO replace nullFunc with getRedirectFunc
const nullFunc = () => null
const getRedirectFunction = (router: NextRouter, path: string) => () => {
  void router.push(`/${path}`)
}

const renderFooter = (router: NextRouter) => (
  <Sidebar.Section.Item
    Icon={BookOpen}
    text="Help & Support"
    onClick={getRedirectFunction(router, '/documentation')}
    showIcon
  />
)

const NavSidebar = ({ router }: { router: NextRouter }) => (
  <Sidebar title="TruffleAI" footer={renderFooter(router)}>
    <Sidebar.Section title="Overview">
      <Sidebar.Section.Item Icon={Compass} text="Trending projects" onClick={nullFunc} showIcon />
      <Sidebar.Section.Item Icon={Bookmark} text="All bookmarks" onClick={nullFunc} showIcon />
    </Sidebar.Section>
    <Sidebar.Section title="CATEGORIES">
      <Sidebar.Section.Item
        Icon={Folder}
        text="Infrastructure"
        onClick={nullFunc}
        showIcon
        highlighted
      />
      <Sidebar.Section.Item Icon={Folder} text="Dev Tools" onClick={nullFunc} showIcon />
      <Sidebar.Section.Item
        key="menu-3"
        Icon={Dot}
        text="vercel / next.js"
        onClick={nullFunc}
        showIcon
        secondaryItem
      />
      <Sidebar.Section.Item
        key="menu-4"
        Icon={Dot}
        text="microsfot / playwright"
        onClick={nullFunc}
        showIcon
        secondaryItem
      />
      <Sidebar.Section.Item
        key="menu-5"
        Icon={Folder}
        text="Machine Learning"
        onClick={nullFunc}
        showIcon
      />
      <Sidebar.Section.Item
        key="menu-5"
        Icon={Folder}
        text="Artificial Intelligence"
        onClick={nullFunc}
        showIcon
      />
    </Sidebar.Section>
  </Sidebar>
)

export default withRouter(NavSidebar)
