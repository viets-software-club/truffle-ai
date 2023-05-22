import { Inter } from 'next/font/google'
import Button from '@/components/pure/Button'
import { AiOutlineGoogle } from 'react-icons/ai'

const inter = Inter({ subsets: ['latin'] })

const Login = () => (
  <main className={`${inter.className} flex min-h-screen flex-col`}>
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
          onClick={() => null}
          variant="highlighted"
        />
      </div>
      <div className="self-center pb-4 text-12 text-gray-300">© 2023 La Famiglia x Rostlab</div>
    </div>
  </main>
)

export default Login
