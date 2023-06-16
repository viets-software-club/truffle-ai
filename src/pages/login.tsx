import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { Inter } from 'next/font/google'
import { AiOutlineGoogle } from 'react-icons/ai'
import { useUser, useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react'
import Button from '@/components/pure/Button'
import ErrorComponent from '@/components/pure/Error'
import Loading from '@/components/pure/Loading'
import { signInWithGoogle, signInWithPassword } from '@/util/login'

const inter = Inter({ subsets: ['latin'] })

const Login = () => {
  const [isError, setIsError] = useState(false)
  const user = useUser()
  const router = useRouter()
  const supabaseClient = useSupabaseClient()
  const { isLoading } = useSessionContext()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const nativeEvent = e.nativeEvent as typeof e.nativeEvent & {
      submitter: HTMLButtonElement
    }
    const formElements = e.currentTarget.elements as typeof e.currentTarget.elements & {
      provider: HTMLButtonElement
      email: HTMLInputElement
      password: HTMLInputElement
    }
    if (nativeEvent.submitter.value === 'google')
      signInWithGoogle(supabaseClient).catch(() => {
        setIsError(true)
      })
    else if (nativeEvent.submitter.value === 'email') {
      signInWithPassword(
        supabaseClient,
        formElements.email.value,
        formElements.password.value
      ).catch(() => {
        setIsError(true)
      })
    }
  }

  if (user) void router.replace('/')

  if (isLoading) return <Loading />

  return (
    <main className={`${inter.className} flex min-h-screen flex-col`}>
      {isError ? (
        <ErrorComponent title="Error" message="Something went wrong. Please try again." />
      ) : (
        <div className="flex grow flex-col items-center justify-between bg-radial-gradient">
          <div />

          <form
            method="post"
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-4"
          >
            <div className="mb-4 text-36 font-semibold text-gray-100">Welcome to TruffleAI</div>
            <Button
              name="provider"
              value="google"
              type="submit"
              text="Continue with Google"
              Icon={AiOutlineGoogle}
              order="ltr"
              iconColor="white"
              textColor="white"
              variant="highlighted"
            />
            <input placeholder="email" name="email" type="email" />
            <input placeholder="password" name="password" type="password" />
            <Button
              text="Login"
              variant="highlighted"
              type="submit"
              name="provider"
              value="email"
            />
          </form>

          <div className="self-center pb-4 text-12 text-gray-300">© 2023 La Famiglia x Rostlab</div>
        </div>
      )}
    </main>
  )
}

export default Login
