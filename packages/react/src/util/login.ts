import { SupabaseClient } from '@supabase/auth-helpers-react'
import { validateEmail, validatePassword } from '@/util/validate'

const redirectUrl =
	typeof window !== 'undefined' ? `${window.location.host}/` : ''

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
	console.log(password)
	if (!validatePassword(password)) {
		throw new Error("Couldn't validate password")
	}

	const { error } = await supabaseClient.auth.signInWithPassword({
		email,
		password
	})

	if (error) throw error
}
