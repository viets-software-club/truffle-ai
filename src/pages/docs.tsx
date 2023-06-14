import Page from '@/components/side-effects/Page'
import withAuth from '@/components/side-effects/withAuth'

/**
 * Documentation page
 */
const Docs = () => (
  <Page>
    <div className="flex h-[60px] flex-row items-center justify-between border-b border-gray-800 px-6">
      <h1 className="text-20 font-medium">Documentation</h1>
    </div>
  </Page>
)

export default withAuth(Docs)
