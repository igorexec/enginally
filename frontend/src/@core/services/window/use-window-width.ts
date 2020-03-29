import { useState, useEffect, useCallback } from 'react'

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth)

  const resize = useCallback(() => {
    setWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', resize)
    window.addEventListener('orientationchange', resize)
    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('orientationchange', resize)
    }
  }, [resize])

  return width
}
