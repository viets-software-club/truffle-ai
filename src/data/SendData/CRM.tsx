import axios from 'axios'
import { MouseEventHandler, useState } from 'react'

interface CRMProps {
  name: string
  stars: number
}

interface ApiResponse {
  success: boolean
}

const CRM = ({ name, stars }: CRMProps) => {
  const [apiKey, setApiKey] = useState('') // @TODO Store the API key in a secure way, backend

  const sendToAffinity: MouseEventHandler<HTMLButtonElement> = () => {
    axios
      .post<ApiResponse>('/api/sendToAffinity', { name, stars, apiKey })
      .then((response) => {
        if (response.data.success) {
          console.log('Data sent to Affinity successfully!')
        }
      })
      .catch((err) => {
        console.log('Error sending data to Affinity:', err)
      })
  }

  return (
    <div>
      <h1>{name}</h1>
      <p>{stars} stars</p>
      <input
        type="text"
        placeholder="Enter Affinity API Key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />
      <button type="button" onClick={sendToAffinity}>
        Send to Affinity
      </button>
    </div>
  )
}

export default CRM
