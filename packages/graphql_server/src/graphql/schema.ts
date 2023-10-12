// see https://graphql.org/learn/schema/
const schema = `
  type Query {
    helloWorld: String!
    }
  type Mutation {
    addProjectByName(name: String!, owner: String!, bookmarkCategory: String!): Response!
    addProjectByUrl(url: String!, bookmarkCategory: String!): Response!
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
