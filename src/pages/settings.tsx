import Input from '@/components/pure/Input'
import Button from '@/components/pure/Button'
import Sidebar from '@/components/page/settings/Sidebar'
import Section from '@/components/page/settings/Section'
import withAuth from '@/components/side-effects/withAuth'
import SlackNotificationSender from '@/components/page/settings/SendData/SlackNotificationSender'

// @TODO prefill inputs, add action handlers, success/ error banner, loading spinners

/**
 * Settings page
 */
const Settings = () => {
  const sections = {
    Account: ['Linked Accounts', 'Notifications'],
    Integrations: ['Affinity']
  }

  return (
    <div className="flex">
      <Sidebar sections={sections} />

      <div className="ml-64 w-full overflow-auto px-20 py-10 text-white">
        <h2 className="border-b border-gray-800 pb-4 text-20 font-medium">Account</h2>

        <Section title="Account" subtitle="Linked Accounts">
          <p className="pb-2 text-14 font-normal">GitHub access token</p>

          <Input type="password" id="github" name="github" placeholder="•••••••••••••••••" />

          <div className="mt-4">
            <Button variant="highlighted" text="Update" onClick={() => ''} />
          </div>
        </Section>

        <div className="h-1 border-b border-gray-800" />

        <Section title="Account" subtitle="Notifications">
          <p className="mb-4 text-14 font-normal">Slack notifications</p>

          <SlackNotificationSender />
        </Section>

        <h2 className="border-b border-gray-800 pb-4 text-20 font-medium">Integrations</h2>

        <Section title="Integrations" subtitle="Affinity">
          <p className="pb-2 text-14 font-normal">Affinity API token</p>

          <Input type="password" id="affinity" name="affinity" placeholder="•••••••••••••••••" />

          <div className="mt-4">
            <Button variant="highlighted" text="Update" onClick={() => ''} />
          </div>
        </Section>
      </div>
    </div>
  )
}

export default withAuth(Settings)
