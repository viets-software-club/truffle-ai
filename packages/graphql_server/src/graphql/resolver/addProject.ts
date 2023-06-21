import supabase from '../../supabase'
import {
  getOrganizationID,
  getPersonID,
  getProjectID,
  repoIsAlreadyInDB
} from '../../supabaseUtils'
import { updateAllProjectInfo } from '../../updateProject'
import { REPO_ALREADY_IN_DB_RESPOSE } from '../commonResponses'
import { addBookmark } from './bookmark'

export const addProject = async (
  repoName: string,
  owner: string,
  userID: string,
  bookmarkCategory: string
) => {
  if (await repoIsAlreadyInDB(repoName, owner)) {
    return REPO_ALREADY_IN_DB_RESPOSE
  } else {
    const { error: insertionError } = await supabase.from('project').insert({
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
        code: '201'
      }
    }
  }
}
