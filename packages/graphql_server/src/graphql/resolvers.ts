import { IFieldResolver, MercuriusContext } from 'mercurius'
import { insertProject, parseGitHubUrl } from '../processRepo'

const resolvers = {
  Query: {
    helloWorld: () => 'Hello world!'
  },
  Mutation: {
    // takes in variables. Parent object _ is never used
    addProjectByName: async (_: unknown, { name, owner }: { name: string; owner: string }) => {
      return await insertProject(name, owner, null)
    },
    // takes in variables. Parent object _ is never used
    addProjectByUrl: async (_: unknown, { url }: { url: string }) => {
      const urlParts = parseGitHubUrl(url)
      if (urlParts === null) {
        return false
      } else {
        return await insertProject(urlParts.repo, urlParts.owner, null)
      }
    },
    bookmarkProject: (
      _parent: unknown,
      { projectID, category }: { projectID: string; category: string },
      context: MercuriusContext
    ) => {
      console.log('hallo')
      context.user
    }
  }
}

export default resolvers
