import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type DiscordChannel = SocialMediaPresence & {
  __typename?: 'DiscordChannel'
  accountName: Scalars['String']
  link: Scalars['String']
  memberCount: Scalars['Int']
  platform: Scalars['String']
}

export type GitHubInformation = {
  __typename?: 'GitHubInformation'
  about: Scalars['String']
  author: GitHubUser
  categories: Array<Maybe<Scalars['String']>>
  contributorsCount: Scalars['Int']
  eli5: Scalars['String']
  forkCount: Scalars['Int']
  issueCount: Scalars['Int']
  linkToRepo: Scalars['String']
  name: Scalars['String']
  programmingLanguages: Array<Maybe<Scalars['String']>>
  pullRequestCount: Scalars['Int']
  starCount: Scalars['Int']
  topThreeContributors: Array<Maybe<GitHubUser>>
  websiteOfRepo: Scalars['String']
}

export type GitHubUser = {
  __typename?: 'GitHubUser'
  email?: Maybe<Scalars['String']>
  employedAt?: Maybe<Scalars['String']>
  gitHubHandle: Scalars['String']
  name: Scalars['String']
  personalWebsite?: Maybe<Scalars['String']>
  repositoryCount: Scalars['Int']
  starCount: Scalars['Int']
  twitterHandle?: Maybe<Scalars['String']>
}

export type HackernewsTopPost = SocialMediaTopPost & {
  __typename?: 'HackernewsTopPost'
  commentCount: Scalars['Int']
  link: Scalars['String']
  platform: Scalars['String']
  pointCount: Scalars['Int']
  title: Scalars['String']
}

export type LinkedInAccount = SocialMediaPresence & {
  __typename?: 'LinkedInAccount'
  accountName: Scalars['String']
  followerCount: Scalars['Int']
  link: Scalars['String']
  platform: Scalars['String']
}

export type ProductHuntTopPost = SocialMediaTopPost & {
  __typename?: 'ProductHuntTopPost'
  commentCount: Scalars['Int']
  date: Scalars['String']
  descriptionPreview: Scalars['String']
  likeCount: Scalars['Int']
  link: Scalars['String']
  platform: Scalars['String']
  title: Scalars['String']
}

export type Project = {
  __typename?: 'Project'
  gitHubInformation: GitHubInformation
  id: Scalars['ID']
  socialMediaAccounts: Array<Maybe<SocialMediaPresence>>
  socialMediaTopPosts: Array<Maybe<SocialMediaTopPost>>
}

export type Query = {
  __typename?: 'Query'
  projects: Array<Project>
}

export type SlackChannel = SocialMediaPresence & {
  __typename?: 'SlackChannel'
  accountName: Scalars['String']
  link: Scalars['String']
  memberCount: Scalars['Int']
  platform: Scalars['String']
}

export type SocialMediaPresence = {
  accountName: Scalars['String']
  link: Scalars['String']
  platform: Scalars['String']
}

export type SocialMediaTopPost = {
  link: Scalars['String']
  platform: Scalars['String']
  title: Scalars['String']
}

export type TwitterAccount = SocialMediaPresence & {
  __typename?: 'TwitterAccount'
  accountName: Scalars['String']
  followerCount: Scalars['Int']
  link: Scalars['String']
  platform: Scalars['String']
}

export type TwitterTopPost = SocialMediaTopPost & {
  __typename?: 'TwitterTopPost'
  commentCount: Scalars['Int']
  date: Scalars['String']
  likeCount: Scalars['Int']
  link: Scalars['String']
  platform: Scalars['String']
  retweetCount: Scalars['Int']
  title: Scalars['String']
  viewsCount: Scalars['Int']
}

export type ProjectsQueryVariables = Exact<{ [key: string]: never }>

export type ProjectsQuery = {
  __typename?: 'Query'
  projects: Array<{
    __typename?: 'Project'
    id: string
    gitHubInformation: {
      __typename?: 'GitHubInformation'
      name: string
      about: string
      eli5: string
      author: { __typename?: 'GitHubUser'; name: string; email?: string | null }
    }
    socialMediaAccounts: Array<
      | { __typename?: 'DiscordChannel'; platform: string; accountName: string; link: string }
      | { __typename?: 'LinkedInAccount'; platform: string; accountName: string; link: string }
      | { __typename?: 'SlackChannel'; platform: string; accountName: string; link: string }
      | { __typename?: 'TwitterAccount'; platform: string; accountName: string; link: string }
      | null
    >
    socialMediaTopPosts: Array<
      | { __typename?: 'HackernewsTopPost'; platform: string; link: string; title: string }
      | { __typename?: 'ProductHuntTopPost'; platform: string; link: string; title: string }
      | { __typename?: 'TwitterTopPost'; platform: string; link: string; title: string }
      | null
    >
  }>
}

export const ProjectsDocument = gql`
  query Projects {
    projects {
      id
      gitHubInformation {
        name
        author {
          name
          email
        }
        about
        eli5
      }
      socialMediaAccounts {
        platform
        accountName
        link
      }
      socialMediaTopPosts {
        platform
        link
        title
      }
    }
  }
`

export function useProjectsQuery(
  options?: Omit<Urql.UseQueryArgs<ProjectsQueryVariables>, 'query'>
) {
  return Urql.useQuery<ProjectsQuery, ProjectsQueryVariables>({
    query: ProjectsDocument,
    ...options
  })
}
