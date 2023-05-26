import { Inter } from 'next/font/google'
import Button from '@/components/pure/Button'
import { AiOutlineGoogle } from 'react-icons/ai'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
const Login = () => {
  const user = useUser()
  const supabaseClient = useSupabaseClient()
  const [isError, setIsError] = useState(false)

  async function signInWithGoogle() {
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: 'google'
    })
    if (error) {
      setIsError(true)
    }
  }

  const handleSignInWithGoogle = () => {
    signInWithGoogle().catch(() => setIsError(true))
  }

  if (isError) {
    return (
      <main className={`${inter.className} flex min-h-screen flex-col`}>
        <div className="flex grow flex-col items-center justify-between bg-radial-gradient">
          <div />
          <div className="flex flex-col items-center space-y-4">
            <div className="mb-4 text-36 font-semibold text-gray-100">Welcome to TruffleAI</div>
            <div>
              There was an error signing you in with Google. Please try again later or contact an
              admin.
            </div>
          </div>
          <div className="self-center pb-4 text-12 text-gray-300">© 2023 La Famiglia x Rostlab</div>
        </div>
      </main>
    )
  }

  return (
    <main className={`${inter.className} flex min-h-screen flex-col`}>
      <div className="flex grow flex-col items-center justify-between bg-radial-gradient">
        <div />
        <div className="flex flex-col items-center space-y-4">
          <div className="mb-4 text-36 font-semibold text-gray-100">Welcome to TruffleAI</div>
          {user ? (
            <p>You are already logged in.</p>
          ) : (
            <Button
              text="Continue with Google"
              Icon={AiOutlineGoogle}
              order="ltr"
              iconColor="white"
              textColor="white"
              onClick={handleSignInWithGoogle}
              variant="highlighted"
            />
          )}
        </div>
        <div className="self-center pb-4 text-12 text-gray-300">© 2023 La Famiglia x Rostlab</div>
      </div>
    </main>
  )
}

export default Login
