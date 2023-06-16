import { ReactNode } from 'react'
import NavSidebar from '@/components/side-effects/NavSidebar'

type PageProps = {
  children: ReactNode
}

/**
 * Standard page wrapper with sidebar and main element
 */
const Page = ({ children }: PageProps) => (
  <div className="min-h-screen w-full bg-gray-900 text-gray-100">
    <div className="flex">
      <NavSidebar />

      <main className="ml-56 w-full text-gray-100">{children}</main>
    </div>
  </div>
)

export default Page
