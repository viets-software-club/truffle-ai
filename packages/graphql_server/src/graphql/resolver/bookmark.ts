import {
  bookmarkIsAlreadyInDB,
  checkAndUpdateProjectBookmarkedState,
  insertBookmark
} from '../../supabaseUtils'
import { BOOKMARK_ALREADY_EXISTS_RESPONSE } from '../commonResponses'

/**
 * Bookmarks a projects for a user.
 * @param {string} userID - The user ID of the user in question.
 * @param {string} projectID - The project ID of the project in question.
 * @param {string} category - The category the bookmark should be added to.
 */
// @TODO: if the project is not trending or bookmarked the data should be updated, because it might be stale
// projects can be bookmarked even if not trending, f.e. if they are added manually
export const addBookmark = async (userID: string, projectID: string, category: string) => {
  if (await bookmarkIsAlreadyInDB(userID, projectID)) {
    return BOOKMARK_ALREADY_EXISTS_RESPONSE
  }

  const insertionError = await insertBookmark(projectID, userID, category)
  await checkAndUpdateProjectBookmarkedState(projectID)
  return insertionError
    ? insertionError
    : {
        code: '201'
      }
}
