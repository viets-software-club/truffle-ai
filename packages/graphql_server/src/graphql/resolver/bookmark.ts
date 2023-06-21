import { bookmarkIsAlreadyInDB, insertBookmark } from '../../supabaseUtils'

export const addBookmark = async (userID: string, projectID: string, category: string) => {
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
        code: '201'
      }
}
