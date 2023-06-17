import { ReactNode, useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import NavSidebar from '@/components/side-effects/NavSidebar'
import CommandInterface from '@/components/side-effects/CommandInterface'
import defaultList from '../CommandInterface/DefaultRecommendationList'

type PageProps = {
  children: ReactNode
}

const inter = Inter({ subsets: ['latin'] })

/**
 * Standard page wrapper with sidebar and main element
 */
const Page = ({ children }: PageProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.ctrlKey || event.metaKey) {
        if (event.key === 'k') {
          event.preventDefault()
          setOpenModal(true)
        }
        const shortcutsForPages = defaultList.filter(
          (item) => item.shortcutKey.toLocaleLowerCase() === event.key.toLocaleLowerCase()
        )
        if (shortcutsForPages.length > 0) {
          event.preventDefault()
          void router.push(shortcutsForPages[0].commandInterfaceOptions)
        }
      } else if (event.key === 'Escape') {
        setOpenModal(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  const closeModel = () => {
    setOpenModal(false)
  }
  return (
    <div className={`min-h-screen w-full ${inter.className} bg-gray-900 text-gray-100`}>
      <div className="flex">
        <NavSidebar />
        {openModal && <CommandInterface action={closeModel} />}
        <main className="ml-56 w-full text-gray-100">{children}</main>
      </div>
    </div>
  )
}

export default Page
