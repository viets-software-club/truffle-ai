import { FiCompass, FiBookmark, FiSettings } from 'react-icons/fi'
import { LuLogOut } from 'react-icons/lu'
import { withRouter } from 'next/router'
import Sidebar from '@/components/domain/sidebar'
import Skeleton from '@/components/shared/Skeleton'
import useBookmarks from '@/hooks/useBookmarks'
import Group from './Group'
import Item from './Item'
import MobileMenu from './MobileMenu'
import Section from './Section'

const NavSidebar = () => {
  const { bookmarks, categories, fetching, categoriesLength } = useBookmarks()

  return (
    <>
      <Sidebar title='TruffleAI'>
        <Section title='Overview'>
          <Item Icon={FiCompass} text='Trending projects' path='/' />
          <Item Icon={FiBookmark} text='All bookmarks' path='/bookmarks' />
        </Section>

        <Section title='Categories'>
          {fetching && !bookmarks ? (
            <div className='mt-2 flex flex-col gap-3'>
              {Array.from(Array(categoriesLength).keys()).map(c => (
                <Skeleton key={c} className='ml-5 h-6 !w-40' />
              ))}
            </div>
          ) : // Display categories as folders
          categories.length > 0 ? (
            categories
              .sort((a, b) => (a ?? '').localeCompare(b ?? ''))
              .map(category => (
                <div key={category}>
                  <Group
                    key={category}
                    text={category}
                    path={`/compare/${encodeURIComponent(category)}`}
                    bookmarks={bookmarks.filter(bookmark => bookmark.category === category)}
                  />
                </div>
              ))
          ) : (
            <p className='py-2.5 pl-5 text-xs text-white/90'>No bookmarks yet</p>
          )}
        </Section>

        <div className='border-t border-solid border-white/5 p-2'>
          <Item Icon={FiSettings} text='Settings' path='/settings' />
          <Item Icon={LuLogOut} text='Log out' path='/logout' />
        </div>
      </Sidebar>

      <MobileMenu title='TruffleAI' bookmarks={bookmarks} />
    </>
  )
}

export default withRouter(NavSidebar)
