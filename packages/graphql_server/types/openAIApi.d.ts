export type OpenAIResponse = {
  choices: {
    message: {
      content: string
    }
  }[]
}
