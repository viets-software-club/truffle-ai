import Image from '@/components/page/docs/Image'
import Heading from '@/components/page/docs/Heading'
import Paragraph from '@/components/page/docs/Paragraph'
import DocsPageWrapper from '@/components/page/docs/DocsPageWrapper'
import NormalBulletList from '@/components/page/docs/NormalBulletedList'

import ProjectDetails from '@/assets/ProjectDetails.png'

const DetailsDocs = () => (
  <DocsPageWrapper>
    <Heading type="h1">Project details</Heading>

    {/* eslint-disable @typescript-eslint/no-unsafe-assignment */}
    {/* eslint-disable @typescript-eslint/no-unsafe-member-access */}
    <Image src={ProjectDetails.src} alt="projectDetails" />

    <Paragraph>
      The Project Details page gives the user an in-depth look at an individual project. This page
      presents them with all the necessary information they need to understand the project, its
      growth, its social media traction, and its creator(s).{' '}
    </Paragraph>

    <Heading type="h2">Navigation</Heading>

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

    <Heading type="h2">Main Panel</Heading>

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

    <Heading type="h2">Right Sidebar</Heading>

    <Paragraph>
      The right sidebar provides statistics and social media information about the project and its
      founders:
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
  </DocsPageWrapper>
)

export default DetailsDocs
