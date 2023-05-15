// see https://graphql.org/learn/schema/
const schema = `
  type Project {
    id: ID!
    gitHubInformation: GitHubInformation!
    socialMediaAccounts: [SocialMediaPresence]!
    socialMediaTopPosts: [SocialMediaTopPost]!
  }

  type GitHubInformation {
    name: String!
    author: GitHubUser!
    about: String!
    eli5: String!
    programmingLanguages: [String]!
    categories: [String]!
    starCount: Int!
    issueCount: Int!
    forkCount: Int!
    pullRequestCount: Int!
    contributorsCount: Int!
    topThreeContributors: [GitHubUser]!
    linkToRepo: String!
    websiteOfRepo: String!
  }

  type GitHubUser {
    gitHubHandle: String!
    name: String!
    repositoryCount: Int!
    starCount: Int!
    employedAt: String
    email: String
    personalWebsite: String
    twitterHandle: String
  }

  interface SocialMediaPresence {
    platform: String!
    accountName: String!
    link: String!
  }

  type TwitterAccount implements SocialMediaPresence {
    platform: String!
    accountName: String!
    link: String!
    followerCount: Int!
  }

  type LinkedInAccount implements SocialMediaPresence {
    platform: String!
    accountName: String!
    link: String!
    followerCount: Int!
  }

  type SlackChannel implements SocialMediaPresence {
    platform: String!
    accountName: String!
    link: String!
    memberCount: Int!
  }

  type DiscordChannel implements SocialMediaPresence {
    platform: String!
    accountName: String!
    link: String!
    memberCount: Int!
  }

  interface SocialMediaTopPost {
    platform: String!
    link: String!
    title: String!
  }

  type HackernewsTopPost implements SocialMediaTopPost {
    platform: String!
    link: String!
    title: String!
    pointCount: Int!
    commentCount: Int!
  }

  type TwitterTopPost implements SocialMediaTopPost {
    platform: String!
    link: String!
    title: String!
    date: String!
    likeCount: Int!
    commentCount: Int!
    retweetCount: Int!
    viewsCount: Int!
  }

  type ProductHuntTopPost implements SocialMediaTopPost {
    platform: String!
    link: String!
    title: String!
    descriptionPreview: String!
    date: String!
    likeCount: Int!
    commentCount: Int!
  }
  
  type Query {
    projects: [Project!]!
  }
`

export default schema
