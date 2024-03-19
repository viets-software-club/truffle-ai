import { PropsWithChildren } from 'react'
import NavSidebar from '@/components/domain/sidebar/NavSidebar'
import CommandMenu from '../domain/cmdk'
import AddProject from './AddProject'
import withAuth from './hoc/withAuth'

/**
 * Standard page wrapper with sidebar, command interface and main content
 */
const Page = ({ children }: PropsWithChildren) => (
  <div className='flex min-h-screen w-full pt-[60px] text-white/90 lg:pt-0'>
    <NavSidebar />
    <CommandMenu />
    {/* <AddProject /> */}
    <main className='w-full text-white/90 lg:ml-56 lg:max-w-[calc(100%-224px)]'>{children}</main>
  </div>
)

export default withAuth(Page)
