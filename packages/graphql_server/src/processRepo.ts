import supabase from './supabase'
import { aggregateDataForRepo } from './dataAggregation'
import { ProjectInsertion } from '../types/dataAggregation'

/**
 * Initiates the processing of a repo. It first checks whether the repo is already in the database.
 * If not it lets the data aggregation process run and then inserts the repo into the database.
 * @param {string} name - The name of the repo.
 * @param {owner} owner - The name of the owner of the repo.
 */
export const processRepo = async (name: string, owner: string) => {
  // if it is in the database already nothing has to be done with this repo
  if (await repoIsAlreadyInDB(name, owner)) {
    console.log(name, 'owned by', owner, 'is already in the database')
    return
  }

  // aggregate all the data for the repo
  const repoInfo: ProjectInsertion | null = await aggregateDataForRepo(name, owner)

  // insert the repo into the database
  if (repoInfo) {
    const { error: insertionError } = await supabase.from('project').insert([repoInfo])
    insertionError &&
      console.log(
        'Error while inserting ',
        name,
        'owned by',
        owner,
        ' \n Error: \n ',
        insertionError
      )
    !insertionError && console.log('Inserted ', name, 'owned by', owner)
  }
}

/**
 * Checks if the repo is already in the db.
 * @param {string} name - The name  of the repo.
 * @param {string} b - The name of the owner of the repo.
 * @returns {boolean} True if the repo is already in the db.
 */
const repoIsAlreadyInDB = async (name: string, owner: string) => {
  // check if there are repositories with the same name
  const { data: matchingRepos, error: checkRepoIfRepoInDBError } = await supabase
    .from('project')
    .select('*')
    .eq('name', name)
  checkRepoIfRepoInDBError &&
    console.error(
      'Error while checking if',
      name,
      'is in the database: \n',
      checkRepoIfRepoInDBError
    )
  // if there are no repositories with the same name return false
  if (!matchingRepos) return false

  // for each of those with the same name check if the owner has the same name
  for (const repo of matchingRepos) {
    const { data: currentOrg } = await supabase
      .from('organization')
      .select('*')
      .eq('id', repo.owned_by)

    // the owner has the same name -> the repo is already in the database
    // atm also checks whether the owner is vercel because vercel is inserted whenever the owner is a user not a organization
    if (currentOrg?.[0]?.login !== 'vercel' && currentOrg?.[0]?.login === owner) return true
  }

  return false
}
