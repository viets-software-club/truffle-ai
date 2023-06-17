import { IFieldResolver, MercuriusContext } from 'mercurius'
import { insertProject, parseGitHubUrl } from '../processRepo'

const resolvers = {
  Query: {
    helloWorld: () => 'Hello world!'
  },
  Mutation: {
    // takes in variables. Parent object _parent is never used
    addProjectByName: async (
      _parent: unknown,
      { name, owner }: { name: string; owner: string }
    ) => {
      return await insertProject(name, owner, null)
    },
    // takes in variables. Parent object _parent is never used
    addProjectByUrl: async (_parent: unknown, { url }: { url: string }) => {
      const urlParts = parseGitHubUrl(url)
      if (urlParts === null) {
        return false
      } else {
        return await insertProject(urlParts.repo, urlParts.owner, null)
      }
    },
    addBookmark: (
      _parent: unknown,
      { projectID, category }: { projectID: string; category: string },
      context: MercuriusContext
    ) => {
      if (!context.user) {
        return false
      }
      const userID = context.user?.id
      // @Todo: add bookmark
    }
  }
}

export default resolvers
