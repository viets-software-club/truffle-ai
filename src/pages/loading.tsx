/* eslint-disable no-console */
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Loading = () => {
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer)
          // eslint-disable-next-line no-void
          void router.push('/')
          return 100
        }
        return oldProgress + 0.5
      })
    }, 10)

    return () => {
      clearInterval(timer)
    }
  })

  return (
    <main className={`${inter.className} flex min-h-screen flex-col`}>
      <div className="flex grow flex-col items-center justify-between bg-radial-gradient">
        <div />
        <div className="flex flex-col items-center">
          <div className="mb-4 text-36 font-semibold text-gray-100">TruffleAI</div>
          <div className="h-1 w-48 overflow-hidden rounded-full bg-gray-800">
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-gray-500 transition-all ease-out"
            />
          </div>
        </div>
        <div className="self-center pb-4 text-12 text-gray-300">© 2023 La Famiglia x Rostlab</div>
      </div>
    </main>
  )
}
export default Loading
