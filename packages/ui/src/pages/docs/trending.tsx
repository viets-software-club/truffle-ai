import Heading from '@/components/page/docs/Heading'
import Paragraph from '@/components/page/docs/Paragraph'
import NormalBulletList from '@/components/page/docs/NormalBulletedList'
import DocsPageWrapper from '@/components/page/docs/DocsPageWrapper'
import Image from '@/components/page/docs/Image'

import TrendingProject from '@/assets/TrendingProject.png'

const SidebarDocs = () => (
  <DocsPageWrapper>
    <Heading type="h1">Trending projects</Heading>

    {/* eslint-disable @typescript-eslint/no-unsafe-assignment */}
    {/* eslint-disable @typescript-eslint/no-unsafe-member-access */}
    <Image src={TrendingProject.src} alt="Trending projects page" />

    <Paragraph>
      As the first screen the user sees after logging into Truffle, the Trending Projects page is
      designed to provide a comprehensive overview of all currently trending projects by displaying
      them in a sortable and filterable table. For each project, the user will find the following
      information organized in columns:
    </Paragraph>

    <NormalBulletList
      items={[
        "Logo: The logo associated with the project. This could be the organization's logo or the owner's avatar.",
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
      The numeric values for each project are color-coded for easy identification of their relative
      positioning. Values in the top 10% are displayed in light green, the top 10-20% in dark green,
      the bottom 10-20% in dark red, the bottom 10% in light red, and the remaining values in gray.{' '}
    </Paragraph>

    <Paragraph>At the top of the page, there are five key functional buttons:</Paragraph>

    <NormalBulletList
      items={[
        'Select Timeframe: This button allows the user to filter projects based on the timeframe in which they are trending. This can either be "Today", "This week", or "This month".',
        'Edit Columns: This button lets the user  customize their viewing experience by activating or deactivating specific columns.',
        'Filters: This feature enables the user to add filters to the table for a more focused view. Multiple filters can be active at once.',
        'Sorting: Using this, the user can sort the table based on any column, either in ascending or descending order.',
        "Add Project: This allows the user to manually add a project to the table, which can be useful when TruffleAI doesn't automatically detect a trending repository, which the user deems worthy of being displayed here."
      ]}
    />
  </DocsPageWrapper>
)

export default SidebarDocs
