import { useEffect, useState } from 'react'

type BannerProps = {
  message: string
  variant: 'error' | 'success'
}

const Banner = ({ message, variant }: BannerProps) => {
  const [isVisible, setIsVisible] = useState(true)

  const variantClasses = {
    error: 'border-red bg-red/50 ',
    success: 'border-green bg-green/50 '
  }

  // Hide banner after 5 seconds (5000 ms)
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  return isVisible ? (
    <div
      className={`fixed bottom-0 z-50 mb-2 rounded-[5px] border ${variantClasses[variant]} px-3 py-2  text-center text-white`}
    >
      {message}
    </div>
  ) : null
}

export default Banner
