import Page from '@/components/side-effects/Page'
import withAuth from '@/components/side-effects/withAuth'
import Paragraph from '@/components/pure/paragraph'
import NumberedBulletedList from '@/components/pure/numberedBulletedList'
import { HeaderOne, HeaderThree, HeaderTwo } from '@/components/pure/heading'

const Divider = () => <hr className="my-4 border-b-[0.5px] border-gray-500/10" />

const Docs = () => {
  const items = [
    {
      text: '@headlessui/react version 1.7.14',
      link1: 'https://headlessui.dev/',
      link2: 'https://github.com/tailwindlabs/headlessui/blob/main/LICENSE'
    },
    {
      text: '@primer/octicons-react version 19.1.0',
      link1: 'https://primer.style/octicons/',
      link2: 'https://github.com/primer/octicons/blob/main/LICENSE'
    },
    {
      text: '@supabase/auth-helpers-nextjs version 0.6.1 and @supabase/auth-helpers-react version 0.3.1',
      link1: 'https://supabase.io/',
      link2: 'https://github.com/supabase/supabase/blob/master/LICENSE'
    },
    {
      text: '@tanstack/react-table version 8.9.1',
      link1: 'https://tanstack.com/react-table',
      link2: 'https://github.com/tannerlinsley/react-table/blob/master/LICENSE'
    },
    {
      text: '@types/node version 18.16.3, @types/react version 18.2.0, and @types/react-dom version 18.2.1',
      link1: 'https://www.typescriptlang.org/',
      link2: 'https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/LICENSE'
    },
    {
      text: 'autoprefixer version 10.4.14',
      link1: 'https://autoprefixer.github.io/',
      link2: 'https://github.com/postcss/autoprefixer/blob/main/LICENSE'
    },
    {
      text: 'date-fns version 2.30.0',
      link1: 'https://date-fns.org/',
      link2: 'https://github.com/date-fns/date-fns/blob/main/LICENSE.md'
    },
    {
      text: 'graphql version 16.6.0 and graphql-tag version 2.12.6',
      link1: 'https://graphql.org/',
      link2: 'https://github.com/graphql/graphql-js/blob/main/LICENSE'
    },
    {
      text: 'next version 13.3.1 and next-urql version 5.0.1',
      link1: 'https://nextjs.org/',
      link2: ''
    },
    {
      text: 'postcss version 8.4.23',
      link1: 'https://postcss.org/',
      link2: ''
    },
    {
      text: 'react version 18.2.0, react-dom version 18.2.0, and react-is version 18.2.0',
      link1: 'https://reactjs.org/',
      link2: 'https://github.com/react-icons/react-icons/blob/master/LICENSE.md'
    },
    {
      text: 'react-icons version 4.8.0',
      link1: 'https://react-icons.github.io/react-icons/',
      link2: 'https://github.com/react-icons/react-icons/blob/master/LICENSE.md'
    },
    {
      text: 'recharts version 2.6.2',
      link1: 'http://recharts.org/',
      link2: 'https://github.com/recharts/recharts/blob/master/LICENSE'
    },
    {
      text: 'sass version 1.63.4',
      link1: 'https://github.com/sass/dart-sass',
      link2: ''
    },
    {
      text: 'tailwindcss version 3.3.2',
      link1: 'https://tailwindcss.com/',
      link2: 'https://www.npmjs.com/package/tailwindcss'
    },
    {
      text: 'urql version 4.0.4',
      link1: 'https://formidable.com/open-source/urql/docs/',
      link2: 'https://www.npmjs.com/package/urql'
    },
    {
      text: '@graphql-codegen/cli version 2.5.0-alpha-c9cbc7d69.0',
      link1: 'https://github.com/dotansimha/graphql-code-generator#readme',
      link2: 'https://www.npmjs.com/package/@graphql-codegen/cli/v/2.5.0-alpha-c9cbc7d69.0'
    },
    {
      text: '@graphql-codegen/typescript version 4.0.0',
      link1: 'https://github.com/dotansimha/graphql-code-generator',
      link2: 'https://snyk.io/advisor/npm-package/@graphql-codegen/typescript'
    },
    {
      text: '@emotion/react',
      link1: 'https://emotion.sh/docs/@emotion/react',
      link2: 'https://snyk.io/advisor/npm-package/@emotion/react'
    },
    {
      text: '@graphql-codegen/typescript-urql',
      link1: 'https://github.com/dotansimha/graphql-code-generator',
      link2: 'https://snyk.io/advisor/npm-package/@graphql-codegen/typescript-urql'
    },
    {
      text: '@headlessui/react version 1.7.15',
      link1: 'https://github.com/tailwindlabs/headlessui#readme',
      link2: 'https://www.npmjs.com/package/@headlessui/react'
    }
  ]

  return (
    <Page>
      <div className=" flex h-[60px] flex-row items-center justify-between border-b border-gray-800 px-6">
        <h1 className="text-20 font-medium">Documentation</h1>
      </div>

      <div className="px-10 py-6">
        <div className="flex flex-col gap-4">
          <HeaderOne text="Introduction" />

          <HeaderTwo text="Purpose of the System" />
          <Paragraph>
            Our Goal is to create a system that helps the end-users to invest in the early stages of
            a Company or a Project.
          </Paragraph>

          <Paragraph>
            Companies often leave traces on the internet via Git repositories, Twitter, etc. We aim
            to create an interface that displays the most trending projects and repositories for the
            Day/Week by looking at their footprint on the internet, whether it be contributors or
            forks of their Git repositories or tweets and hackernews posts discussing the project.
          </Paragraph>

          <Paragraph>
            By automatically web-scraping this information, along with the contact information of
            the founders, we plan to keep track of interesting individuals or companies that have
            the potential to grow and discover interesting projects in the early stages.
          </Paragraph>

          <Divider />

          <HeaderOne text="Requirements" />
          <HeaderTwo text="Analysis Object Model" />
          <Paragraph>Include and describe your Analysis Object Model here.</Paragraph>

          <HeaderTwo text="Activity Diagram" />
          <Paragraph>
            Include and describe your Activity Diagram which points out the system behavior.
          </Paragraph>

          <Divider />

          <HeaderOne text="System Design" />
          <HeaderTwo text="Overview" />
          <HeaderThree text="Supabse" />
          <Paragraph>
            Supabase is a Backend as a Service (BaaS) for managing authentication, a Postgre
            database, file storage, edge functions and more. Authentication and Database management
            are fully handled by Supabase. The database is additionally configured to expose a
            GraphQL endpoint.
          </Paragraph>

          <HeaderThree text="Microservices" />
          <Paragraph>
            The backend consists of multiple microservices, managed by NPM workspaces. All services
            are implemented with Node.js and TypeScript for type-safety, linted with ESLint and
            formatted with Prettier.
          </Paragraph>

          <HeaderThree text="graphql_gateway" />
          <Paragraph>
            The Gateway is the entry point to the backend and forwards all incoming requests. It is
            built using GraphQL Mesh, which stitches multiple GraphQL schemas together, by
            introspecting different GraphQL endpoints, thus creating its own supergraph. It then
            forwards requests and their individual GraphQL query to the corresponding service. The
            Supergraph is created from Supabases GraphQL endpoint and Before any request is
            forwarded it first verifies that the user is authenticated.
          </Paragraph>

          <HeaderThree text="graphql_server" />
          <Paragraph>
            A fully functional server. It sets up a Fastify server using the Mercurius middleware to
            expose a graphql endpoint.
          </Paragraph>

          <Paragraph>
            A fully functional server. It sets up a Fastify server using the Mercurius middleware to
            expose a graphql endpoint.
          </Paragraph>

          <Paragraph className="font-bold">Queries:</Paragraph>
          <ul className="list-inside list-disc text-14">
            <li> helloWorld(): a test query</li>
          </ul>

          <Paragraph className="font-bold">Mutations:</Paragraph>

          <ul className="list-inside list-disc text-14 text-gray-400/80">
            <li>
              addProjectByName(name: String!, owner: String!, bookmarkCategory: String!): adds and
              bookmarks a project by name
            </li>
            <li>
              addProjectByUrl(url: String!, bookmarkCategory: String!): adds and bookmarks a project
              by URL
            </li>
            <li>
              addBookmark(projectID: String!, category: String!): adds a bookmark for the currently
              logged in user
            </li>
            <li>
              deleteBookmark(projectID: String!): deletes a bookmark for the currently logged in
              user
            </li>
            <li>
              editBookmarkCategory(projectID: String!, newCategory: String!): edits the category a
              bookmark is associated with
            </li>
            <li>
              renameBookmarkCategory(oldCategory: String!, newCategory: String!): renames a category
              of bookmarks
            </li>
          </ul>
          <HeaderTwo text="Hardware/Software Mapping" />
          <Paragraph>
            Include and describe your Deployment or Infrastructure Diagram here. Describe the
            specific hardware, software and protocols for your system.
          </Paragraph>
          <HeaderTwo text="Persistent Data Management" />
          <Paragraph>
            Persistent data management describes the persistent data stored by the system and the
            data management infrastructure required for it. This section typically includes the
            description of data schemes, the selection of a database, and the description of the
            encapsulation of the database.
          </Paragraph>
          <HeaderTwo text="Persistent Data Management" />

          <Paragraph>
            Access control and security describe the user model of the system in terms of an access
            matrix. This section also describes security issues, such as the selection of an
            authentication mechanism, the use of encryption, and the management of keys.
          </Paragraph>
          <Divider />
          <HeaderOne text="Administrator Manual" />
          <HeaderTwo text="Infrastructure Setup" />
          <Paragraph>
            Describe the setup of the infrastructure in terms of hardware, software, and protocols
            so it can be configured by a system administrator at the client site. (incl. virtual
            machines, software packages etc. Describe the installation and startup order for each
            component.
          </Paragraph>
          <HeaderTwo text="Deployment and Configuration" />
          <Paragraph>
            Describe the steps a system administrator needs to take to install your system on the
            infrastructure described in the section above. If necessary explain any parameters like
            domains, IP addresses, ports, etc. within your system that need to be configured.
          </Paragraph>
          <HeaderTwo text="Known Issues &amp; Workarounds" />
          <Paragraph>
            Describe any known problems and workarounds with respect to infrastructure and
            deployment. For example, explain that you used a mock database.
          </Paragraph>
          <HeaderTwo text="Third-party Components" />
          <Paragraph>
            List all third-party components you use (e.g. libraries, frameworks) and include their
            version numbers. If you used open-source components add a link to the website and/or the
            license terms. If you used commercial software refer to the product information at the
            manufacturer`s site.
          </Paragraph>

          <NumberedBulletedList items={items} />
        </div>
      </div>
    </Page>
  )
}

export default withAuth(Docs)
