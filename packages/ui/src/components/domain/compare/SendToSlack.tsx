import { useState } from 'react'
import { FaSlack } from 'react-icons/fa'
import Banner from '@/components/shared/Banner'
import Button from '@/components/shared/Button'
import sendSlackNotification from '@/util/sendSlackNotification'

type SendToSlackProps = {
  message: string
}

const SendToSlack = ({ message }: SendToSlackProps) => {
  const [status, setStatus] = useState<'success' | 'error' | ''>('')
  const [loading, setLoading] = useState(false)

  const sendSlackMessage = async () => {
    setStatus('')
    setLoading(true)
    const template =
      (typeof window !== 'undefined' && localStorage.getItem('slackMessageMultiple')) ?? ''
    const res = await sendSlackNotification(`${template}\n${message}\n`)
    setLoading(false)
    setStatus(res)
  }

  const handleClick = () => {
    void sendSlackMessage()
  }

  return (
    <>
      <Button onClick={handleClick} className='text-white'>
        <FaSlack />
        {loading ? 'Sending...' : 'Send to Slack'}
      </Button>

      {status === 'success' && <Banner variant='success' message='Slack notification sent' />}
      {status === 'error' && (
        <Banner
          variant='error'
          message="Couldn't send a notification to Slack. Did you set up a webhook in settings?"
        />
      )}
    </>
  )
}

export default SendToSlack
