export type Developer = {
  name: string
  username: string
}

export type DeveloperRepo = {
  username: string
  repo: string
}

export type timeMode = 'daily' | 'weekly' | 'monthly'


export type Edge = {
  node: {
    author: {
      user: {
        login: string
      }
    }
  }
}

export type ContributorResponse = {
  data: {
    repository: {
      defaultBranchRef: {
        target: {
          history: {
            totalCount: number
            edges: Edge[]
          }
        }
      }
    }
  }
}

