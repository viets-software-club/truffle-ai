import {
  FiBookOpen as BookOpen,
  FiCompass as Compass,
  FiBookmark as Bookmark
} from 'react-icons/fi'
import { withRouter, NextRouter } from 'next/router'
import Sidebar from '@/pureComponents/Sidebar'

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
      <Sidebar.Section.Item Icon={Compass} text="All projects" onClick={nullFunc} showIcon />
      <Sidebar.Section.Item Icon={Bookmark} text="Saved projects" onClick={nullFunc} showIcon />
    </Sidebar.Section>
    <Sidebar.Section title="Saved searches">
      <Sidebar.Section.Item
        Icon={Compass}
        text="JavaScript Frameworks"
        onClick={nullFunc}
        showIcon={false}
      />
      <Sidebar.Section.Item
        Icon={Bookmark}
        text="Static Site Generators"
        onClick={nullFunc}
        showIcon={false}
      />
      <Sidebar.Section.Item
        key="menu-3"
        Icon={Bookmark}
        text="Infrastructure"
        onClick={nullFunc}
        showIcon={false}
      />
      <Sidebar.Section.Item
        key="menu-4"
        Icon={Bookmark}
        text="Dev Tools"
        onClick={nullFunc}
        showIcon={false}
      />
      <Sidebar.Section.Item
        key="menu-5"
        Icon={Bookmark}
        text="Machine Learning"
        onClick={nullFunc}
        showIcon={false}
      />
    </Sidebar.Section>
  </Sidebar>
)

export default withRouter(NavSidebar)
