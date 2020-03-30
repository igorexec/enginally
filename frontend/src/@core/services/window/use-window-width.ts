import { useState, useEffect, useCallback } from 'react'
import { throttle } from '@core/lib/performance'

const RESIZE_EVENT_DELAY = 300

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth)

  const throttledResize = throttle(() => {
    setWidth(window.innerWidth)
  }, RESIZE_EVENT_DELAY)

  const resize = useCallback(() => {
    throttledResize()
  }, [throttledResize])

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
