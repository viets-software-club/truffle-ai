import Page from '@/components/side-effects/Page'
import withAuth from '@/components/side-effects/withAuth'
import Paragraph from '@/components/pure/paragraph'
import NumberedBulletedList from '@/components/pure/numberedBulletedList'
import NormalBulletList from '@/components/pure/normalBulletedList'
import { HeaderOne, HeaderThree, HeaderTwo } from '@/components/pure/heading'
import dbUpdaterWorkflow from '@/assets/Bild1.png'
import login from '@/assets/LoginPage.png'
import AddBookmark from '@/assets/AddBookmark.png'
import AllBookmarks from '@/assets/AllBookmarks.png'
import Sidebar from '@/assets/Sidebar.png'
import TrendingProject from '@/assets/TrendingProject.png'
import ProjectDetails from '@/assets/ProjectDetails.png'
import Image from 'next/image'
import NestedBulletList from '@/components/pure/NestedBulletList'
import Link from '@/components/pure/BasicLink'

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
  const cssClassForSimillarIMG = 'h-auto w-5/12 rounded-lg shadow-2xl'
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
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <Image src={dbUpdaterWorkflow} alt="dbUpdaterWorklow" />

          <Divider />

          <HeaderOne text="System Design" />
          <HeaderTwo text="Overview" />
          <Paragraph>
            The application consists of three parts, the <b>user-interface</b>, the backend
            architecture with its <b>microservices</b> and <b>Supabase</b>. Except for
            Authentication, all communication between these parts relies on{' '}
            <Link href="https://graphql.org/">GraphQL</Link>.{' '}
          </Paragraph>
          <HeaderThree text="User-Interface (Frontend - truffle.tools)" />
          <Paragraph>
            The user-interface of the application is built using{' '}
            <Link href="https://react.dev/">React.js</Link>. React is a JavaScript library for
            creating large and complex web user interfaces using reusable components. <br />
            To bundle multiple JavaScript files, preload links, improve{' '}
            <Link href="https://web.dev/tti/">Time To Interactive</Link>, prerender pages and
            statically optimize them we use <Link href="https://nextjs.org/">Next.js</Link>
            . Next is a framework for building web applications using React and comes with a lot of
            performance optimizations and its own JavaScript/TypeScript bundler.
            <br />
            The application was fully designed in <Link href="https://figma.com">Figma</Link>
            .
            <br />
            It is hosted on{' '}
            <Link href="https://vercel.com/docs/concepts/edge-network/regions">
              Vercel&rsquo;s edge network
            </Link>{' '}
            at the domain <Link href="https://truffle.tools">truffle.tools</Link>.
          </Paragraph>
          <HeaderThree text="Supabse" />
          <Paragraph>
            Supabase is a Backend as a Service (BaaS) for managing authentication, a Postgre
            database, file storage, edge functions and more. Authentication and Database management
            are fully handled by Supabase. Its database is additionally configured to expose a
            GraphQL endpoint. For Authentication Supabase is directly contacted by the frontend
            application, see section “Authentication”. For Database queries and mutations only the
            exposed GraphQL endpoint is used.
          </Paragraph>

          <HeaderThree text="Microservices (Backend - api.truffle.tools)" />
          <Paragraph>
            The backend consists of three microservices that are managed by{' '}
            <Link href="https://docs.npmjs.com/cli/v9/using-npm/workspaces?v=true">
              NPM workspaces
            </Link>
            . <br />
            They are hosted on DigitalOcean in a Kubernetes Cluster using Docker containers and use{' '}
            <Link href="https://nodejs.org/en">Node.js</Link>
            as their runtime environment for JavaScript code.
            <br />
            All services are only accessible from the Gateway via the GraphQL endpoint
            api.truffle.tools/graphql, which does additional Authorization checks on requests.
          </Paragraph>

          <HeaderThree text="GraphQL Gateway" />
          <Paragraph>
            The Gateway is the entry point to the backend and receives all incoming requests from
            the frontend application. <br />
            It is built using <Link href="https://the-guild.dev/graphql/mesh">GraphQL Mesh</Link>
            , which stitches multiple GraphQL schemas together, by introspecting different GraphQL
            endpoints, thus creating its own supergraph. It then forwards requests and their
            individual GraphQL query to the corresponding service.
            <br />
            The current supergraph consists of Supabase’s database GraphQL schema and the GraphQL
            server microservice schema.
            <br />
            For any incoming requests the gateway first verifies if the user is logged in with
            Supabase via the{' '}
            <Link href="https://swagger.io/docs/specification/authentication/bearer-authentication/">
              Authorization Bearer
            </Link>{' '}
            header. See “Authorization on Gateway”
          </Paragraph>

          <HeaderThree text="GraphQL Server" />
          <Paragraph>
            A fully functional web server. It sets up a Fastify server using the Mercurius
            middleware to expose a /graphql endpoint. It implements functionality for scraping data
            from different sites like GitHub Trending and calls all external APIs like GitHub,
            Hackernews etc.
            <NormalBulletList
              items={[
                '/api: a folder that contains all functionalities to call APIs, like GitHub and openAI',
                '/scraping: a folder that contains files that do scraping or that call APIs that do scraping',
                '/githubHistory: a folder that contains all the files associated with the histories for example starHistory or forkHistory'
              ]}
            />
            The current GraphQL schema exposes the following queries and mutations:
          </Paragraph>

          <Paragraph className="font-bold">Queries:</Paragraph>
          <ul className="list-inside list-disc text-14 text-gray-400/80 ">
            <li> helloWorld(): GraphQL Middleware Mercurius requires at least one query</li>
          </ul>

          <Paragraph className="font-bold">Mutations:</Paragraph>

          <NormalBulletList
            items={[
              'addProjectByName(name: String!, owner: String!, bookmarkCategory: String!)',
              'adds and bookmarks a project by name',
              'addProjectByUrl(url: String!, bookmarkCategory: String!)',
              'adds and bookmarks a project by URL',
              'addBookmark(projectID: String!, category: String!)',
              'adds a bookmark for the currently logged in user',
              'deleteBookmark(projectID: String!)',
              'deletes a bookmark for the currently logged in user',
              'editBookmarkCategory(projectID: String!, newCategory: String!)',
              'edits the category a bookmark is associated with',
              'renameBookmarkCategory(oldCategory: String!, newCategory: String!)',
              'renames a category of bookmarks'
            ]}
          />

          <HeaderThree text="Repo job" />
          <Paragraph>
            A cronjob that calls the data updating functions inside the GraphQL Server. It runs
            hourly.
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

          <HeaderThree text="Backend (server-side)" />
          <HeaderThree text="API Services:" />
          <NestedBulletList
            items={[
              {
                key: 'scraperapi - https://www.scraperapi.com/twitter-scraper/, Scraping twitter searches for specific hashtags',
                value: []
              },
              {
                key: 'scraping-bot - https://www.scraping-bot.io/web-scraping-documentation/, Scraping of LinkedIn data (only for company specific data)',
                value: []
              },
              {
                key: 'GitHub GraphQL API - GitHub GraphQL API documentation - GitHub Docs. Most of the information that we get from GitHub including:',
                value: [
                  {
                    key: 'getting the founders / first committers of a repository',
                    value: []
                  },
                  {
                    key: 'creating various histories from different information points of a repository',
                    value: []
                  },
                  {
                    key: 'get the available repository topics if the founder defined them',
                    value: []
                  }
                ]
              },
              {
                key: 'Github Rest API - https://docs.github.com/en/rest?apiVersion=2022-11-28',
                value: [
                  {
                    key: 'To get the contributor Count for a given repository',
                    value: []
                  }
                ]
              },
              {
                key: 'Chatgpt (OpenAI) requests: https://openai.com/',
                value: [
                  {
                    key: 'To sum up a readMe file in simple terms',
                    value: []
                  },
                  {
                    key: 'To get the sentiment described in comments scraped from Hackernews',
                    value: []
                  },
                  {
                    key: 'To summaries categories that were scraped from Github into new customized categories',
                    value: []
                  }
                ]
              },
              {
                key: 'Hackernews API by algolia - https://hn.algolia.com/api',
                value: [
                  {
                    key: 'Search HackerNewsStories based on the name of the repository and the name of the founder',
                    value: []
                  },
                  {
                    key: 'After we have found all stories we scrape the comments from the stories based on the found story id',
                    value: []
                  }
                ]
              }
            ]}
          />

          <HeaderThree text="Libraries and Frameworks:" />
          <NormalBulletList
            items={[
              'Axios (1.4.0) - Making all sorts of requests to mostly GitHub’s API',
              'Cheerio (1.0.0) - Extracting information from HTML code, in particular extracting the trending repositories from the GitHub trending page',
              'Fastify (4.17.0) - Web Framework for Node.js for building our web application',
              'Mercurius (13.0.0) - build GraphQL APIs and servers',
              'Showdown (2.1.0) - converting Markdown Syntax into HTML, used for the extraction of the ReadME.md files from each repository',
              'Supabase JS (2.24.0) - connection to the Supabase database'
            ]}
          />
          <HeaderThree text="Open Source Software:" />
          <NormalBulletList
            items={[
              'Star-History - <a href="blaa"> star-history/star-history: The missing star history graph of GitHub repos - https://star-history.com </a>'
            ]}
          />
          <HeaderThree text="Frontend (client-side)" />

          <Paragraph>
            List all third-party components you use (e.g. libraries, frameworks) and include their
            version numbers. If you used open-source components add a link to the website and/or the
            license terms. If you used commercial software refer to the product information at the
            manufacturer`s site.
          </Paragraph>

          <NumberedBulletedList items={items} />

          <Divider />

          <HeaderOne text="User Interface & Features (User Manual)" />

          <HeaderTwo text="Login" />
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <Image className={cssClassForSimillarIMG} src={login} alt="login" />

          <Paragraph>
            All our pages are protected, which means that if the user tries to access any page
            without being logged in, they will be prompted to log in by this screen. <br /> If the
            user enters wrong login credentials or tries to log in using an email or a Google
            account that has not been whitelisted, they will receive an error message.
          </Paragraph>

          <div className="flex flex-row justify-start gap-6">
            <div className="flex flex-col gap-4">
              <HeaderTwo text="Navbar" />
              <Paragraph>
                The navigation sidebar of our tool is split into four main sections, providing easy
                access to various functionalities of the application.
              </Paragraph>

              <HeaderThree text="Top Section" />
              <Paragraph>
                Next to TruffleAI, the user will see the user button, which opens a modal with three
                options:
              </Paragraph>
              <NormalBulletList
                items={[
                  'Settings: This takes the user to the user settings page, where they can adjust their account details and preferences.',
                  'Documentation: This directs the user to our comprehensive user guide and documentation.',
                  'Log out: This option allows the user to securely log out from the application.'
                ]}
              />
              <HeaderThree text="Overview Section" />
              <Paragraph>
                The Overview section gives the user a snapshot of their main areas of interest:
              </Paragraph>
              <NormalBulletList
                items={[
                  'Trending Projects: This option takes the user to the Trending Projects page, where they can see all the currently trending projects.',
                  'All Bookmarks: This directs the user to a page listing all the projects they have bookmarked.'
                ]}
              />

              <HeaderThree text="Categories Section" />
              <Paragraph>
                The Categories section allows the user to see all their bookmark categories as well
                as the projects they include at one glance{' '}
              </Paragraph>
              <HeaderThree text="Bottom Section" />
              <Paragraph>
                The Bottom section provides access to additional support and settings.
              </Paragraph>
            </div>
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}

            <Image className=" h-auto w-48 rounded-lg shadow-2xl" src={Sidebar} alt="sidebar" />
          </div>

          <HeaderTwo text="Trending Projects" />
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <Image className={cssClassForSimillarIMG} src={TrendingProject} alt="trendingProjects" />

          <Paragraph>
            As the first screen the user sees after logging into Truffle, the Trending Projects page
            is designed to provide a comprehensive overview of all currently trending projects by
            displaying them in a sortable and filterable table. For each project, the user will find
            the following information organized in columns:
          </Paragraph>

          <NormalBulletList
            items={[
              'Logo: The logo associated with the project. This could be the organization`s logo or the owner`s avatar.',
              'Name: The owning organization or person, and the responsible repository name.',
              'Stars: The number of stars the project has received on its repository.',
              'Issues: This provides the number of open issues in the project`s repository.',
              'Forks: The number of times the project has been forked.',
              'Contributors: The number of contributors to the project.',
              'Forks/Contributor: The ratio of forks to contributors.',
              'Issues/Contributor: The ratio of issues to contributors.',
              'Open Pull Requests: The number of open pull requests.'
            ]}
          />
          <Paragraph>
            The numeric values for each project are color-coded for easy identification of their
            relative positioning. Values in the top 10% are displayed in light green, the top 10-20%
            in dark green, the bottom 10-20% in dark red, the bottom 10% in light red, and the
            remaining values in gray.{' '}
          </Paragraph>
          <Paragraph>At the top of the page, there are five key functional buttons: </Paragraph>
          <NormalBulletList
            items={[
              'Select Timeframe: This button allows the user to filter projects based on the timeframe in which they are trending. This can either be "Today", "This week", or "This month".',
              'Edit Columns: This button lets the user  customize their viewing experience by activating or deactivating specific columns.',
              'Filters: This feature enables the user to add filters to the table for a more focused view. Multiple filters can be active at once.',
              'Sorting: Using this, the user can sort the table based on any column, either in ascending or descending order.',
              'Add Project: This allows the user to manually add a project to the table, which can be useful when TruffleAI doesn’t automatically detect a trending repository, which the user deems worthy of being displayed here.'
            ]}
          />

          <HeaderTwo text="Project Details" />
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <Image className={cssClassForSimillarIMG} src={ProjectDetails} alt="projectDetails" />

          <Paragraph>
            The Project Details page gives the user an in-depth look at an individual project. This
            page presents them with all the necessary information they need to understand the
            project, its growth, its social media traction, and its creator(s).{' '}
          </Paragraph>
          <HeaderThree text="Navigation" />
          <Paragraph>
            At the top of the Details page, the user will find three navigation buttons:
          </Paragraph>
          <NormalBulletList
            items={[
              'Close button: Closes the Details page and takes them back to the Trending Projects page.',
              'Arrow Up: Takes the user to the previous project based on the list they are currently going through (WIP).',
              'Arrow Down: Takes the user to the next project.'
            ]}
          />

          <HeaderThree text="Main Panel" />
          <Paragraph>
            The main panel of the Details page is packed with useful information about the project:
          </Paragraph>
          <NormalBulletList
            items={[
              'Logo',
              'Project owner and name',
              'Categories: One or more predefined categories under which the project falls.',
              'About: original project description from GitHub',
              'ELI5 description: A simple explanation of what the project is about.',
              'Bookmark: This allows you to bookmark the project for future reference. Once clicked a modal opens up, asking the user to enter the name of the category it should be bookmarked in.',
              'Send to Slack: This enables the user to share the project directly to a Slack channel using the webhook URL provided through the settings (see below).',
              "Star/ forks history: This interactive chart shows the growth in the project's star count over time.",
              'Top Tweets: List of the most popular tweets related to the project.',
              'Hackernews sentiment: Summary of the sentiment of the top comments from Hackernews.'
            ]}
          />

          <HeaderThree text="Right Sidebar" />
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <Image className={cssClassForSimillarIMG} src={AddBookmark} alt="addBookmarks" />

          <Paragraph>
            The right sidebar provides statistics and social media information about the project and
            its founders:
          </Paragraph>
          <NormalBulletList
            items={[
              "GitHub Stats: These are the project's stats on GitHub, such as stars, issues, forks, and contributors, as well as combined metrics like issues/ contributor or forks/ contributor.",
              'Languages: These are the programming languages used.',
              'Company: If Truffle was able to find a LinkedIn account or a website, the links are provided here.',
              "Founder: This area provides information about the project's founders, including their name, email, website, GitHub, Twitter, Website, and count of repositories.",
              "Integrations: The 'Send to Affinity' button allows the user to add the project details to their CRM for further tracking and outreach beyond Truffle."
            ]}
          />

          <HeaderTwo text="All Bookmarks" />
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <Image className={cssClassForSimillarIMG} src={AllBookmarks} alt="allBookmarks" />

          <Paragraph>
            This page gives the user an overview of all projects which were bookmarked regardless of
            their category.
          </Paragraph>

          <HeaderTwo text="Compare Categories" />

          <Paragraph>
            This page helps the user compare projects bookmarked into the same category. The user
            can access this page by clicking on one of the folders on the left, which represents the
            different categories the projects belong to.
            <br />
            The user can filter and sort the entries similar to the Trending Projects page.
          </Paragraph>
          <NormalBulletList
            items={[
              'Send to Slack: This button sends a notification with a list of all the projects in the category to Slack.',
              'Edit category: This enables the user to rename the category.',
              'Select timeframe: This allows the user to display only values in the specific timeframe in the chart.',
              'Normalize Data: This button is used to synchronize the starting point of all datasets to the earliest date for comparison purposes. It toggles between the original and the normalized state of the data.',
              'Stars: The user can choose whether to display the stars growth or the forks growth in the chart.'
            ]}
          />

          <HeaderTwo text="Settings" />
          <Paragraph>
            The page is divided into three sections: General, Account, and Integrations.{' '}
          </Paragraph>
          <HeaderThree text="General" />
          <NormalBulletList
            items={[
              'Default Filters: The user can set default filters (only greater than as of now) that will always be applied to the Trending Projects table. The user can filter based on stars, forks, issues, and contributors. If the values are set to 0, no filter is applied.',
              'Email Template: Lets the user customize the email template that will be automatically sent to the founders of a project on its Details page.'
            ]}
          />

          <HeaderThree text="Account" />
          <NormalBulletList
            items={[
              'Log out: Logs the user out.',
              'Delete Account: Deletes all user data after an additional confirmation step.'
            ]}
          />

          <HeaderThree text="Integrations" />
          <NormalBulletList
            items={[
              'Notifications: The user can configure notifications to be sent to a designated Slack channel by entering the channel’s webhook URL. The user can also set a prefix that will be included before the repo names in the notification messages.',
              "Affinity: Here, the user can add and update the API token for Affinity. Also, the user will need to provide the list ID for the list to which the projects' details should be sent."
            ]}
          />

          <HeaderTwo text="Command Interface" />
          <Paragraph>
            Using Cmd/Ctrl + K, the user can open up a command interface which allows quicker
            navigation between pages and fast execution of certain actions like sending an email
            without ever leaving the keyboard. Some items have shortcut keys displayed on the right
            which makes navigation between key pages even faster.{' '}
          </Paragraph>
          <Paragraph>
            For actions or navigation items that require additional input or confirmation, such as
            sending an email, the project details page or logging out, a second step is shown before
            carrying out the action.
          </Paragraph>

          <HeaderTwo text="Documentation (WIP)" />
          <Paragraph>
            An easily accessible and more user-friendly version of this very manual you’re currently
            reading, directly inside of the app.
          </Paragraph>

          <HeaderTwo text="404" />
          <Paragraph>
            When trying to access a non-existing URL, the user will receive a custom 404 page with a
            button linking back to the app:
          </Paragraph>

          <Divider />
        </div>
      </div>
    </Page>
  )
}

export default withAuth(Docs)
