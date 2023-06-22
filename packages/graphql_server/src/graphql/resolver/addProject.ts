import supabaseClient from '../../supabaseClient'
import {
  getOrganizationID,
  getPersonID,
  getProjectID,
  repoIsAlreadyInDB
} from '../../supabaseUtils'
import { updateAllProjectInfo } from '../../updateProject'
import { REPO_ALREADY_IN_DB_RESPOSE } from '../commonResponses'
import { addBookmark } from './bookmark'

/**
 * Adds a project to the database and bookmarks it for the specified user.
 * Will not await the fetching of information about the project.
 * Should usually be called from a addProjectBy<> resolver.
 * @param {string} repoName - The name of the repo.
 * @param {string} owner - The name of the owner of the repo.
 * @param {string} userID - The user ID of the user in question.
 * @param {string} bookmarkCategory - The category the bookmark should be added to. Not named 'category' because it might not be apparent why an addition needs a category.
 */
export const addProject = async (
  repoName: string,
  owner: string,
  userID: string,
  bookmarkCategory: string
) => {
  if (await repoIsAlreadyInDB(repoName, owner)) {
    return REPO_ALREADY_IN_DB_RESPOSE
  } else {
    const { error: insertionError } = await supabaseClient.from('project').insert({
      name: repoName,
      owning_organization: await getOrganizationID(owner),
      owning_person: await getPersonID(owner)
    })
    if (insertionError) {
      return insertionError
    } else {
      // update all the data sources. trending state may be null
      // no await so that the return happens faster
      void updateAllProjectInfo(repoName, owner, null)

      // add the repo as bookmark immediately
      const projectID = await getProjectID(repoName, owner)
      if (!projectID)
        return {
          code: '500',
          message: 'The project might have been added, but it could not be bookmarked.'
        }
      void addBookmark(userID, projectID, bookmarkCategory)
      return {
        code: '201',
        message: 'The project was added and bookmarked. We are fetching data for it now.'
      }
    }
  }
}
