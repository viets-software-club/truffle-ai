import { useEffect, useState } from 'react'
import { FiCompass, FiBookmark, FiSettings, FiFolder } from 'react-icons/fi'
import { LuLogOut } from 'react-icons/lu'
import { withRouter } from 'next/router'
import { useUser } from '@supabase/auth-helpers-react'
import Sidebar from '@/components/domain/sidebar'
import Skeleton from '@/components/shared/Skeleton'
import { Bookmark, useFilteredBookmarksQuery } from '@/graphql/generated/gql'
import Item from './Item'
import MobileMenu from './MobileMenu'
import Section from './Section'

const renderFooter = () => (
  <>
    <Item Icon={FiSettings} text='Settings' path='/settings' />
    <Item Icon={LuLogOut} text='Log out' path='/logout' />
  </>
)

// @TODO loading state + error handling

const NavSidebar = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])

  const user = useUser()

  // Fetch data from Supabase using generated Urql hook
  const [{ data: urqlData, fetching }] = useFilteredBookmarksQuery({
    variables: { userId: user?.id as string }
  })

  // Only update table data when urql data changes
  useEffect(() => {
    if (urqlData) {
      setBookmarks(urqlData?.bookmarkCollection?.edges?.map(edge => edge.node) as Bookmark[])
    }
  }, [urqlData])

  // @TODO highlight current page in sidebar
  return (
    <>
      <Sidebar title='TruffleAI' footer={renderFooter()}>
        <Section title='Overview'>
          <Item Icon={FiCompass} text='Trending projects' path='/' />
          <Item Icon={FiBookmark} text='All bookmarks' path='/bookmarks' />
        </Section>

        <Section title='Categories'>
          {fetching ? (
            <div className='mt-2 flex flex-col gap-3'>
              <Skeleton className='ml-5 h-6 !w-40' />
              <Skeleton className='ml-5 h-6 !w-40' />
              <Skeleton className='ml-5 h-6 !w-40' />
              <Skeleton className='ml-5 h-6 !w-40' />
            </div>
          ) : (
            bookmarks
              // Get a list of unique categories to display as folders
              .map(({ category }) => category)
              .filter((value, index, array) => array.indexOf(value) === index)
              .map(category => (
                <div key={category}>
                  <Item
                    key={category}
                    Icon={FiFolder}
                    text={category as string}
                    path={`/compare/${encodeURIComponent(category as string)}`}
                  />
                  {/* Display all projects in a category under their corresponding folder */}
                  {bookmarks
                    .filter(bookmark => bookmark.category === category)
                    .map(({ project }) => {
                      if (!project) return null
                      const { name, organization, associatedPerson } = project

                      return (
                        <Item
                          key={project.id as string}
                          imageSrc={
                            (organization?.avatarUrl || associatedPerson?.avatarUrl) as string
                          }
                          text={name as string}
                          path={`/details/${project.id as string}`}
                          secondaryItem
                        />
                      )
                    })}
                </div>
              ))
          )}
        </Section>
      </Sidebar>

      <MobileMenu title='TruffleAI' bookmarks={bookmarks} />
    </>
  )
}

export default withRouter(NavSidebar)
