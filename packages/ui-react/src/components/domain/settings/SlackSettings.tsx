import { useEffect, useState } from 'react'
import Banner from '@/components/shared/Banner'
import Button from '@/components/pure/Button'
import Input from '@/components/shared/Input'

const SlackSettings = () => {
  const savedSlackWebhookURL =
    typeof window !== 'undefined' && localStorage.getItem('slackWebhookURL')
  const savedSlackMessage = typeof window !== 'undefined' && localStorage.getItem('slackMessage')

  const [webhookURL, setWebhookURL] = useState(savedSlackWebhookURL || '')
  const [message, setMessage] = useState(savedSlackMessage || '')
  const [notificationStatus, setNotificationStatus] = useState<'success' | 'error'>()

  // Update local storage whenever webhookURL or message changes
  useEffect(() => {
    if (webhookURL) localStorage.setItem('slackWebhookURL', webhookURL)
    if (message) localStorage.setItem('slackMessage', message)
  }, [webhookURL, message])

  const handleClick = () => {
    setNotificationStatus('success')
    // Hide banner after 4 seconds
    setTimeout(() => setNotificationStatus(undefined), 4000)
  }

  return (
    <div className='flex flex-col items-stretch gap-4 sm:items-start'>
      <Input
        type='text'
        placeholder={savedSlackWebhookURL || 'Slack channel webhook URL'}
        value={webhookURL}
        onChange={e => setWebhookURL(e.target.value)}
      />

      <Input
        type='text'
        placeholder={savedSlackMessage || 'Message prefix'}
        value={message}
        onChange={e => setMessage(e.target.value)}
      />

      <div className='mt-2'>
        <Button variant='highlighted' size='large' onClick={handleClick}>
          Update
        </Button>
      </div>

      <Banner
        show={!!notificationStatus}
        variant={notificationStatus}
        message='Updated Slack settings'
      />
    </div>
  )
}

export default SlackSettings
