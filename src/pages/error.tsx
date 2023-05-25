import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Error = () => (
  <main className={`${inter.className} flex min-h-screen flex-col`}>
    <div className="flex grow flex-col items-center justify-between bg-radial-gradient">
      <div />
      <div className="flex flex-col items-center">
        <p className="mb-4 text-36 font-semibold text-gray-100">TruffleAI</p>
        <p>Something went wrong. Tough luck, you sucker!</p>
      </div>
      <div className="self-center pb-4 text-12 text-gray-300">© 2023 La Famiglia x Rostlab</div>
    </div>
  </main>
)
export default Error
