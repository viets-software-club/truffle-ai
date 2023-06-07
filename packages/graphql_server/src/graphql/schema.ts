// see https://graphql.org/learn/schema/
const schema = `
  type Query {
    helloWorld: String!
  }
  type Mutation {
    addProjectByName(name: String!, owner: String!): Boolean!
    addProjectByUrl(url: String!): Boolean!
  }
`

export default schema
