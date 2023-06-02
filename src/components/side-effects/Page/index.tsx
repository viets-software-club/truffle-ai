import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import NavSidebar from '@/components/side-effects/NavSidebar'

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
        <NavSidebar />
      </div>

      <main className="ml-56 w-full text-gray-100">{children}</main>
    </div>
  </div>
)

export default Page
