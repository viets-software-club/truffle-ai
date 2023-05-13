export interface Developer {
  name: string
  username: string
}

export interface DeveloperRepo {
  username: string
  repo: string
}

export interface starHistoryScraper {
  owner: string
  repo: string
  cursor: string | null
}

export interface StarData {
  starredAt: string
  node: {
    [key: string]: any
  }
}
