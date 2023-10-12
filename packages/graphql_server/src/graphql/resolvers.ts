import {
  bookmarkIsAlreadyInDB,
  checkAndUpdateProjectBookmarkedState,
  deleteBookmark,
  editBookmarkCategory,
  renameBookmarkCategory
} from '../supabaseUtils'
import { parseGitHubUrl } from '../utils'
import { MercuriusContext } from 'mercurius'
import { addProject } from './resolver/addProject'
import { addBookmark } from './resolver/bookmark'
import {
  BAD_URL_RESPONSE,
  BAD_USER_RESPONSE,
  BOOKMARK_DOES_NOT_EXIST_RESPONSE
} from './commonResponses'

//@Todo: refine and refactor response types

const resolvers = {
  Query: {
    helloWorld: () => 'Hello world!'
  },
  Mutation: {
    // takes in variables. Parent object _ is never used
    addProjectByName: async (
      _: unknown,
      { name, owner, bookmarkCategory }: { name: string; owner: string; bookmarkCategory: string },
      context: MercuriusContext
    ) => {
      //Todo: refactor user check
      if (!context.user) {
        return BAD_USER_RESPONSE
      }
      const userID = context.user?.id

      return await addProject(name, owner, userID, bookmarkCategory)
    },
    // takes in variables. Parent object _parent is never used
    addProjectByUrl: async (
      _parent: unknown,
      { url, bookmarkCategory }: { url: string; bookmarkCategory: string },
      context: MercuriusContext
    ) => {
      if (!context.user) {
        return BAD_USER_RESPONSE
      }
      const userID = context.user?.id

      const urlParts = parseGitHubUrl(url)
      if (urlParts === null) {
        return BAD_URL_RESPONSE
      } else {
        return await addProject(urlParts.repo, urlParts.owner, userID, bookmarkCategory)
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

      //includes updating the is_bookmarked state of the project
      return await addBookmark(userID, projectID, category)
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
      await checkAndUpdateProjectBookmarkedState(projectID)
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

      //@Todo: check if category exists -> future improvement cause not crucial atm
      const renameError = await renameBookmarkCategory(userID, oldCategory, newCategory)
      return renameError ? renameError : { code: '204' }
    }
  }
}

export default resolvers
