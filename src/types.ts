export type Developer = {
    name: string
    username: string
  }
  
  export type DeveloperRepo = {
    username: string
    repo: string
  }

  export type Repository = {
    [key: string]: any
  }
  
  export type OpenAIResponse = {
    choices: {
      message: {
        content: string
      }
    }[]
  }