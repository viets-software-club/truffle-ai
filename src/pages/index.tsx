import { Inter } from 'next/font/google'
import RepositoryTable from '@/components/RepositoryTable'
import Spotlight from '@/components/Spotlight/spotlight'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  const [openModel, setOpenModel] = useState(false)
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.ctrlKey && event.key === 'l') {
        setOpenModel(true)
      } else if (event.key === 'Escape') {
        setOpenModel(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <main className={`min-h-screen p-24 ${inter.className} bg-primary text-primary`}>
      <RepositoryTable />
      {openModel && <Spotlight />}
    </main>
  )
}

export default Home
