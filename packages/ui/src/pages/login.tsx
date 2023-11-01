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
    <main className='flex min-h-screen flex-col items-center justify-center bg-radial-gradient'>
      <div className='flex w-[300px] flex-col items-center justify-center gap-6'>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <Image src={Logo} alt='Logo' className='h-10 w-10' />

        <h1 className='text-xl font-medium text-gray-100'>Log in to Truffle</h1>

        <Button
          onClick={handleGoogleLogin}
          variant='highlighted'
          className='w-full justify-center py-3 text-white'>
          <AiOutlineGoogle />
          Continue with Google
        </Button>

        {error === 'invalid_email' && (
          <div className='text-center text-sm text-red-500'>
            Invalid google email or password. Please note that only invited users or La Famiglia
            employees can sign in.
          </div>
        )}

        <hr className='w-full border-b-[.5px] border-gray-100/10' />

        <LoginForm handleSubmit={handleSubmit} loading={loading} error={isError} />
      </div>

      <div className='absolute bottom-4 self-center text-xs text-gray-300'>
        © 2023 La Famiglia x Rostlab
      </div>
    </main>
  )
}

export default Login
