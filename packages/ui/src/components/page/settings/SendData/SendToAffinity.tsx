/* eslint-disable react/no-unused-prop-types */
import { useState } from 'react'
import Button from '@/components/pure/Button'
import Banner from '../Banner'

export type SendToAffinityProps = {
  name: string
  stars: number
  forks: number
  contributors: number
  githubUrl: string
  apiKey: string
  listId: string
}

type ApiResponse = {
  success: boolean
}

const sendAffinity = async (dataToSend: SendToAffinityProps) => {
  try {
    const response = await fetch('/api/sendToAffinity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    })

    if (!response.ok) {
      return 'error'
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

const SendToAffinity = (props: SendToAffinityProps) => {
  const [notificationStatus, setNotificationStatus] = useState<'success' | 'error' | ''>('')
  const [affinityLoading, setAffinityLoading] = useState(false)

  const handleClick = async () => {
    setAffinityLoading(true)
    const response = await sendAffinity(props)
    setNotificationStatus(response)
    setAffinityLoading(false)
  }

  const handleClickWrapper = () => {
    void handleClick()
  }

  return (
    <div className='flex flex-col items-start gap-[15px]'>
      <Button
        variant='normal'
        text={affinityLoading ? 'Loading...' : 'Send to Affinity'}
        onClick={handleClickWrapper}
      />
      {notificationStatus === 'success' && (
        <Banner variant='success' message='Slack notification sent' />
      )}
      {notificationStatus === 'error' && (
        <Banner variant='error' message='Error sending to Affinity' />
      )}
    </div>
  )
}

export default SendToAffinity
