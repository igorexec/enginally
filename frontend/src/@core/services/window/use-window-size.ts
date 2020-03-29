import { useState, useEffect, useCallback } from 'react'

export const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  const resize = useCallback(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', resize)
    window.addEventListener('orientationchange', resize)
    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('orientationchange', resize)
    }
  }, [resize])

  return { width, height }
}
