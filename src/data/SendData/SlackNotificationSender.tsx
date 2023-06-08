// Any React component
import { useState } from 'react'
import axios from 'axios'

type ApiResponse = {
  success: boolean
}

const SlackNotificationSender = () => {
  const [webhookURL, setWebhookURL] = useState('')
  const [message, setMessage] = useState('')

  const sendNotification = () => {
    axios
      .post<ApiResponse>('/api/notify', { text: message, url: webhookURL })
      .then((response) => {
        if (response.data.success) {
          console.log('Notification sent successfully!')
        }
      })
      .catch((err) => {
        console.log('Error sending notification:', err)
      })
  }

  return (
    <div className="p-7">
      <div className="flex flex-col gap-10 px-12">
        <div>
          <input
            className="text-gray-500"
            type="text"
            placeholder="Enter Slack Webhook URL"
            value={webhookURL}
            onChange={(e) => setWebhookURL(e.target.value)}
          />
        </div>
        <div>
          <input
            className="text-gray-500"
            type="text"
            placeholder="Enter message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="button" onClick={sendNotification}>
          Send Notification
        </button>
      </div>
    </div>
  )
}

export default SlackNotificationSender
