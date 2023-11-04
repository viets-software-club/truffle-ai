import { PropsWithChildren } from 'react'
import CommandInterface from '@/components/domain/commandinterface'
import NavSidebar from '@/components/domain/sidebar/NavSidebar'

/**
 * Standard page wrapper with sidebar, command interface and main content
 */
const Page = ({ children }: PropsWithChildren) => (
  <div className='flex min-h-screen w-full text-white/90'>
    <NavSidebar />
    <CommandInterface />
    <main className='w-full text-white/90 lg:ml-56'>{children}</main>
  </div>
)

export default Page
