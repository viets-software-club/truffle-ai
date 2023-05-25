import RepositoryTable from '@/components/pure/RepositoryTable'
import Page from '@/components/side-effects/Page'
import withAuth from '@/components/side-effects/withAuth'

const Bookmarks = () => (
  <Page>
    <RepositoryTable />
  </Page>
)
export default withAuth(Bookmarks)
