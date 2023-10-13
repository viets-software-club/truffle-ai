import Card from '@/components/page/docs/Card'
import Heading from '@/components/page/docs/Heading'
import Page from '@/components/side-effects/Page'
import withAuth from '@/components/side-effects/withAuth'

const Docs = () => (
  <Page>
    <div className="fixed z-10 flex h-[60px] w-full items-center gap-4 border-b border-solid border-gray-800 bg-gray-900 px-3 pl-7 text-gray-500">
      <Heading type="h2" className="!pt-0">
        Documentation
      </Heading>
    </div>

    <main className="mx-auto grid max-w-[1100px] grid-cols-1 gap-4 px-10 py-24 md:grid-cols-2 lg:grid-cols-3">
      <Card title="Login" description="Find out how to use the login page." link="/docs/login" />
      <Card title="Sidebar" description="Find out how to use the sidebar." link="/docs/sidebar" />
      <Card
        title="Trending projects"
        description="Find out how to use the trending page."
        link="/docs/trending"
      />
      <Card
        title="Bookmarks"
        description="Find out how to use the bookmarks page."
        link="/docs/bookmarks"
      />
      <Card
        title="Project details"
        description="Find out how to use the project details page."
        link="/docs/details"
      />
      <Card
        title="Compare projects"
        description="Find out how to use the compare page."
        link="/docs/compare"
      />
      <Card
        title="Command interface"
        description="Find out how to use the command interface."
        link="/docs/commandinterface"
      />
      <Card
        title="Settings"
        description="Find out how to use the settings page."
        link="/docs/settings"
      />
    </main>
  </Page>
)

export default withAuth(Docs)
