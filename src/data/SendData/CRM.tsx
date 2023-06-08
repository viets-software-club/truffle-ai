import axios from 'axios'
import { MouseEventHandler, useState } from 'react'

// Define the type for the props
interface CRMProps {
  name: string
  stars: number
}

// Define the type for the API response data
interface ApiResponse {
  success: boolean
}

const CRM = ({ name, stars }: CRMProps) => {
  const [apiKey, setApiKey] = useState('') // Add state for API key

  const sendToAffinity: MouseEventHandler<HTMLButtonElement> = () => {
    axios
      .post<ApiResponse>('/api/sendToAffinity', { name, stars, apiKey }) // Pass the API key in the request body
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
