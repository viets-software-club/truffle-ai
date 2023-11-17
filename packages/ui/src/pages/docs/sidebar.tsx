import Heading from '@/components/domain/docs/Heading'
import NormalBulletList from '@/components/domain/docs/NormalBulletedList'
import DocsPageWrapper from '@/components/domain/docs/PageWrapper'
import Paragraph from '@/components/domain/docs/Paragraph'

const SidebarDocs = () => (
  <DocsPageWrapper>
    <Heading type='h1'>Navbar</Heading>

    <Paragraph>
      The navigation sidebar of our tool is split into four main sections, providing easy access to
      various functionalities of the application.
    </Paragraph>

    <Heading type='h2'>Top Section</Heading>

    <Paragraph>
      Next to TruffleAI, the user will see the user button, which opens a modal with three options:
    </Paragraph>

    <NormalBulletList
      items={[
        'Settings: This takes the user to the user settings page, where they can adjust their account details and preferences.',
        'Documentation: This directs the user to our comprehensive user guide and documentation.',
        'Log out: This option allows the user to securely log out from the application.'
      ]}
    />

    <Heading type='h2'>Overview Section</Heading>

    <Paragraph>
      The Overview section gives the user a snapshot of their main areas of interest:
    </Paragraph>

    <NormalBulletList
      items={[
        'Trending Projects: This option takes the user to the Trending Projects page, where they can see all the currently trending projects.',
        'All Bookmarks: This directs the user to a page listing all the projects they have bookmarked.'
      ]}
    />

    <Heading type='h2'>Categories Section</Heading>

    <Paragraph>
      The Categories section allows the user to see all their bookmark categories as well as the
      projects they include at one glance.
    </Paragraph>

    <Heading type='h2'>Bottom Section</Heading>

    <Paragraph>The Bottom section provides access to additional support and settings.</Paragraph>
  </DocsPageWrapper>
)

export default SidebarDocs
