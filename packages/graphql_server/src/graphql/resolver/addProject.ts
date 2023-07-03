import { PostgrestError } from '@supabase/supabase-js'
import { updateProjectDaily } from '../../dbUpdater'
import supabaseClient from '../../supabaseClient'
import {
  getOrganizationID,
  getPersonID,
  getProjectID,
  repoIsAlreadyInDB
} from '../../supabaseUtils'
import { updateAllProjectInfo } from '../../updateProject'
import { INTERNAL_SERVER_ERROR, REPO_ALREADY_IN_DB_RESPONSE } from '../commonResponses'
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
    const projectID = await getProjectID(repoName, owner)
    if (!projectID) {
      return INTERNAL_SERVER_ERROR
    }

    // no await so that the return happens faster
    void checkIfProjectNeedsToBeUpdated(projectID, repoName, owner)

    const response = await addBookmark(userID, projectID, bookmarkCategory)
    if (response.code === '201') {
      return {
        code: '200',
        message: 'The project was already in the database. We bookmarked it for you.'
      }
    }

    return response
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

/**
 * Checks if a project needs to be updated and updates it if necessary.
 * @param {string} projectID - The ID of the project in question.
 * @param {string} repoName - The name of the repo.
 * @param {string} owner - The name of the owner of the repo.
 * @returns {null | PostgrestError} - Returns null if the project was updated, or a PostgrestError if there were Problems.
 */
const checkIfProjectNeedsToBeUpdated = async (
  projectID: string,
  repoName: string,
  owner: string
) => {
  const { data: project, error } = await supabaseClient
    .from('project')
    .select('is_trending_daily, is_trending_weekly, is_trending_monthly, is_bookmarked')
    .eq('id', projectID)
    .single()

  if (error) {
    return error
  }

  if (
    !project.is_trending_daily &&
    !project.is_trending_weekly &&
    !project.is_trending_monthly &&
    !project.is_bookmarked
  ) {
    await updateProjectDaily({ name: repoName, owner })
  }
}
