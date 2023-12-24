module.exports = `
type Query {
    helloWorld: String!
  }
  type Mutation {
    createBookmark(repo: RepositoryInput!, categories: [String!]!): Boolean!
    removeBookmark(repo: RepositoryInput!): Boolean!
  }
  input RepositoryInput {
    owner: String!
    name: String!
  }
`
