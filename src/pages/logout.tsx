import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

/**
 * Logs out user and redirects them to the login page
 */
const Logout = () => {
  const supabaseClient = useSupabaseClient()
  const router = useRouter()

  useEffect(() => {
    // Sign the user out using the Supabase client
    // Upon successful signout, replace the current page with the login page

    void supabaseClient.auth.signOut().then(() => router.replace('/login'))
  }, [])
}

export default Logout