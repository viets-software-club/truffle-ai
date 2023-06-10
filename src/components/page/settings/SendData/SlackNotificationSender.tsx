import { useState } from 'react'
import css from './Input.module.sass'

type ApiResponse = {
  success: boolean
}

const SlackNotificationSender = () => {
  const [webhookURL, setWebhookURL] = useState('') // @TODO Store the webhook URL in a secure way, backend
  const [message, setMessage] = useState('')
  const [userResponse, setUserResponse] = useState('')

  const sendNotification = () => {
    fetch('/api/notify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: message, url: webhookURL })
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = (await response.json()) as ApiResponse
        if (data.success) {
          setUserResponse('Success!')
        }
      })
      .catch((error: Error) => {
        setUserResponse(`Error sending notification: ${error.message}`)
      })
  }

  return (
    <div className="flex flex-col items-start gap-[15px]">
      <div>
        <input
          className={css.inputModule}
          type="text"
          placeholder="Enter Slack Webhook URL"
          value={webhookURL}
          onChange={(e) => setWebhookURL(e.target.value)}
        />
      </div>
      <div>
        <input
          className={css.inputModule}
          type="text"
          placeholder="Enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div>
        <button
          className="rounded-lg bg-indigo-500 px-2 py-1"
          type="button"
          onClick={sendNotification}
        >
          Send Notification
        </button>
        <p>{userResponse}</p>
      </div>
    </div>
  )
}

export default SlackNotificationSender
