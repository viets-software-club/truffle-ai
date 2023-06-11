import { useState } from 'react'
import Input from '@/components/pure/Input'
import Button from '@/components/pure/Button'

type ApiResponse = {
  success: boolean
}

// @TODO Prefill webhook URL with saved user data, put into reasonable context, improve error handling

const SlackNotificationSender = () => {
  const [webhookURL, setWebhookURL] = useState('')
  const [message, setMessage] = useState('')
  const [userResponse, setUserResponse] = useState('')

  const sendNotification = async () => {
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
        setUserResponse('Error sending notification')
      }

      setUserResponse('Success!')
    } catch (e) {
      setUserResponse('Error sending notification')
    }
  }

  return (
    <div className="flex flex-col items-start gap-[15px]">
      <Input
        type="text"
        placeholder="Enter Slack Webhook URL"
        value={webhookURL}
        onChange={(e) => setWebhookURL(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <div>
        {/* eslint-disable-next-line no-void */}
        <Button variant="highlighted" text="Send Notification" onClick={void sendNotification} />
        <p>{userResponse}</p>
      </div>
    </div>
  )
}

export default SlackNotificationSender
