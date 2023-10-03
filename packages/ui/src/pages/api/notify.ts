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
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(slackData)
    })
    if (response.ok) {
      res.status(200).json({ success: true })
    } else {
      throw new Error('Request failed')
    }
  } catch (err) {
    res.status(500).json({ success: false })
  }
}
