// see https://graphql.org/learn/schema/
const schema = `
  type Query {
    helloWorld: String!
  }
  type Mutation {
    addProjectByName(name: String!, owner: String!): Boolean!
    addProjectByUrl(url: String!): Boolean!
    addBookmark(projectID: String!, category: String!): Error!
  }
  type Error {
      message: String
      details: String
      hint: String
      code: String!
  }
  }
`

export default schema
