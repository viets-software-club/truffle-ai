import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Logout = () => {
  const supabaseClient = useSupabaseClient()
  const router = useRouter()

  useEffect(() => {
    void supabaseClient.auth.signOut().then(() => router.replace('/login'))
  }, [])
}

export default Logout
