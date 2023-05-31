import { useState } from 'react'
import { withRouter, NextRouter } from 'next/router'
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
        params: '',
        showIcon: true,
        editable: false
      },
      {
        id: 2,
        Icon: Bookmark,
        text: 'All bookmarks',
        path: '/bookmarks',
        params: '',
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

const NavSidebar = ({ router }: { router: NextRouter }) => {
  const [sections] = useState(initialSections)

  const handleSave = (id: number, newText: string) => {
    // setSections(
    //   sections.map((section) => ({
    //     ...section,
    //     items: section.items.map((item) => (item.id === id ? { ...item, text: newText } : item))
    //   }))
    // )
    alert(`Saved ${newText}`)
  }

  const handleDelete = (id: number) => {
    // setSections(
    //   sections.map((section) => ({
    //     ...section,
    //     items: section.items.filter((item) => item.id !== id)
    //   }))
    // )
    alert(`Deleted ${id}`)
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
              params={item.params}
              showIcon={item.showIcon}
              highlighted={router.pathname === item.path && router.query.parameters === item.params}
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
