import { Inter } from 'next/font/google'
import RepositoryTable from '@/components/RepositoryTable'

const inter = Inter({ subsets: ['latin'] })

const Home = () => (
  <main className={`min-h-screen p-24 ${inter.className} bg-primary text-primary`}>
    <RepositoryTable />
  </main>
)
export default Home
