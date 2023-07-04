import Image from '@/components/page/docs/Image'
import Heading from '@/components/page/docs/Heading'
import Paragraph from '@/components/page/docs/Paragraph'
import DocsPageWrapper from '@/components/page/docs/DocsPageWrapper'
import NormalBulletList from '@/components/page/docs/NormalBulletedList'

import Settings from '@/assets/Settings.png'

const CompareDocs = () => (
  <DocsPageWrapper>
    <Heading type="h1">Settings</Heading>

    <Paragraph>
      The settings page is divided into three sections: General, Account, and Integrations.
    </Paragraph>

    <Image src={Settings.src} alt="Settings page" />

    <Heading type="h2">General</Heading>

    <NormalBulletList
      items={[
        'Default Filters: The user can set default filters (only greater than as of now) that will always be applied to the Trending Projects table. The user can filter based on stars, forks, issues, and contributors. If the values are set to 0, no filter is applied.',
        'Email Template: Lets the user customize the email template that will be automatically sent to the founders of a project on its Details page.'
      ]}
    />

    <Heading type="h2">Account</Heading>

    <NormalBulletList
      items={[
        'Log out: Logs the user out.',
        'Delete Account: Deletes all user data after an additional confirmation step.'
      ]}
    />

    <Heading type="h2">Integrations</Heading>

    <NormalBulletList
      items={[
        "Notifications: The user can configure notifications to be sent to a designated Slack channel by entering the channel's webhook URL. The user can also set a prefix that will be included before the repo names in the notification messages.",
        "Affinity: Here, the user can add and update the API token for Affinity. Also, the user will need to provide the list ID for the list to which the projects' details should be sent."
      ]}
    />
  </DocsPageWrapper>
)

export default CompareDocs
