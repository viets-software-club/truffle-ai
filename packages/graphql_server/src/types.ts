export type Developer = {
  name: string
  username: string
}

export type DeveloperRepo = {
  username: string
  repo: string
}

export type Repository = {
  [key: string]: undefined
}

export type OpenAIResponse = {
  choices: {
    message: {
      content: string
    }
  }[]
}

export type StargazersData = {
  length: number
  headers: {
    link?: string
  }
  status: number
  starred_at: string
}

export type StarRecord = {
  date: string
  count: number
}

export type timeMode = 'daily' | 'weekly' | 'monthly'
