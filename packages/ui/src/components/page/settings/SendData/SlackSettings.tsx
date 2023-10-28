import { useEffect, useState } from 'react'
import Banner from '@/components/page/settings/Banner'
import Button from '@/components/pure/Button'
import Input from '@/components/pure/Input'

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

  const handleClick = () => {
    setSlackLoading(true)
    setNotificationStatus('success')
    setSlackLoading(false)
    setTimeout(() => setNotificationStatus(''), 4000)
  }

  return (
    <div className='flex flex-col items-start gap-[15px]'>
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
        <Button variant='highlighted' onClick={handleClick}>
          {slackLoading ? 'Loading...' : 'Update'}
        </Button>
      </div>

      {notificationStatus === 'success' && (
        <Banner variant='success' message='Updated slack notification' />
      )}

      {notificationStatus === 'error' && (
        <Banner variant='error' message='Error sending notification' />
      )}
    </div>
  )
}

export default SlackSettings
