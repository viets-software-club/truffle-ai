import Logo from '@/components/pure/Icons/Logo'

type LoadingProps = {
  message?: string
}
/**
 * Simple loading component that displays a logo and a customizable message
 * @param {LoadingProps} props - The properties for this component.
 * @returns {React.Element} The loading element.
 */
const Loading = ({ message }: LoadingProps) => (
  <div className="flex h-screen grow flex-col items-center justify-between text-gray-300">
    <div />

    <div className="flex flex-col items-center">
      <Logo className="h-10 w-10" />
      <p className="pt-6">{message || 'Loading...'}</p>
    </div>

    <div className="self-center pb-4 text-12">© 2023 La Famiglia x Rostlab</div>
  </div>
)

Loading.defaultProps = {
  message: null
}

export default Loading
