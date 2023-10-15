type ErrorProps = {
  title?: string
  message?: string
}

/**
 * Simple error component with customizable title and message
 */
const Error = ({ title, message }: ErrorProps) => (
  <div className="flex h-screen grow flex-col items-center justify-between">
    <div />

    <div className="flex flex-col items-center">
      <p className="mb-4 text-36 font-semibold text-gray-100">{title}</p>
      <p className="text-gray-200">{message}</p>
    </div>

    <div className="self-center pb-4 text-12 text-gray-300">© 2023 La Famiglia x Rostlab</div>
  </div>
)

Error.defaultProps = {
  title: 'Oops...',
  message: 'Something went wrong, please try again.'
}

export default Error
