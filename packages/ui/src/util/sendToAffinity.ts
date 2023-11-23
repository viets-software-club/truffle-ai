export type ApiResponse = {
  success: boolean
}

export type AffinityData = {
  name: string
  stars: number
  forks: number
  contributors: number
  githubUrl: string
  apiKey: string
  listId: string
}

const sendToAffinity = async (dataToSend: AffinityData) => {
  try {
    const response = await fetch('/api/sendToAffinity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    })

    if (!response.ok) return 'error'

    const data = (await response.json()) as ApiResponse

    return data.success ? 'success' : 'error'
  } catch (e) {
    return 'error'
  }
}

export default sendToAffinity
