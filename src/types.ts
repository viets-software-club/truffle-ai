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

export type StargazerCount = {
  stargazersCount: number
}

export type StargazersData = {
  length: number
  headers: {
    link?: string
  }
  status: number
  starredAt: string
}

export type StargazerRecord = {
  starredAt: string
}

export type StarRecord = {
  date: string
  count: number
}
