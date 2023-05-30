/* eslint-disable no-alert */
import { useState } from 'react'
import {
  FiBookOpen as BookOpen,
  FiCompass as Compass,
  FiBookmark as Bookmark,
  FiFolder as Folder
} from 'react-icons/fi'
import { RxDotFilled as Dot } from 'react-icons/rx'
import { withRouter, NextRouter } from 'next/router'
import Sidebar from '@/components/pure/Sidebar'

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
    items: [
      {
        id: 3,
        path: 'compare',
        params: '/infrastructure',
        Icon: Folder,
        text: 'Infrastructure',
        showIcon: true,
        highlighted: true,
        editable: true
      },
      {
        id: 4,
        path: '/compare',
        params: 'dev-tools',
        Icon: Folder,
        text: 'Dev Tools',
        showIcon: true,
        editable: true
      },
      {
        id: 5,
        path: '/details',
        params: 'vercel/next.js',
        text: 'vercel/next.js',
        Icon: Dot,
        showIcon: true,
        secondaryItem: true,
        editable: true
      },
      {
        id: 6,
        path: '/details',
        params: 'microsoft/playwright',
        Icon: Dot,
        text: 'microsoft/playwright',
        showIcon: true,
        secondaryItem: true,
        editable: true
      },
      {
        id: 7,
        path: '/compare',
        params: 'machine-learning',
        Icon: Folder,
        text: 'Machine Learning',
        showIcon: true,
        editable: true
      },
      {
        id: 8,
        path: '/compare',
        params: 'artificial-intelligence',
        Icon: Folder,
        text: 'Artificial Intelligence',
        showIcon: true,
        editable: true
      }
    ]
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
