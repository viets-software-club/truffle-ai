import { Inter } from 'next/font/google'
import Button from '@/components/pure/Button'
import { AiOutlineGoogle } from 'react-icons/ai'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

const inter = Inter({ subsets: ['latin'] })
const Login = () => {
  const user = useUser()
  const supabaseClient = useSupabaseClient()

  async function signInWithGoogle() {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: 'google'
    })
    if (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    } else {
      // eslint-disable-next-line no-console
      console.log(data)
    }
  }

  async function signOut() {
    await supabaseClient.auth.signOut()
  }

  return (
    <main className={`${inter.className} flex min-h-screen flex-col`}>
      <div className="flex grow flex-col items-center justify-between bg-radial-gradient">
        <div />
        <div className="flex flex-col items-center space-y-4">
          <div className="mb-4 text-36 font-semibold text-gray-100">Welcome to TruffleAI</div>
          {user ? (
            <Button
              text="Logout"
              textColor="white"
              onClick={() => {
                // eslint-disable-next-line no-console
                signOut().catch((err) => console.error(err))
              }}
              variant="normal"
            />
          ) : (
            <Button
              text="Continue with Google"
              Icon={AiOutlineGoogle}
              order="ltr"
              iconColor="white"
              textColor="white"
              onClick={() => {
                // eslint-disable-next-line no-console
                signInWithGoogle().catch((err) => console.error(err))
              }}
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
