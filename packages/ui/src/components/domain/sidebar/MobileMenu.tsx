import { useState } from 'react'
import { FiCompass, FiBookmark, FiSettings, FiFolder } from 'react-icons/fi'
import { LuLogOut } from 'react-icons/lu'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import Logo from '@/assets/logo.svg'
import { Bookmark } from '@/graphql/generated/gql'
import MenuIcon from './MenuIcon'
import MobileNavLink from './MobileNavLink'

type MobileMenuProps = {
  title: string
  bookmarks: Bookmark[]
}

const MobileMenu = ({ title, bookmarks }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Navbar */}
      <nav className='fixed inset-x-0 top-0 z-40 flex h-[60px] w-full items-center justify-between border-b border-white/5 bg-gray-900 px-4 text-white/90 lg:hidden'>
        <Link href='/' className='flex items-center gap-2'>
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <Image src={Logo} alt='Logo' className='h-6 w-6' />
          <span className='text-lg font-medium'>{title}</span>
        </Link>

        {/* Menu icon */}
        <button type='button' onClick={() => setIsOpen(prev => !prev)}>
          <MenuIcon isActive={isOpen} />
        </button>
      </nav>

      {/* Mobile menu */}
      <aside
        className={clsx(
          'no-scrollbar fixed top-0 z-30 flex h-screen w-screen flex-col items-stretch gap-4 overflow-y-scroll bg-gray-900 px-5 py-16 transition-all duration-300 lg:hidden',
          {
            '-left-[100vw]': !isOpen,
            'left-0': isOpen
          }
        )}>
        <div className='flex flex-col border-b border-white/5 py-3'>
          <p className='mb-2 text-xs font-semibold text-white/50'>Navigation</p>
          <MobileNavLink Icon={FiCompass} path='/' text='Trending projects' />
          <MobileNavLink Icon={FiBookmark} path='/bookmarks' text='All bookmarks' />
          <MobileNavLink Icon={FiSettings} path='/settings' text='Settings' />
          <MobileNavLink Icon={LuLogOut} path='/logout' text='Log out' />
        </div>

        {bookmarks
          // Get a list of unique categories to display as folders
          .map(({ category }) => category)
          .filter((value, index, array) => array.indexOf(value) === index)
          .map(category => (
            <div key={category} className='flex flex-col gap-2 border-b border-white/5 py-3'>
              <Link
                href={`/compare/${category as string}`}
                className='mb-2 flex items-center gap-1 text-xs font-semibold text-white/50'>
                <FiFolder />
                {category}
              </Link>

              {/* Display all projects in a category under their corresponding folder */}
              {bookmarks
                .filter(bookmark => bookmark.category === category)
                .map(({ project }) => {
                  if (!project) return null
                  const { name, organization, associatedPerson } = project

                  return (
                    <Link
                      key={project.id as string}
                      className='flex items-center gap-2 rounded-md p-2 text-sm transition-colors duration-150 hover:bg-white/5'
                      href={`/details/${project.id as string}`}>
                      <Image
                        src={(organization?.avatarUrl || associatedPerson?.avatarUrl) as string}
                        alt={name ?? ''}
                        width={24}
                        height={24}
                        className='rounded-md'
                      />
                      {name}
                    </Link>
                  )
                })}
            </div>
          ))}
      </aside>
    </>
  )
}

export default MobileMenu
