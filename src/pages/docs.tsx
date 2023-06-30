import Page from '@/components/side-effects/Page'
import withAuth from '@/components/side-effects/withAuth'
import Paragraph from '@/components/pure/paragraph'
import NormalBulletList from '@/components/pure/normalBulletedList'
import { HeaderOne, HeaderThree, HeaderTwo } from '@/components/pure/heading'
import login from '@/assets/LoginPage.png'
import AddBookmark from '@/assets/AddBookmark.png'
import AllBookmarks from '@/assets/AllBookmarks.png'
import ComparePage from '@/assets/ComparePage.png'
import Sidebar from '@/assets/Sidebar.png'
import NotFound404 from '@/assets/404NotFound.png'

import CommandInterface from '@/assets/commandInterface.png'

import Settings from '@/assets/Settings.png'
import TrendingProject from '@/assets/TrendingProject.png'
import ProjectDetails from '@/assets/ProjectDetails.png'
import Image from 'next/image'

const Divider = () => <hr className="my-4 border-b-[0.5px] border-gray-500/10" />

const Docs = () => {
  const cssClassForSimillarIMG =
    'h-auto w-1/2 min-w-[700px] rounded-lg border border-gray-500/25 shadow-2xl'
  return (
    <Page>
      <div className=" flex h-[60px] flex-row items-center justify-between border-b border-gray-800 px-6">
        <h1 className="text-20 font-medium">Documentation</h1>
      </div>

      <div className="px-10 py-6">
        <div className="flex flex-col gap-4">
          <HeaderOne text="User Manual" />

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
            <Image
              className="h-auto w-48 rounded-lg border border-gray-500/25 shadow-2xl"
              src={Sidebar}
              alt="sidebar"
            />
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
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <Image className={cssClassForSimillarIMG} src={ComparePage} alt="comparePage" />

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
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <Image className={cssClassForSimillarIMG} src={Settings} alt="settings" />

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
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <Image className={cssClassForSimillarIMG} src={CommandInterface} alt="commandInterface" />

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

          <HeaderTwo text="404" />
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <Image className={cssClassForSimillarIMG} src={NotFound404} alt="notFound" />

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
/*
import NestedBulletList from '@/components/pure/NestedBulletList'
import Link from '@/components/pure/BasicLink'
import NumberedBulletedList from '@/components/pure/numberedBulletedList'
import dbUpdaterWorkflow from '@/assets/Bild1.png'
*/

/* 
  /* const items = [
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
  ] */
