import NavSidebar from '@/containers/NavSidebar'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'

type PageProps = {
  children: ReactNode
}

const inter = Inter({ subsets: ['latin'] })
const Page = ({ children }: PageProps) => (
  <div className={`min-h-screen p-24 ${inter.className} bg-gray-900 text-gray-100`}>
    <div className="flex flex-col">
      <NavSidebar />
      <main className="ml-56 flex flex-col text-gray-100">{children}</main>
    </div>
  </div>
)
export default Page
