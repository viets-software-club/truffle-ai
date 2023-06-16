import { useEffect, useState } from 'react'
import Input from '@/components/pure/Input'
import Button from '@/components/pure/Button'
import Banner from '@/components/page/settings/Banner'
import sendSlackNotification from '@/util/sendSlackNotification'

const SlackSettings = () => {
  const savedSlackWebhookURL = localStorage.getItem('slackWebhookURL')
  const savedSlackMessage = localStorage.getItem('slackMessage')
  const [webhookURL, setWebhookURL] = useState(savedSlackWebhookURL || '')
  const [message, setMessage] = useState(savedSlackMessage || '')
  const [notificationStatus, setNotificationStatus] = useState<'success' | 'error' | ''>('')
  const [slackLoading, setSlackLoading] = useState(false)

  // Update local storage whenever webhookURL or message changes
  useEffect(() => {
    if (webhookURL) {
      localStorage.setItem('slackWebhookURL', webhookURL)
    }
    if (message) {
      localStorage.setItem('slackMessage', message)
    }
  }, [webhookURL, message])

  const handleClick = async () => {
    setSlackLoading(true)
    const response = await sendSlackNotification(message)
    setNotificationStatus(response)
    setSlackLoading(false)
  }

  const handleClickWrapper = () => {
    void handleClick()
  }

  return (
    <div className="flex flex-col items-start gap-[15px]">
      <Input
        type="text"
        placeholder={savedSlackWebhookURL || 'Slack channel webhook URL'}
        value={webhookURL}
        onChange={(e) => setWebhookURL(e.target.value)}
      />

      <Input
        type="text"
        placeholder={savedSlackMessage || 'Message prefix'}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <Button
        variant="highlighted"
        text={slackLoading ? 'Loading...' : 'Update'}
        onClick={handleClickWrapper}
      />

      {notificationStatus === 'success' && (
        <Banner variant="success" message="Slack notification sent" />
      )}

      {notificationStatus === 'error' && (
        <Banner variant="error" message="Error sending notification" />
      )}
    </div>
  )
}

export default SlackSettings
