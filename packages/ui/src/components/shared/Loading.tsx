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
      'flex items-center justify-center text-white/75',
      fullscreen ? 'h-screen' : 'py-12 lg:py-20'
    )}>
    <LoadingSpinner />
  </div>
)

export default Loading
