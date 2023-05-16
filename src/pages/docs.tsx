import { Inter } from 'next/font/google'

import LeftSidebar from '@/components/LeftSidebar'

const inter = Inter({ subsets: ['latin'] })

const Docs = () => (
  <main className={`min-h-screen p-24 ${inter.className} bg-gray-900 text-gray-100`}>
    <div className="flex flex-col">
      <LeftSidebar />
      <div className="ml-56 flex flex-col text-gray-100">Documentation</div>
    </div>
  </main>
)
export default Docs
