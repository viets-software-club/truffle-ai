import clsx from 'clsx'
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
    className={clsx(
      'flex grow flex-col items-center justify-center text-gray-300',
      fullscreen ? 'h-screen' : 'py-40'
    )}>
    <LoadingSpinner />
  </div>
)

export default Loading
