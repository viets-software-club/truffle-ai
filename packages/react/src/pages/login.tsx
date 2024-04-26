import { FormEvent, useState } from 'react'
import { AiOutlineGoogle } from 'react-icons/ai'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {
	useUser,
	useSessionContext,
	useSupabaseClient
} from '@supabase/auth-helpers-react'
import Logo from '@/assets/logo.svg'
import LoginForm from '@/components/pure/LoginForm'
import Button from '@/components/pure/Button'
import Loading from '@/components/pure/LoadingSpinner'
import { signInWithGoogle, signInWithPassword } from '@/util/login'

/**
 * Login component. Displays a Google login button and handles the Google OAuth login flow.
 */ s
const Login = () => {
	const user = useUser()
	const router = useRouter()
	const { error } = router.query
	const supabaseClient = useSupabaseClient()
	const { isLoading: sessionLoading } = useSessionContext()

	const [passwordError, setPasswordError] = useState(false)
	const [googleError, setGoogleError] = useState(error !== undefined)

	const handleLogin = async (
		type: 'google' | 'email',
		email?: string,
		password?: string
	) => {
		try {
			setPasswordError(false)
			setGoogleError(false)

			switch (type) {
				case 'google':
					await signInWithGoogle(supabaseClient)
					break
				case 'email':
					if (email && password)
						await signInWithPassword(supabaseClient, email, password)
					break
				default:
					throw new Error('Invalid login type')
			}
		} catch (error) {
			console.error(error)
			setPasswordError(true)
		}
	}

	const handleGoogleLogin = () => {
		void handleLogin('google')
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log('hm2')

		const formElements = e.currentTarget
			.elements as typeof e.currentTarget.elements & {
			email: HTMLInputElement
			password: HTMLInputElement
		}

		void handleLogin(
			'email',
			formElements.email.value,
			formElements.password.value
		)
	}

	// If a user is logged in, redirect them to the home page
	if (user) void router.push('/')

	// Show loading spinner if session state is still loading
	if (sessionLoading) return <Loading fullscreen />

	return !user ? (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-tr from-gray-900 to-indigo-500/30">
			<div className="flex w-full max-w-sm flex-col items-center justify-center gap-8 border-white/5 px-6 py-10 md:w-[400px] md:max-w-none md:rounded-2xl md:border md:bg-white/5 md:px-8 md:backdrop-blur-xl">
				{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
				<Image src={Logo} alt="Logo" className="h-10 w-10" />

				<h1 className="text-2xl font-bold text-white/90">Welcome to Truffle</h1>

				<Button
					onClick={handleGoogleLogin}
					variant="highlighted"
					size="xl"
					className="w-full justify-center"
				>
					<AiOutlineGoogle />
					Continue with Google
				</Button>

				{googleError && (
					<div className="text-center text-sm text-red-400">
						Invalid google email or password. Please note that only invited
						users or La Famiglia employees can sign in.
					</div>
				)}

				<div className="flex w-full items-center gap-3">
					<div className="h-0.5 w-full bg-white/5" />
					<p className="shrink-0 text-center text-sm text-white/50">
						or log in with email
					</p>
					<div className="h-0.5 w-full bg-white/5" />
				</div>

				<LoginForm handleSubmit={handleSubmit} error={passwordError} />
			</div>

			<div className="absolute bottom-4 self-center text-sm text-white/60">
				© {new Date().getFullYear()} La Famiglia
			</div>
		</main>
	) : null
}

export default Login
