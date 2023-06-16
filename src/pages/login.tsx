/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { Inter } from 'next/font/google'
import { AiOutlineGoogle } from 'react-icons/ai'
import { BiLogInCircle } from 'react-icons/bi'
import { useUser, useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react'
import Button from '@/components/pure/Button'
import ErrorComponent from '@/components/pure/Error'
import Loading from '@/components/pure/Loading'
import { signInWithGoogle, signInWithPassword } from '@/util/login'

const inter = Inter({ subsets: ['latin'] })

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

  // If a user is logged in, redirect them to the home page
  if (user) void router.replace('/')

  // Show loading spinner if session state is still loading
  if (isLoading) return <Loading />

  return (
    <main className={`${inter.className} flex min-h-screen flex-col bg-radial-gradient`}>
      {isError ? (
        <ErrorComponent title="Error" message="Something went wrong. Please try again." />
      ) : (
        <>
          <div className="flex w-full grow justify-center">
            <form
              method="post"
              onSubmit={handleSubmit}
              className="flex flex-col items-center justify-center space-y-4"
            >
              <div className="mb-4 text-36 font-semibold text-gray-100">Welcome to TruffleAI</div>
              <div className="flex w-[13rem] flex-col justify-center">
                <input
                  className="mb-4 block w-full border-b border-solid border-b-indigo-500 bg-transparent font-inter text-gray-100 placeholder-[#8c8fd9]/70 outline-none"
                  placeholder="your-name@lafamiglia.vc"
                  name="email"
                  type="email"
                />
                <input
                  className="mb-6 block w-full border-b border-solid border-b-indigo-500 bg-transparent font-inter text-gray-100 placeholder-[#8c8fd9]/70 outline-none"
                  placeholder="password"
                  name="password"
                  type="password"
                />
                <div className="flex">
                  <Button
                    Icon={BiLogInCircle}
                    order="ltr"
                    text="Login"
                    variant="highlighted"
                    type="submit"
                    name="provider"
                    value="email"
                    textColor="text-white"
                    iconColor="text-white"
                    className="px-3 font-normal"
                  />
                  <span className="mx-2 mt-1 align-middle text-sm text-gray-200">or</span>
                  <Button
                    name="provider"
                    value="google"
                    type="submit"
                    Icon={AiOutlineGoogle}
                    order="ltr"
                    iconColor="text-white"
                    textColor="text-white"
                    variant="onlyIcon"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="self-center pb-4 text-12 text-gray-300">© 2023 La Famiglia x Rostlab</div>
        </>
      )}
    </main>
  )
}

export default Login
