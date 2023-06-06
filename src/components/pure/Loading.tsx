import Image from 'next/image'
import * as Logo from '@/assets/logo.svg'

type LoadingProps = {
  message?: string
}
/**
 * Simple loading component with logo and customizable message
 */
const Loading = ({ message }: LoadingProps) => (
  <div className="flex h-screen grow flex-col items-center justify-between">
    <div />

    <div className="flex flex-col items-center">
      <Image src={Logo} alt="logo" className="h-10 w-10" />
      <p className="pt-6">{message || 'Loading...'}</p>
    </div>

    <div className="self-center pb-4 text-12 text-gray-300">© 2023 La Famiglia x Rostlab</div>
  </div>
)

Loading.defaultProps = {
  message: null
}

export default Loading
