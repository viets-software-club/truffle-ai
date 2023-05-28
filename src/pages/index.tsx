import Page from '@/components/side-effects/Page'
import withAuth from '@/components/side-effects/withAuth'
import RepositoryTable from '@/components/pure/RepositoryTable'

/**
 * Overview page with trending projects
 */
const Home = () => (
  <Page>
    <RepositoryTable />
  </Page>
)

export default withAuth(Home)
