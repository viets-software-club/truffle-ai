import { Inter } from 'next/font/google'
import RepositoryTable from '@/components/RepositoryTable'
import CommandInterface from '@/components/CommandInterface/CommandInterface'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  const [openModel, setOpenModel] = useState(false)
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault()
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
  const closeModel = () => {
    setOpenModel(false)
  }
  return (
    <>
      {openModel && <CommandInterface action={closeModel} />}
      <main className={`min-h-screen p-24 ${inter.className} bg-primary text-primary`}>
        <RepositoryTable />
      </main>
    </>
  )
}

export default Home
