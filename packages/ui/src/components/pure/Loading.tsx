import LoadingSpinner from './LoadingSpinner'

type LoadingProps = {
  fullscreen?: boolean
}
/**
 * Simple loading component that displays a logo and a customizable message
 * @param {LoadingProps} props - The properties for this component.
 * @returns {React.Element} The loading element.
 */
const Loading = ({ fullscreen }: LoadingProps) => (
  <div
    className={`flex ${
      fullscreen ? 'h-screen' : 'py-40'
    } grow flex-col items-center justify-center text-gray-300`}
  >
    <LoadingSpinner />
  </div>
)

Loading.defaultProps = {
  fullscreen: false
}

export default Loading
