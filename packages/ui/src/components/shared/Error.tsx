type ErrorProps = {
  title?: string
  message?: string
}

/**
 * Simple error component with customizable title and message
 */
const Error = ({
  title = 'Oops...',
  message = 'Something went wrong, please try again.'
}: ErrorProps) => (
  <div className='flex h-[calc(100vh-120px)] flex-col items-center gap-4 pt-[33vh]'>
    <p className='text-4xl font-semibold text-white'>{title}</p>
    <p className='text-white/50'>{message}</p>
  </div>
)

export default Error
