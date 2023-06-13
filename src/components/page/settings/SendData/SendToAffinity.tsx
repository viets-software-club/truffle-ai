import { useState } from 'react'
import Button from '@/components/pure/Button'

type SendToAffinityProps = {
  name: string
  stars: number
  apiKey: string
}

type ApiResponse = {
  success: boolean
}

// @TODO update data type to project, incorporate in detail page

const SendToAffinity = ({ name, stars, apiKey }: SendToAffinityProps) => {
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/sendToAffinity', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, stars, apiKey })
      })

      if (!response.ok) {
        throw new Error('Failed to connect to server.')
      }

      const json = await response.text()
      const parsed = JSON.parse(json) as ApiResponse

      if (!parsed.success) {
        throw new Error('Failed to send data to Affinity.')
      }

      setError('Successfully sent data to Affinity.')
    } catch (e) {
      setError(e as string)
    }
  }

  return (
    <div className="flex flex-col items-start gap-[15px]">
      {/* eslint-disable-next-line no-void */}
      <Button variant="highlighted" text="Send to Affinity" onClick={void handleSubmit} />
      {/* @TODO Improve error message (potentially use global error popup) */}
      <p>{error}</p>
    </div>
  )
}

export default SendToAffinity
