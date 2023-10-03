type ApiResponse = {
  success: boolean
}

const sendSlackNotification = async (message: string) => {
  const webhookURL = localStorage.getItem('slackWebhookURL')

  try {
    const response = await fetch('/api/notify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: message, url: webhookURL })
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = (await response.json()) as ApiResponse

    if (!data.success) {
      return 'error'
    }

    return 'success'
  } catch (e) {
    return 'error'
  }
}

export default sendSlackNotification
