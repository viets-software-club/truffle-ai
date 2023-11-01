import { PropsWithChildren } from 'react'
import CommandInterface from '@/components/domain/commandinterface'
import NavSidebar from '@/components/domain/sidebar/NavSidebar'

/**
 * Standard page wrapper with sidebar, command interface and main content
 */
const Page = ({ children }: PropsWithChildren) => (
  <div className='min-h-screen w-full bg-gray-900 text-gray-100'>
    <div className='flex'>
      <NavSidebar />
      <CommandInterface />
      <main className='ml-56 w-full text-gray-100'>{children}</main>
    </div>
  </div>
)

export default Page
