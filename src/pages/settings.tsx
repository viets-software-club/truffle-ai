import withAuth from '@/components/side-effects/withAuth'
import CRM from '@/data/SendData/CRM'
import SlackNotificationSender from '@/data/SendData/SlackNotificationSender'

const Settings = () => (
  <>
    <div className="flex h-[60px] flex-row items-center justify-between border-b border-gray-800 px-6">
      <h1 className="text-20 font-medium text-gray-100">Settings</h1>
    </div>
    <div className="flex flex-col gap-10 text-gray-100">
      <SlackNotificationSender />
      <CRM name="Affinity" stars={5} />
    </div>
  </>
)

export default withAuth(Settings)
