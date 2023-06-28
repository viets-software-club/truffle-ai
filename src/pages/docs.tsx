import Page from '@/components/side-effects/Page'
import withAuth from '@/components/side-effects/withAuth'
import Paragraph from '@/components/pure/paragraph'
import NumberedBulletedList from '@/components/pure/numberedBulletedList'
import NormalBulletList from '@/components/pure/normalBulletedList'
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

          <Paragraph className="font-bold">Queries:</Paragraph>
          <ul className="list-inside list-disc text-14 text-gray-400/80 ">
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

          <Paragraph>
            {' '}
            Right now, the functionality for scraping and API calling also resides in
            /graphql_server.
            <br />
            This includes:
          </Paragraph>

          <NormalBulletList
            items={[
              '/api: a folder that contains all functionalities to call APIs, like GitHub and openAI',
              '/scraping: a folder that contains files that do scraping or that call APIs that do scraping',
              '/githubHistory: a folder that contains all the files associated with the histories for example starHistory or forkHistory'
            ]}
          />

          <HeaderThree text="repo_job" />
          <Paragraph>
            A cronjob calling the graphql_server every hour to update its repository data.
          </Paragraph>

          <HeaderTwo text="Hardware/Software Mapping" />
          <HeaderThree text="Frontend" />
          <Paragraph>
            The frontend application of truffle is a nextjs application. NextJs is a It connects
            with the backend via a GraphQL client called urql. Furthermore it uses Supabase’s
            client-side library to connect with Supabase to handle client-side authentication
            including cookie and session management.
          </Paragraph>

          <HeaderThree text="Supabse clinet" />
          <Paragraph>
            The supabase client retrieves a JSON web token for authentication from Supabase after
            log
          </Paragraph>

          <HeaderThree text="GraphQL client" />
          <Paragraph>
            The GraphQL client connects to the GraphQL_Gateway service on the backend by providing
            an Authorization Bearer &lt;jwt&gt; header to authenticate.
          </Paragraph>

          <HeaderTwo text="Persistent Data Management" />
          <Paragraph>
            We use Supabase as a database.
            <br />
            There are 6 tabels:
          </Paragraph>

          <NormalBulletList
            items={[
              'allowed_users: stores whitelisted users',
              'associated_person: stores information about people that are owners or likely founders of one or more of the projects',
              'bookmark: stores bookmarks of projects by specific users as well as a associated category',
              'founded_by: stores which associated persons are founders of which projects',
              'organization: stores information about organizations that own one or more of the projects',
              'project: stores information about trending projects'
            ]}
          />
          <HeaderTwo text="Access Control &amp; Security" />

          <Paragraph>
            Supabase provides in house client-side session and cookie management for authentication.
            Users authenticate from the frontend client directly with Supabase using Supabase’s
            client libraries. Therefore the authentication including OAuth flow is fully abstracted
            away by Supabase.
          </Paragraph>
          <HeaderThree text="Sign up" />
          <Paragraph>
            Users are stored in Supabase’s Postgre database. By default only @lafamiglia.vc emails
            or emails stored in the allowed_users table are allowed to sign up. Before any user
            entry is inserted into Supabase’s user table, a Postgre function checks if this criteria
            is met. This means @lafamiglia.vc members can immediately sign up with Google’s OAuth
            from within the app. For sign ups requiring a password an account has to be created in
            Supabase’s Dashboard with a specific password. This allows La Famiglia to invite
            external users.
          </Paragraph>
          <HeaderThree text="Login" />
          <Paragraph>
            When you login on the frontend client, the Supabase client will create a session cookie
            in the browser containing the access_token as a JSON Web Token. It will also retrieve a
            refresh_token. When the access_token expires, Supabase’s client will use the
            refresh_token to retrieve a new access_token.
          </Paragraph>
          <HeaderThree text="Backend Access Control" />
          <Paragraph>
            When the frontend client sends a request to the GraphQL Gateway (backend), the
            Authentication Bearer http header is checked for the containing JSON Web Token. The
            Gateway validates this token with Supabase via a Middleware. It either rejects or allows
            the request to the supergraph.
          </Paragraph>

          <Divider />
          <HeaderOne text="Administrator Manual" />
          <HeaderTwo text="Infrastructure Setup" />
          <Paragraph>
            The backend application consists of multiple microservices running Node.Js. To run them
            could be deployed to any Kubernetes cluster by adjusting the provided
            config/deployment.template.yml and applying it using the Kubernetes command interface
            kubectl.
            <br />
            The deployment Github Action will create the Docker images of the application,
            authenticate with Digitaloceans and push the commit tagged Docker images to the private
            container image registry truffle-ai-containers, get short lived credentials for the
            Kubernetes cluster, replace environment variables, secrets and variables within it.
          </Paragraph>

          <Paragraph> When all repositories are cloned, the Kubernetes has a config.yml</Paragraph>

          <HeaderTwo text="Deployment and Configuration" />
          <Paragraph>
            Describe the steps a system administrator needs to take to install your system on the
            infrastructure described in the section above. If necessary explain any parameters like
            domains, IP addresses, ports, etc. within your system that need to be configured.
          </Paragraph>
          <HeaderTwo text="Known Issues &amp; Workarounds" />
          <Paragraph>
            <NormalBulletList
              items={[
                'truffle.tools relies on many third party APIs including GitHub and Hackernews. APIs usually have a limit for the maximum amount of requests per hour. As the application relies heavily on the GitHub API to display all its content, we had to use a database to store the retrieved data and update it in intervals, in order to be able to access the API in future without being blocked. This introduces the drawback of not having immediate real time data available.',
                'External users without @lafamiglia.vc email can only be signed up on Supabase',
                'The deployment GitHub Action is run only on pushes to the main branch, to save GitHub Action minutes and thus costs. A deployment can still fail when the Docker images, or environment variables are not set up properly without being detected beforehand by the build Actions.',
                'Pagination of repositories is missing, this can render the app unusable when there are too many bookmarked repositories.',
                'The frontend (truffle.tools) and backend (api.truffle.tools) don’t share the same domain',
                'Database tables are not normalized, they contain multiple values in a single cell',
                'Database tables contain null values'
              ]}
            />
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
