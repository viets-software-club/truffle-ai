import { createProject } from '../dbUpdater'
import {
  bookmarkIsAlreadyInDB,
  deleteBookmark,
  editBookmarkCategory,
  insertBookmark,
  renameBookmarkCategory
} from '../supabaseUtils'
import { parseGitHubUrl } from '../utils'
import { MercuriusContext } from 'mercurius'

//@Todo: refine and refactor response types

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
        return BAD_USER_RESPONSE
      }
      const userID = context.user?.id
      if (await bookmarkIsAlreadyInDB(userID, projectID)) {
        return {
          message: 'This bookmark is already in the database.',
          code: '409'
        }
      }

      const insertionError = await insertBookmark(projectID, userID, category)
      return insertionError
        ? insertionError
        : {
            code: '204'
          }
    },
    deleteBookmark: async (
      _parent: unknown,
      { projectID }: { projectID: string },
      context: MercuriusContext
    ) => {
      if (!context.user) {
        return BAD_USER_RESPONSE
      }

      const userID = context.user?.id

      if (!(await bookmarkIsAlreadyInDB(userID, projectID))) {
        return BOOKMARK_DOES_NOT_EXIST_RESPONSE
      }

      const deletionError = await deleteBookmark(userID, projectID)
      return deletionError ? deletionError : { code: '204' }
    },
    editBookmarkCategory: async (
      _parent: unknown,
      { projectID, newCategory }: { projectID: string; newCategory: string },
      context: MercuriusContext
    ) => {
      if (!context.user) {
        return BAD_USER_RESPONSE
      }

      const userID = context.user?.id

      if (!(await bookmarkIsAlreadyInDB(userID, projectID))) {
        return BOOKMARK_DOES_NOT_EXIST_RESPONSE
      }

      const editError = await editBookmarkCategory(userID, projectID, newCategory)
      return editError ? editError : { code: '204' }
    },
    renameBookmarkCategory: async (
      _parent: unknown,
      { oldCategory, newCategory }: { oldCategory: string; newCategory: string },
      context: MercuriusContext
    ) => {
      if (!context.user) {
        return BAD_USER_RESPONSE
      }

      const userID = context.user?.id

      //@Todo: check if category exists
      const renameError = await renameBookmarkCategory(userID, oldCategory, newCategory)
      return renameError ? renameError : { code: '204' }
    }
  }
}

export default resolvers

const BAD_USER_RESPONSE = {
  message: 'The graphQL resolver did not receive a valid user.',
  code: '400',
  hint: 'Are you loggedIn?'
}

const BOOKMARK_DOES_NOT_EXIST_RESPONSE = {
  message: 'This bookmark does not exist on the database.',
  code: '409'
}
