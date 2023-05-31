import { useState } from 'react'
import { withRouter } from 'next/router'
import {
  FiBookOpen as BookOpen,
  FiCompass as Compass,
  FiBookmark as Bookmark
} from 'react-icons/fi'
import Sidebar from '@/components/pure/Sidebar'
import sidebarCategories from '@/data/sidebarMock'

const renderFooter = () => (
  <Sidebar.Section.Item
    id={0}
    Icon={BookOpen}
    text="Help & Support"
    path="docs"
    showIcon
    editable={false}
  />
)

const initialSections = [
  {
    title: 'Overview',
    items: [
      {
        id: 1,
        Icon: Compass,
        text: 'Trending projects',
        path: '/',
        showIcon: true,
        editable: false
      },
      {
        id: 2,
        Icon: Bookmark,
        text: 'All bookmarks',
        path: '/bookmarks',
        showIcon: true,
        editable: false
      }
    ]
  },
  {
    title: 'Categories',
    items: sidebarCategories
  }
]

/**
 * Main sidebar on the left
 */
const NavSidebar = () => {
  const [sections] = useState(initialSections)

  const handleSave = () => {
    // @TODO implement save
  }

  const handleDelete = () => {
    // @TODO implement delete
  }

  return (
    <Sidebar title="TruffleAI" footer={renderFooter()}>
      {sections.map((section) => (
        <Sidebar.Section key={section.title} title={section.title}>
          {section.items.map((item) => (
            <Sidebar.Section.Item
              key={item.id}
              id={item.id}
              Icon={item.Icon}
              text={item.text}
              onSave={handleSave}
              onDelete={handleDelete}
              path={item.path}
              showIcon={item.showIcon}
              // @TODO highlight current page in sidebar
              secondaryItem={item.secondaryItem}
              editable={item.editable}
            />
          ))}
        </Sidebar.Section>
      ))}
    </Sidebar>
  )
}

export default withRouter(NavSidebar)
