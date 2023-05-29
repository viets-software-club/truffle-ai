import Page from '@/components/side-effects/Page'
import withAuth from '@/components/side-effects/withAuth'

const Docs = () => (
  <Page>
    <div className="p-7 ">Documentation</div>
  </Page>
)
export default withAuth(Docs)
