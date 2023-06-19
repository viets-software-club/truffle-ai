import { useEffect, useState } from 'react'

type BannerProps = {
  message: string
  variant: 'error' | 'success'
}

const Banner = ({ message, variant }: BannerProps) => {
  const [isVisible, setIsVisible] = useState(true)

  const variantClasses = {
    error: 'border-red bg-red/50 ',
    success: 'border-green bg-green/90'
  }

  // Hide banner after 5 seconds (5000 ms)
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 4000)

    return () => clearTimeout(timer)
  }, [])

  return isVisible ? (
    <div
      className={`fixed bottom-4 right-4 z-30 rounded-[5px] border ${variantClasses[variant]} px-5 py-3 text-14 font-medium text-white`}
    >
      {message}
    </div>
  ) : null
}

export default Banner
