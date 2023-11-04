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
  <div className='flex h-screen grow flex-col items-center justify-between'>
    <div />

    <div className='flex flex-col items-center gap-4'>
      <p className='text-4xl font-semibold text-white/90'>{title}</p>
      <p className='text-white/75'>{message}</p>
    </div>

    <div className='self-center pb-4 text-xs text-white/75'>© 2023 La Famiglia x Rostlab</div>
  </div>
)

export default Error
