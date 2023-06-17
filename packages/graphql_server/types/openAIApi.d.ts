export type OpenAIResponse = {
  choices: {
    message: {
      content: string
    }
  }[]
}

export type RequestBodyOpenAI = {
  model: string
  messages: {
    role: string
    content: string
  }[]
}

export type ResponseBodyOpenAi = {
  id: string
  object: string
  created: number
  model: string
  usage: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
  choices: {
    message: Record<string, string>
    finish_reason: string
    index: number
  }[]
}
