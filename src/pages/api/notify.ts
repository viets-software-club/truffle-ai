import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

type SlackData = {
  text: string
  url: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { text, url }: SlackData = req.body as SlackData

  const slackData = {
    text
  }

  try {
    const response = await axios.post(url, slackData)
    if (response.status === 200) {
      res.status(200).json({ success: true })
    }
  } catch (err) {
    res.status(500).json({ success: false })
  }
}
