import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'

const Logout = () => {
  const user = useUser()
  const supabaseClient = useSupabaseClient()
  const router = useRouter()

  const signOut = useCallback(async () => {
    await supabaseClient.auth.signOut()
  }, [supabaseClient])

  useEffect(() => {
    if (user) void signOut().then(() => router.replace('/login'))
    else void router.replace('/login')
  }, [user, router, signOut])
}

export default Logout
