import Button from '@/components/pure/Button'
import { useEffect, useState } from 'react'
import Input from '@/components/pure/Input'
import Banner from './Banner'

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
  }

  return (
    <>
      <p className="pb-2 text-14 font-normal">Affinity API token</p>
      <Input
        type="password"
        id="affinity"
        name="affinity"
        placeholder="•••••••••••••••••"
        value={affinityKey}
        onChange={(e) => setAffinityKey(e.target.value)}
      />
      <p className="mt-4 pb-2 text-14 font-normal">Affinity List ID</p>
      <Input
        type="text"
        id="listId"
        name="listId"
        placeholder="Enter your List ID here"
        value={listId}
        onChange={(e) => setListId(e.target.value)}
      />
      <div className="mb-64 mt-4">
        <Button variant="highlighted" text="Update" onClick={showBannerFunc} />
        {showBanner && <Banner variant="success" message="Values updated" />}
      </div>
    </>
  )
}

export default AffinitySettings
