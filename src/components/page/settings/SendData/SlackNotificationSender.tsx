import { useEffect, useState } from 'react'
import Input from '@/components/pure/Input'
import Button from '@/components/pure/Button'
import Textarea from '@/components/pure/Textarea'
import Banner from '@/components/page/settings/Banner'

type ApiResponse = {
  success: boolean
}

const sendNotification = async (message: string) => {
  const webhookURL = localStorage.getItem('slackWebhookURL')

  try {
    const response = await fetch('/api/notify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: message, url: webhookURL })
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = (await response.json()) as ApiResponse

    if (!data.success) {
      return 'error'
    }

    return 'success'
  } catch (e) {
    return 'error'
  }
}

export const handleNotification = async (message: string) => {
  await sendNotification(message)
}

const SlackNotificationSender = () => {
  const savedSlackWebhookURL = localStorage.getItem('slackWebhookURL')
  const savedSlackMessage = localStorage.getItem('slackMessage')
  const [webhookURL, setWebhookURL] = useState(savedSlackWebhookURL || '')
  const [message, setMessage] = useState(savedSlackMessage || '')
  const [notificationStatus, setNotificationStatus] = useState<'success' | 'error' | ''>('')

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
    const response = await sendNotification(message)
    setNotificationStatus(response)
  }

  const handleClickWrapper = () => {
    void handleClick()
  }

  return (
    <div className="flex flex-col items-start gap-[15px]">
      <Input
        type="text"
        placeholder={savedSlackWebhookURL || 'Enter Slack Webhook URL'}
        value={webhookURL}
        onChange={(e) => setWebhookURL(e.target.value)}
      />

      <Textarea
        placeholder={savedSlackMessage || 'Enter message'}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <div>
        <Button variant="highlighted" text="Send test message" onClick={handleClickWrapper} />
      </div>

      {notificationStatus === 'success' && (
        <Banner variant="success" message="Notification sent!" />
      )}

      {notificationStatus === 'error' && (
        <Banner variant="error" message="Error sending notification." />
      )}
    </div>
  )
}

export default SlackNotificationSender
