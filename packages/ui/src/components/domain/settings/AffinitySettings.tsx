import { useEffect, useState } from 'react'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import Banner from '../../shared/Banner'

const AffinitySettings = () => {
  const [affinityKey, setAffinityKey] = useState(
    (typeof window !== 'undefined' && localStorage.getItem('affinityKey')) || ''
  )
  const [listId, setListId] = useState(
    (typeof window !== 'undefined' && localStorage.getItem('affinityListId')) || ''
  )
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
    <div className='flex flex-col items-stretch gap-4 sm:items-start'>
      <div className='flex w-full flex-col gap-2 sm:w-auto'>
        <p className='text-sm text-white/75'>Affinity API token</p>
        <Input
          type='password'
          id='affinity'
          name='affinity'
          placeholder='•••••••••••••••••'
          value={affinityKey}
          onChange={e => setAffinityKey(e.target.value)}
        />
      </div>

      <div className='flex w-full flex-col gap-2 sm:w-auto'>
        <p className='text-sm text-white/75'>Affinity List ID</p>
        <Input
          type='text'
          id='listId'
          name='listId'
          placeholder='Enter your List ID here'
          value={listId}
          onChange={e => setListId(e.target.value)}
        />
      </div>

      <div className='mt-2'>
        <Button variant='highlighted' size='large' onClick={showBannerFunc}>
          Update
        </Button>
      </div>

      {showBanner && <Banner variant='success' message='Values updated' />}
    </div>
  )
}

export default AffinitySettings
