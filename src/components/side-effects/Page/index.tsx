import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import LeftSidebar from '@/components/side-effects/LeftSidebar'

type PageProps = {
  children: ReactNode
}

const inter = Inter({ subsets: ['latin'] })

/**
 * Standard page wrapper with sidebar and main element
 */
const Page = ({ children }: PageProps) => (
  <div className={`min-h-screen w-full ${inter.className} bg-gray-900 text-gray-100`}>
    <div className="flex">
      <div className="fixed flex-initial">
        <LeftSidebar />
      </div>

      <main className="ml-64 w-full text-gray-100">{children}</main>
    </div>
  </div>
)

export default Page
