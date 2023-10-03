import { validateEmail, validatePassword } from '@/util/validate'
import { SupabaseClient } from '@supabase/auth-helpers-react'

const redirectUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/`

export const signInWithGoogle = async (supabaseClient: SupabaseClient) => {
  const { error } = await supabaseClient.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: redirectUrl
    }
  })

  if (error) throw error
}

export const signInWithPassword = async (
  supabaseClient: SupabaseClient,
  email: string,
  password: string
) => {
  if (!validateEmail(email)) throw new Error("Couldn't validate email")
  if (!validatePassword(password)) throw new Error("Couldn't validate password")

  const { error } = await supabaseClient.auth.signInWithPassword({
    email,
    password
  })

  if (error) throw error
}
