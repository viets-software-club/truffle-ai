import ProjectsTable from '@/components/side-effects/ProjectsTable'
import Page from '@/components/side-effects/Page'
import withAuth from '@/components/side-effects/withAuth'

const Bookmarks = () => (
  <Page>
    <ProjectsTable />
  </Page>
)
export default withAuth(Bookmarks)
