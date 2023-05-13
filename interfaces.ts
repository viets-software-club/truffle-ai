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

export interface Repository {
  [key: string]: any
}

export interface GraphQLResponse {
  data: {
    repository: {
      stargazers: {
        edges: StarData
        pageInfo: {
          hasNextPage: boolean
          endCursor: string | null
        }
      }
    }
  }
}

export interface OpenAIResponse {
  choices: {
    message: {
      content: string
    }
  }[]
}
