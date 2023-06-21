import supabase from '../../supabase'
import { getOrganizationID, getPersonID, repoIsAlreadyInDB } from '../../supabaseUtils'
import { updateAllProjectInfo } from '../../updateProject'
import { REPO_ALREADY_IN_DB_RESPOSE } from '../commonResponses'
import { addBookmark } from './bookmark'

export const addProject = async (repoName: string, owner: string, bookmarkCategory: string) => {
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
      // add the repo as bookmark immediately
      // no await so that the return happens faster
      void updateAllProjectInfo(repoName, owner, null)
      //void addBookmark(repoName, owner, bookmarkCategory)
      return {
        code: '201'
      }
    }
  }
}
