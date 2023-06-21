import Logo from '@/components/pure/Icons/Logo'

type LoadingProps = {
  message?: string
  fullscreen?: boolean
}
/**
 * Simple loading component that displays a logo and a customizable message
 * @param {LoadingProps} props - The properties for this component.
 * @returns {React.Element} The loading element.
 */
const Loading = ({ message, fullscreen }: LoadingProps) => (
  <div
    className={`flex ${
      fullscreen ? 'h-screen' : 'py-40'
    } grow flex-col items-center justify-center text-gray-300`}
  >
    <Logo className="h-10 w-10" />
    <p className="pt-6">{message || 'Loading...'}</p>
  </div>
)

Loading.defaultProps = {
  message: null,
  fullscreen: false
}

export default Loading
