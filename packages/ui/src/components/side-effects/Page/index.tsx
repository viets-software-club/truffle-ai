import { ReactNode } from 'react'
import NavSidebar from '@/components/side-effects/NavSidebar'
import CommandInterface from '@/components/side-effects/CommandInterface'

type PageProps = {
  children: ReactNode
}

/**
 * Standard page wrapper with sidebar, command interface and main content
 */
const Page = ({ children }: PageProps) => (
  <div className="min-h-screen w-full bg-gray-900 text-gray-100">
    <div className="flex">
      <NavSidebar />
      <CommandInterface />

      <main className="ml-56 w-full text-gray-100">{children}</main>
    </div>
  </div>
)

export default Page
