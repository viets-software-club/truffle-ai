// see https://graphql.org/learn/schema/
const schema = `
	type GitRepository {
		id: ID!
		name: String!
		stars: Int!
		contributor: [String]!
	}

  type Query {
    gitRepository(id: ID!): GitRepository!
		gitRepositories: [GitRepository]!
  }
`;

export default schema;
