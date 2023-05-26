import { useState, useEffect } from 'react'

const BlinkingDots = () => {
  const [activeDot, setActiveDot] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prevActiveDot) => (prevActiveDot % 3) + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const renderDots = () =>
    [1, 2, 3].map((dot) => (
      <span
        key={dot}
        className={`${activeDot === dot ? 'visible' : 'invisible'} h-2 w-2 rounded-full`}
      >
        .
      </span>
    ))

  return <>{renderDots()}</>
}

export default BlinkingDots
