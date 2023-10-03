import Image from '@/components/page/docs/Image'
import Heading from '@/components/page/docs/Heading'
import Paragraph from '@/components/page/docs/Paragraph'
import DocsPageWrapper from '@/components/page/docs/DocsPageWrapper'
import NormalBulletList from '@/components/page/docs/NormalBulletedList'

import ComparePage from '@/assets/ComparePage.png'

const CompareDocs = () => (
  <DocsPageWrapper>
    <Heading type="h1">Compare projects</Heading>

    {/* eslint-disable @typescript-eslint/no-unsafe-assignment */}
    {/* eslint-disable @typescript-eslint/no-unsafe-member-access */}
    <Image src={ComparePage.src} alt="Compare page" />

    <Paragraph>
      This page helps the user compare projects bookmarked into the same category. The user can
      access this page by clicking on one of the folders on the left, which represents the different
      categories the projects belong to. The user can filter and sort the entries similar to the
      Trending Projects page.
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
  </DocsPageWrapper>
)

export default CompareDocs
