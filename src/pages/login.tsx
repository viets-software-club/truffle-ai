import { useState } from 'react'
import { useRouter } from 'next/router'
import { Inter } from 'next/font/google'
import { AiOutlineGoogle } from 'react-icons/ai'
import { useUser, useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react'
import Button from '@/components/pure/Button'
import Error from '@/components/pure/Error'
import Loading from '@/components/pure/Loading'

const inter = Inter({ subsets: ['latin'] })

/**
 * Get the correct URL based on the environment
 * @returns {string} The correct base URL for the application
 */
const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // prod URL
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // automatically set by Vercel
    'http://localhost:3000/' // dev URL

  // include `https://` when not localhost
  url = url.includes('http') ? url : `https://${url}`

  // make sure to include trailing `/`
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`

  return url
}

const redirectURL = getURL()

/**
 * Login component. Displays a Google login button and handles the Google OAuth login flow.
 * @returns {JSX.Element} The rendered component
 */
const Login = () => {
  const [isError, setIsError] = useState(false)
  const user = useUser()
  const router = useRouter()
  const supabaseClient = useSupabaseClient()
  const { isLoading } = useSessionContext()

  /**
   * Handle sign-in with Google.
   * @async
   * @returns {Promise<void>} A promise that resolves when the sign-in attempt is complete.
   */
  async function signInWithGoogle() {
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: redirectURL
      }
    })

    if (error) {
      setIsError(true)
    }
  }

  const handleSignInWithGoogle = () => {
    signInWithGoogle().catch(() => setIsError(true))
  }

  // If a user is logged in, redirect them to the home page
  if (user) void router.replace('/')

  // Show loading spinner if session state is still loading
  if (isLoading) return <Loading />

  return (
    <main className={`${inter.className} flex min-h-screen flex-col`}>
      {isError ? (
        <Error title="Error" message="Something went wrong. Please try again." />
      ) : (
        <div className="flex grow flex-col items-center justify-between bg-radial-gradient">
          <div />

          <div className="flex flex-col items-center space-y-4">
            <div className="mb-4 text-36 font-semibold text-gray-100">Welcome to TruffleAI</div>
            <Button
              text="Continue with Google"
              Icon={AiOutlineGoogle}
              order="ltr"
              iconColor="white"
              textColor="white"
              onClick={handleSignInWithGoogle}
              variant="highlighted"
            />
          </div>

          <div className="self-center pb-4 text-12 text-gray-300">© 2023 La Famiglia x Rostlab</div>
        </div>
      )}
    </main>
  )
}

export default Login
