import { useEffect, useState } from 'react'
import clsx from 'clsx'

type BannerProps = {
  message: string
  variant: 'error' | 'success'
}

const Banner = ({ message, variant }: BannerProps) => {
  const [isVisible, setIsVisible] = useState(true)

  const variantClasses = {
    error: 'border-red-400/50 bg-red-400/70',
    success: 'border-green-500/50 bg-green-500/90'
  }

  // Hide banner after 5 seconds (5000 ms)
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 5000)

    return () => clearTimeout(timer)
  }, [])

  return isVisible ? (
    <div
      className={clsx(
        'fixed left-1/2 top-6 z-50 w-[90%] -translate-x-1/2 rounded-md border px-5 py-3 text-center text-sm font-medium text-white backdrop-blur-xl sm:w-auto',
        variantClasses[variant]
      )}>
      {message}
    </div>
  ) : null
}

export default Banner
