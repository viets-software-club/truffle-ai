// Github info type as returned by GraphQL API
export type GitHubInfo = {
  name?: string
  description?: string
  stargazerCount?: number
  issues?: { totalCount?: number }
  forkCount?: number
  pullRequests?: { totalCount?: number }
  url?: string
  homepageUrl?: string
  languages?: { edges?: { node?: { name?: string; color?: string } }[] }
}

// Github organization info type as returned by GraphQL API
export type GitHubOrganization = {
  name?: string
  login?: string
  avatarUrl?: string
  repositories?: { totalCount?: number }
  email?: string
  websiteUrl?: string
  twitterUsername?: string
  url?: string
}

// Github user info type as returned by GraphQL API
export type GitHubUser = {
  name?: string
  login?: string
  avatarUrl?: string
  repositories?: { totalCount: number }
  email?: string
  websiteUrl?: string
  twitterUsername?: string
  url?: string
}
