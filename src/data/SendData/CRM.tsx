import axios from 'axios'
import { MouseEventHandler, useState } from 'react'
import css from './Input.module.sass'

interface CRMProps {
  name: string
  stars: number
}

interface ApiResponse {
  success: boolean
}

const CRM = ({ name, stars }: CRMProps) => {
  const [apiKey, setApiKey] = useState('') // @TODO Store the API key in a secure way, backend
  const [message, setMessage] = useState('')

  // @TODO Send data to Affinity, implement functionality
  const sendToAffinity: MouseEventHandler<HTMLButtonElement> = () => {
    axios
      .post<ApiResponse>('/api/sendToAffinity', { name, stars, apiKey })
      .then((response) => {
        if (response.data.success) {
          setMessage('Success!')
        }
      })
      .catch((err) => {
        setMessage(err as string)
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
