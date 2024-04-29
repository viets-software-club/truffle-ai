module.exports = `
input RepositoryInput {
  owner: String!
  name: String!
}

type Query {
  helloWorld: String!
}
type Mutation {
  createBookmark(repo: RepositoryInput!, categories: [String!]!): Boolean!
  removeBookmark(projBookmarkId: Int!): Boolean!
  removeBookmarkByProjRepoId(projRepoId: Int!): Boolean!
}
`
