import clsx from 'clsx'

type BannerProps = {
  message: string
  variant?: 'error' | 'success'
  show: boolean
}

const Banner = ({ message, variant = 'success', show }: BannerProps) => {
  const variantClasses = {
    error: 'border-red-400/50 bg-red-400/70',
    success: 'border-green-500/50 bg-green-500/90'
  }

  return (
    <div
      className={clsx(
        'fixed left-1/2 z-50 w-[90%] -translate-x-1/2 rounded-md border px-5 py-3 text-center text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 sm:w-auto',
        variantClasses[variant],
        show ? 'visible top-6 opacity-100' : 'invisible -top-6 opacity-0'
      )}>
      {message}
    </div>
  )
}

export default Banner
