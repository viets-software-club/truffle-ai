// see https://graphql.org/learn/schema/
const schema = `
  type Query {
    helloWorld: String!
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
`

export default schema
