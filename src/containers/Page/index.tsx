import NavSidebar from '@/containers/NavSidebar'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'

type PageProps = {
  children: ReactNode
}

const inter = Inter({ subsets: ['latin'] })
const Page = ({ children }: PageProps) => (
  <div className={`${inter.className}`}>
    <NavSidebar />
    <main>{children}</main>
  </div>
)
export default Page
