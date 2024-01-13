import { useState } from 'react'
import { FaSlack } from 'react-icons/fa'
import Banner from '@/components/shared/Banner'
import Button from '@/components/shared/Button'
import sendSlackNotification from '@/util/sendSlackNotification'

type SendToSlackProps = {
  content: string
  multiple?: boolean
}

const SendToSlack = ({ content, multiple }: SendToSlackProps) => {
  const [showBanner, setShowBanner] = useState(false)
  const [status, setStatus] = useState<'success' | 'error'>()
  const [loading, setLoading] = useState(false)

  const sendSlackMessage = async () => {
    setLoading(true)

    const template = multiple
      ? (typeof window !== 'undefined' && localStorage.getItem('slackMessageMultiple')) ?? ''
      : (typeof window !== 'undefined' && localStorage.getItem('slackMessage')) ?? ''

    const message = multiple ? `${template}\n${content}\n` : `${template}: ${content}`

    const res = await sendSlackNotification(message)

    setStatus(res)
    setLoading(false)
    setShowBanner(true)

    // Hide banner after 4 seconds
    setTimeout(() => setShowBanner(false), 4000)
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

      <Banner
        show={showBanner}
        variant={status}
        message={
          status === 'success'
            ? 'Slack notification sent'
            : "Couldn't send project to Slack. Did you add your webhook URL in settings?"
        }
      />
    </>
  )
}

export default SendToSlack
