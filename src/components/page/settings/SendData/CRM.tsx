import { MouseEventHandler, useState } from 'react'
import css from './Input.module.sass'

type CRMProps = {
  name: string
  stars: number
}

type ApiResponse = {
  success: boolean
}

const CRM = ({ name, stars }: CRMProps) => {
  const [apiKey, setApiKey] = useState('') // @TODO Store the API key in a secure way, backend
  const [message, setMessage] = useState('')

  // @TODO Send data to Affinity, implement functionality
  const sendToAffinity: MouseEventHandler<HTMLButtonElement> = () => {
    fetch('/api/sendToAffinity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, stars, apiKey })
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Failed to connect to server.')
        }
        try {
          const jsonData = await response.text()
          const parsedJSON = JSON.parse(jsonData) as ApiResponse
          if (parsedJSON.success) {
            setMessage('Successfully sent data to Affinity.')
          } else {
            setMessage('Failed to send data to Affinity.')
          }
        } catch (error) {
          setMessage('Failed to send data to Affinity.')
        }
      })
      .catch((error: Error) => {
        setMessage(error.message)
      })
  }

  return (
    <div className="flex flex-col items-start gap-[15px]">
      <h1>{name}</h1>
      <div>
        <input
          className={css.inputModule}
          type="text"
          placeholder="Enter Affinity API Key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
      </div>
      <div>
        <button
          className="rounded-lg bg-indigo-500 px-2 py-1"
          type="button"
          onClick={sendToAffinity}
        >
          Send to Affinity
        </button>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default CRM
