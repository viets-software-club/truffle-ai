import { useEffect, useState } from 'react'
import clsx from 'clsx'

type BannerProps = {
  message: string
  variant: 'error' | 'success'
}

const Banner = ({ message, variant }: BannerProps) => {
  const [isVisible, setIsVisible] = useState(true)

  const variantClasses = {
    error: 'border-red-500 bg-red-500/50 ',
    success: 'border-green-500 bg-green-500/90'
  }

  // Hide banner after 5 seconds (5000 ms)
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 4000)

    return () => clearTimeout(timer)
  }, [])

  return isVisible ? (
    <div
      className={clsx(
        'fixed left-1/2 top-4 z-30 -translate-x-1/2 rounded-md border px-5 py-3 text-sm font-medium text-white',
        variantClasses[variant]
      )}>
      {message}
    </div>
  ) : null
}

export default Banner
