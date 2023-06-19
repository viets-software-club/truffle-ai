// see https://graphql.org/learn/schema/
const schema = `
  type Query {
    helloWorld: String!
    allProjects(first: Int, after: String): ProjectConnection!
  }
  type Mutation {
    addProjectByName(name: String!, owner: String!): Boolean!
    addProjectByUrl(url: String!): Boolean!
    addBookmark(projectID: String!, category: String!): Response!
    deleteBookmark(projectID: String!): Response!
    editBookmarkCategory(projectID: String!, newCategory: String!): Response!
    renameBookmarkCategory(oldCategory: String!, newCategory: String!): Response!
  }
  type Response {
      message: String
      details: String
      hint: String
      code: String!
  }
  type ProjectConnection {
    edges: [ProjectEdge!]!
    pageInfo: PageInfo!
  }
  
  type ProjectEdge {
    cursor: String!
    node: Project!
  }
  
  type PageInfo {
    hasNextPage: Boolean!
  }
  type Project {
    id: ID!
    about: String!
    eli5: String!
    issue_count: Int!
    fork_count: Int!
    pull_request_count: Int!
    contributor_count: Int!
    github_url: String!
    website_url: String!
    owning_organization: ID!
    is_bookmarked: Boolean!
    is_trending_daily: Boolean!
    is_trending_weekly: Boolean!
    is_trending_monthly: Boolean!
    star_history: String!
    name: String!
    languages: [String!]!
    owning_person: String!
    hackernews_sentiment: String!
    hackernews_stories: [String!]!
    star_count: Int!
  }
`

export default schema
