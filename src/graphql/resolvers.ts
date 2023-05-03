type GitRepositoryQueryArgs = {
  id: string;
};
type GitRepositoriesQueryArgs = {
  id: string;
};

const repositories = [
  {
    id: "1",
    name: "Repo1",
    stars: 5,
    contributors: ["pczern", "coder"],
  },
  {
    id: "2",
    name: "Repo2",
    stars: 3,
    contributors: ["pczern", "coder"],
  },
];

const resolvers = {
  Query: {
    // see https://graphql.org/learn/execution/
    gitRepository: async (obj: any, { id }: GitRepositoryQueryArgs) =>
      repositories.find((r) => r.id === id) ?? [],
    gitRepositories: async (obj: any, query: GitRepositoriesQueryArgs) =>
      repositories,
  },
};

export default resolvers;
