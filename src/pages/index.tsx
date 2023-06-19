import Page from '@/components/side-effects/Page'
import withAuth from '@/components/side-effects/withAuth'
import ProjectsTable from '@/components/side-effects/ProjectsTable'

/**
 * Overview page with trending projects
 */
const Home = () => (
  <Page>
    <ProjectsTable />
  </Page>
)

export default withAuth(Home)
