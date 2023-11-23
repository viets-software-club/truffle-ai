import { PropsWithChildren } from 'react'
import CommandInterface from '@/components/domain/commandinterface'
import NavSidebar from '@/components/domain/sidebar/NavSidebar'

/**
 * Standard page wrapper with sidebar, command interface and main content
 */
const Page = ({ children }: PropsWithChildren) => (
  <div className='flex min-h-screen w-full pt-[60px] text-white/90 lg:pt-0'>
    <NavSidebar />
    <CommandInterface />
    <main className='w-full max-w-[100vw] text-white/90 lg:ml-56 lg:max-w-[calc(100vw-224px)]'>
      {children}
    </main>
  </div>
)

export default Page
