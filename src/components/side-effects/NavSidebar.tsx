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

const getRedirectFunction = (router: NextRouter, path: string) => () => {
  void router.push(`/${path}`)
}
const nullFunc = () => null

const goTo = (router: NextRouter, path: string) => () => {
  getRedirectFunction(router, path)()
}

const renderFooter = (router: NextRouter) => (
  <Sidebar.Section.Item
    id={0}
    Icon={BookOpen}
    text="Help & Support"
    onClick={getRedirectFunction(router, '/docs')}
    showIcon
    editable={false}
  />
)

const NavSidebar = ({ router }: { router: NextRouter }) => {
  const initialSections = [
    {
      title: 'Overview',
      items: [
        {
          id: 1,
          Icon: Compass,
          text: 'Trending projects',
          onClick: goTo(router, ''),
          showIcon: true,
          editable: false
        },
        {
          id: 2,
          Icon: Bookmark,
          text: 'All bookmarks',
          onClick: goTo(router, 'bookmarks'),
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
          Icon: Folder,
          text: 'Infrastructure',
          onClick: goTo(router, 'compare'),
          showIcon: true,
          highlighted: true,
          editable: true
        },
        {
          id: 4,
          Icon: Folder,
          text: 'Dev Tools',
          onClick: nullFunc,
          showIcon: true,
          editable: true
        },
        {
          id: 5,
          Icon: Dot,
          text: 'vercel / next.js',
          onClick: goTo(router, 'details'),
          showIcon: true,
          secondaryItem: true,
          editable: true
        },
        {
          id: 6,
          Icon: Dot,
          text: 'microsoft / playwright',
          onClick: goTo(router, 'details'),
          showIcon: true,
          secondaryItem: true,
          editable: true
        },
        {
          id: 7,
          Icon: Folder,
          text: 'Machine Learning',
          onClick: goTo(router, 'compare'),
          showIcon: true,
          editable: true
        },
        {
          id: 8,
          Icon: Folder,
          text: 'Artificial Intelligence',
          onClick: goTo(router, 'compare'),
          showIcon: true,
          editable: true
        }
      ]
    }
  ]
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
    <Sidebar title="TruffleAI" footer={renderFooter(router)}>
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
              onClick={item.onClick}
              showIcon={item.showIcon}
              highlighted={item.highlighted}
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
