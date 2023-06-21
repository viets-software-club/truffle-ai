import supabase from '../../supabase'
import { getOrganizationID, getPersonID, repoIsAlreadyInDB } from '../../supabaseUtils'
import { updateAllProjectInfo } from '../../updateProject'
import { addBookmark } from './bookmark'

export const addProject = async (repoName: string, owner: string, bookmarkCategory: string) => {
  if (await repoIsAlreadyInDB(repoName, owner)) {
    return false
  } else {
    const { error: insertionError } = await supabase.from('project').insert({
      name: repoName,
      owning_organization: await getOrganizationID(owner),
      owning_person: await getPersonID(owner)
    })
    if (insertionError) {
      return false
    } else {
      // update all the data sources. trending state may be null
      // no await so that the return happens faster
      void updateAllProjectInfo(repoName, owner, null)
      void addBookmark(repoName, owner, bookmarkCategory)
      return true
    }
  }
}
