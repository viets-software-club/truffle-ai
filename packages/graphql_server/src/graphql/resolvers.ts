import { createProject } from '../dbUpdater'
import { parseGitHubUrl } from '../utils'
import { MercuriusContext } from 'mercurius'

const resolvers = {
  Query: {
    helloWorld: () => 'Hello world!'
  },
  Mutation: {
    // takes in variables. Parent object _ is never used
    addProjectByName: async (_: unknown, { name, owner }: { name: string; owner: string }) => {
      return await createProject(name, owner, null)
    },
    // takes in variables. Parent object _parent is never used
    addProjectByUrl: async (_parent: unknown, { url }: { url: string }) => {
      const urlParts = parseGitHubUrl(url)
      if (urlParts === null) {
        return false
      } else {
        return await createProject(urlParts.repo, urlParts.owner, null)
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
    }
  }
}

export default resolvers
