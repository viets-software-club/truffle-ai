// Any React component
import { useState } from 'react'
import axios from 'axios'
import css from './Input.module.sass'

type ApiResponse = {
  success: boolean
}

const SlackNotificationSender = () => {
  const [webhookURL, setWebhookURL] = useState('') // @TODO Store the webhook URL in a secure way, backend
  const [message, setMessage] = useState('')
  const [userResponse, setUserResponse] = useState('')

  const sendNotification = () => {
    axios
      .post<ApiResponse>('/api/notify', { text: message, url: webhookURL })
      .then((response) => {
        if (response.data.success) {
          setUserResponse('Success!')
        }
      })
      .catch((err) => {
        const error = err as Error
        setUserResponse(`Error sending notification:${error.message}`)
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
