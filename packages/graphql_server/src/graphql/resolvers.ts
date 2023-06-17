import { createProject } from '../dbUpdater'
import { bookmarkIsAlreadyInDB, insertBookmark } from '../supabaseUtils'
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
    addBookmark: async (
      _parent: unknown,
      { projectID, category }: { projectID: string; category: string },
      context: MercuriusContext
    ) => {
      if (!context.user) {
        return {
          message: 'The graphQL resolver did not receive a valid user.',
          code: '400',
          hint: 'Are you loggedIn?'
        }
      }
      const userID = context.user?.id
      if (await bookmarkIsAlreadyInDB(userID, projectID)) {
        return {
          message: 'This bookmark is already in the database.',
          code: '409'
        }
      }
      return await insertBookmark(userID, projectID, category)
    }
  }
}

export default resolvers
