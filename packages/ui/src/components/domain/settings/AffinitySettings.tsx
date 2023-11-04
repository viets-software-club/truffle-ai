import { useEffect, useState } from 'react'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import Banner from '../../shared/Banner'

const AffinitySettings = () => {
  const [affinityKey, setAffinityKey] = useState(localStorage.getItem('affinityKey') || '')
  const [listId, setListId] = useState(localStorage.getItem('affinityListId') || '')
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    localStorage.setItem('affinityKey', affinityKey)
    localStorage.setItem('affinityListId', listId)
  }, [affinityKey, listId])

  const showBannerFunc = () => {
    setShowBanner(true)
    setTimeout(() => setShowBanner(false), 4000)
  }

  return (
    <>
      <p className='pb-2 text-sm text-white/75'>Affinity API token</p>
      <Input
        type='password'
        id='affinity'
        name='affinity'
        placeholder='•••••••••••••••••'
        value={affinityKey}
        onChange={e => setAffinityKey(e.target.value)}
      />
      <p className='mt-4 pb-2 text-sm text-white/75'>Affinity List ID</p>
      <Input
        type='text'
        id='listId'
        name='listId'
        placeholder='Enter your List ID here'
        value={listId}
        onChange={e => setListId(e.target.value)}
      />
      <div className='mt-6'>
        <Button variant='highlighted' size='large' onClick={showBannerFunc}>
          Update
        </Button>
        {showBanner && <Banner variant='success' message='Values updated' />}
      </div>
    </>
  )
}

export default AffinitySettings
