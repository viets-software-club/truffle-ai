import { useState } from 'react'
import Button from '@/components/shared/Button'
import sendToAffinity, { AffinityData } from '@/util/sendToAffinity'
import Banner from '../../shared/Banner'

const SendToAffinity = (props: AffinityData) => {
  const [notificationStatus, setNotificationStatus] = useState<'success' | 'error' | ''>('')
  const [affinityLoading, setAffinityLoading] = useState(false)

  const handleClick = async () => {
    setNotificationStatus('')
    setAffinityLoading(true)
    const response = await sendToAffinity(props)
    setNotificationStatus(response)
    setAffinityLoading(false)
  }

  const handleClickWrapper = () => {
    void handleClick()
  }

  return (
    <div className='flex flex-col items-start gap-[15px]'>
      <Button onClick={handleClickWrapper}>
        {affinityLoading ? 'Loading...' : 'Send to Affinity'}
      </Button>
      {notificationStatus === 'success' && (
        <Banner variant='success' message='Slack notification sent' />
      )}
      {notificationStatus === 'error' && (
        <Banner
          variant='error'
          message="Couldn't send project to Affinity. Did you add your API token in settings?"
        />
      )}
    </div>
  )
}

export default SendToAffinity
