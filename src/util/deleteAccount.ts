import { SupabaseClient } from '@supabase/auth-helpers-react'

/**
 * Deletes user account in Supabase
 */
async function deleteAccount(supabaseClient: SupabaseClient) {
  await supabaseClient.rpc('delete_user')
}

export default deleteAccount
