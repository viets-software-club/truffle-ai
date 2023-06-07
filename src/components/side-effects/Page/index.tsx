import { ReactNode, useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import NavSidebar from '@/components/side-effects/NavSidebar'
import CommandInterface from '@/components/side-effects/CommandInterface'

type PageProps = {
  children: ReactNode
}

const inter = Inter({ subsets: ['latin'] })

/**
 * Standard page wrapper with sidebar and main element
 */
const Page = ({ children }: PageProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault()
        setOpenModal(true)
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
        <div className="fixed flex-initial">
          <NavSidebar />
        </div>
        {openModal && <CommandInterface action={closeModel} />}
        <main className="ml-56 w-full text-gray-100">{children}</main>
      </div>
    </div>
  )
}

export default Page
