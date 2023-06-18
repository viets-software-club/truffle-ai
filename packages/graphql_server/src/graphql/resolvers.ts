import { exposeProjectsData } from './resolver/projects'
import { createProject } from '../dbUpdater'
import { parseGitHubUrl } from '../utils'

const resolvers = {
  Query: {
    helloWorld: () => 'Hello world!',
    allProjects: async () => {
      return await exposeProjectsData()
    }
  },
  Mutation: {
    // takes in variables. Parent object _ is never used
    addProjectByName: async (_: unknown, { name, owner }: { name: string; owner: string }) => {
      return await createProject(name, owner, null)
    },
    // takes in variables. Parent object _ is never used
    addProjectByUrl: async (_: unknown, { url }: { url: string }) => {
      const urlParts = parseGitHubUrl(url)
      if (urlParts === null) {
        return false
      } else {
        return await createProject(urlParts.repo, urlParts.owner, null)
      }
    }
  }
}

export default resolvers
