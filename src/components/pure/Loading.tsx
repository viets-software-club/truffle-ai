import Logo from '@/components/pure/Icons/Logo'

type LoadingProps = {
  message?: string
}
/**
 * A simple loading component that displays a logo and a customizable message.
 * @param {LoadingProps} props - The properties for this component.
 * @returns {React.Element} The loading element.
 */
const Loading = ({ message }: LoadingProps) => (
  <div className="flex h-screen grow flex-col items-center justify-between">
    <div />

    <div className="flex flex-col items-center">
      <Logo className="h-10 w-10" />
      <p className="pt-6">{message || 'Loading...'}</p>
    </div>

    <div className="self-center pb-4 text-12 text-gray-300">© 2023 La Famiglia x Rostlab</div>
  </div>
)

Loading.defaultProps = {
  message: null
}

export default Loading
