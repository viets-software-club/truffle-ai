export type Developer = {
  name: string
  username: string
}

export type DeveloperRepo = {
  username: string
  repo: string
}

export type Contributor = {
  login: string
  contributions: number
}

export type timeMode = 'daily' | 'weekly' | 'monthly'
