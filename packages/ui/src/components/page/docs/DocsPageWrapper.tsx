import { FC } from 'react'
import { useRouter } from 'next/router'
import { FiChevronLeft } from 'react-icons/fi'

import Heading from '@/components/page/docs/Heading'
import Page from '@/components/side-effects/Page'

type DocsPageWrapperProps = {
  children: React.ReactNode
}

const DocsPageWrapper: FC<DocsPageWrapperProps> = ({ children }) => {
  const router = useRouter()

  // eslint-disable-next-line no-void
  const handleBack = () => void router.push('/docs')

  return (
    <Page>
      <div className="fixed z-10 flex h-[60px] w-full items-center gap-4 border-b border-solid border-gray-800 bg-gray-900 px-3 pl-7 text-gray-500">
        <button type="button" onClick={handleBack}>
          <FiChevronLeft key="2" className="h-5 w-5 text-gray-500" />
        </button>

        <Heading type="h2" className="!pt-0">
          Documentation
        </Heading>
      </div>

      <div className="-ml-56">
        <div className="mx-auto flex max-w-[800px] flex-col gap-4 py-24">{children}</div>
      </div>
    </Page>
  )
}

export default DocsPageWrapper
