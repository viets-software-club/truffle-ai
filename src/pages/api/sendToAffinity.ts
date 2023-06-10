import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

type AffinityData = {
  name: string
  stars: number
  apiKey: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, stars, apiKey }: AffinityData = req.body as AffinityData

  const affinityData = {
    // Assuming "name" is the organization name and "stars" is a custom field
    name,
    custom_field_values: {
      'GitHub Stars': stars
    }
  }

  try {
    const response = await axios.post('https://api.affinity.co/organizations', affinityData, {
      headers: {
        'API-KEY': apiKey, // Use the API key from the request body
        'Content-Type': 'application/json'
      }
    })
    if (response.status === 200) {
      res.status(200).json({ success: true })
    }
  } catch (err) {
    res.status(500).json({ success: false })
  }
}
