import { FormEvent, useState } from 'react'
import { AiOutlineGoogle } from 'react-icons/ai'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useUser, useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react'
import Logo from '@/assets/logo.svg'
import LoginForm from '@/components/domain/login/LoginForm'
import Button from '@/components/shared/Button'
import Loading from '@/components/shared/Loading'
import { signInWithGoogle, signInWithPassword } from '@/util/login'

/**
 * Login component. Displays a Google login button and handles the Google OAuth login flow.
 */
const Login = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  const user = useUser()
  const router = useRouter()
  const { isLoading: sessionLoading } = useSessionContext()
  const supabaseClient = useSupabaseClient()
  const { error } = router.query

  const handleLogin = async (type: 'google' | 'email', email?: string, password?: string) => {
    try {
      setIsError(false)
      setLoading(true)

      switch (type) {
        case 'google':
          await signInWithGoogle(supabaseClient)
          break
        case 'email':
          if (email && password) await signInWithPassword(supabaseClient, email, password)
          break
        default:
          throw new Error('Invalid login type')
      }

      setLoading(false)
    } catch {
      setLoading(false)
      setIsError(true)
    }
  }

  const handleGoogleLogin = () => {
    void handleLogin('google')
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formElements = e.currentTarget.elements as typeof e.currentTarget.elements & {
      email: HTMLInputElement
      password: HTMLInputElement
    }

    void handleLogin('email', formElements.email.value, formElements.password.value)
  }

  // If a user is logged in, redirect them to the home page
  if (user) void router.replace('/')

  // Show loading spinner if session state is still loading
  if (sessionLoading) return <Loading fullscreen />

  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-tr from-gray-900 to-indigo-500/30'>
      <div className='flex w-[400px] flex-col items-center justify-center gap-8 rounded-2xl border border-white/5 bg-white/5 px-8 py-10 backdrop-blur-xl'>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <Image src={Logo} alt='Logo' className='h-10 w-10' />

        <h1 className='text-2xl font-bold text-white/90'>Welcome to Truffle</h1>

        <Button
          onClick={handleGoogleLogin}
          variant='highlighted'
          size='xl'
          className='w-full justify-center'>
          <AiOutlineGoogle />
          Continue with Google
        </Button>

        {error === 'invalid_email' && (
          <div className='text-center text-sm text-red-400'>
            Invalid google email or password. Please note that only invited users or La Famiglia
            employees can sign in.
          </div>
        )}

        <div className='flex w-full items-center gap-3'>
          <div className='h-0.5 w-full bg-white/5' />
          <p className='shrink-0 text-center text-sm text-white/50'>or log in with email</p>
          <div className='h-0.5 w-full bg-white/5' />
        </div>

        <LoginForm handleSubmit={handleSubmit} loading={loading} error={isError} />
      </div>

      <div className='absolute bottom-4 self-center text-sm text-white/60'>
        © {new Date().getFullYear()} La Famiglia
      </div>
    </main>
  )
}

export default Login
