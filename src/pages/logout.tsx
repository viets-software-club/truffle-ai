import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
/**
 * This is a React functional component called Logout.
 * It uses the Supabase authentication client to sign out the current user and then redirects them to the login page.
 * The action is wrapped in a useEffect React hook to ensure it's executed when the component mounts.
 */
const Logout = () => {
  const supabaseClient = useSupabaseClient()
  const router = useRouter()

  useEffect(() => {
    // The void operator discards any value returned by the promise. It ensures we are not expecting any return value from the Promise
    // Sign the user out using the Supabase client
    // Upon successful signout, replace the current page with the login page

    void supabaseClient.auth.signOut().then(() => router.replace('/login'))
  }, [])
}

export default Logout
