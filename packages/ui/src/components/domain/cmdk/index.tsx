import { useState, useEffect } from 'react'
import { BiFolder } from 'react-icons/bi'
import { FiBookmark, FiCompass, FiLogOut, FiMail, FiSettings } from 'react-icons/fi'
import { useRouter } from 'next/navigation'
import { PlusIcon } from '@primer/octicons-react'
import { useUser } from '@supabase/auth-helpers-react'
import { Command } from 'cmdk'
import Modal from '@/components/shared/Modal'
import { useFilteredBookmarksQuery } from '@/graphql/generated/gql'
import Group from './Group'
import Item from './Item'
import Placeholder from './Placeholder'

const CommandMenu = () => {
  const [loading] = useState(false)
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [pages, setPages] = useState<string[]>([])
  const page = pages[pages.length - 1]

  const router = useRouter()

  const user = useUser()

  const [{ data: bookmarks, fetching: bookmarksFetching }] = useFilteredBookmarksQuery({
    variables: { userId: user?.id as string }
  })

  const uniqueCategories = Array.from(
    new Set(bookmarks?.bookmarkCollection?.edges.map(edge => edge.node.category))
  )

  const close = () => {
    setOpen(false)
    setTimeout(() => {
      setSearch('')
      setPages([])
    }, 200)
  }

  const navigate = (href: string) => {
    router.push(href)
    close()
  }

  const nextStep = (nextPage: string) => {
    setPages([...pages, nextPage])
    setSearch('')
  }

  const prevStep = () => {
    setPages(prev => prev.slice(0, -1))
    setSearch('')
  }

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(prev => !prev)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const placeholder = () => {
    if (loading) return 'Loading…'
    if (bookmarksFetching) return 'Loading bookmarks…'
    if (page === 'logout') return 'Are you sure?'
    if (page === 'compare') return 'Select a category'
    return 'Type a command or search…'
  }

  const noResultsMessage = () => {
    if (page === 'add' || page === 'mail') return 'Coming soon 👀'
    return 'No results found.'
  }

  return (
    <Modal isOpen={open} onClose={() => setOpen(false)} unstyled>
      <Command
        onKeyDown={e => {
          // Escape goes to previous page
          // Backspace goes to previous page when search is empty
          // Otherwise, both close the menu
          if (e.key === 'Escape' || (e.key === 'Backspace' && !search)) {
            e.preventDefault()
            if (page) prevStep()
            else close()
          }
        }}
        className='-mt-10 hidden w-[650px] overflow-hidden rounded-md border border-white/5 bg-white/5 shadow-lg backdrop-blur-xl lg:block'>
        <Command.Input
          value={search}
          onValueChange={setSearch}
          className='w-full appearance-none bg-transparent px-6 py-5 text-lg font-light text-white/75 outline-none placeholder:text-white/50'
          placeholder={placeholder()}
        />

        <div className='border-b-[0.5px] border-white/10' />

        <Command.List className='h-[min(350px,calc(var(--cmdk-list-height)+20px))] max-h-[450px] overflow-auto overscroll-contain py-2 transition-all duration-200 ease-in-out scrollbar-hide'>
          <Command.Empty>
            <Placeholder>{noResultsMessage()}</Placeholder>
          </Command.Empty>

          {!page && (
            <>
              <Group heading='Projects'>
                <Item Icon={FiCompass} text='Trending' onSelect={() => navigate('/')} />
                <Item Icon={FiBookmark} text='Bookmarks' onSelect={() => navigate('/bookmarks')} />
                <Item Icon={BiFolder} text='Categories' onSelect={() => nextStep('compare')} />
              </Group>

              <Group heading='Actions'>
                <Item Icon={PlusIcon} text='Add Project' onSelect={() => nextStep('add')} />
                <Item Icon={FiMail} text='Send Mail' onSelect={() => nextStep('mail')} />
              </Group>

              <Group heading='Profile'>
                <Item Icon={FiSettings} text='Settings' onSelect={() => navigate('/settings')} />
                <Item Icon={FiLogOut} text='Logout' onSelect={() => nextStep('logout')} />
              </Group>
            </>
          )}

          {page === 'logout' && (
            <Group heading='Confirm'>
              <Item text='Yes' onSelect={() => navigate('/logout')} />
              <Item text='No' onSelect={prevStep} />
            </Group>
          )}

          {page === 'compare' && (
            <Group heading='Categories'>
              {uniqueCategories.map(category => (
                <Item
                  key={category}
                  text={category as string}
                  onSelect={() => navigate(`/compare/${encodeURIComponent(category as string)}`)}
                />
              ))}
            </Group>
          )}
        </Command.List>
      </Command>
    </Modal>
  )
}

export default CommandMenu
