import { Inter } from 'next/font/google'
import Button from '@/components/pure/Button'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
const Logout = () => {
  const user = useUser()
  const supabaseClient = useSupabaseClient()
  const [isError, setIsError] = useState(false)

  async function signOut() {
    await supabaseClient.auth.signOut().catch(() => setIsError(true))
  }

  if (isError) {
    return (
      <main className={`${inter.className} flex min-h-screen flex-col`}>
        <div className="flex grow flex-col items-center justify-between bg-radial-gradient">
          <div />
          <div className="flex flex-col items-center space-y-4">
            <div className="mb-4 text-36 font-semibold text-gray-100">Welcome to TruffleAI</div>
            <div>
              There was an error signing you out. Please try again later or contact an admin.
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
            <Button
              text="Logout"
              textColor="white"
              onClick={() => {
                signOut().catch(() => setIsError(true))
              }}
              variant="normal"
            />
          ) : (
            <div>You are already logged out.</div>
          )}
        </div>
        <div className="self-center pb-4 text-12 text-gray-300">© 2023 La Famiglia x Rostlab</div>
      </div>
    </main>
  )
}

export default Logout
