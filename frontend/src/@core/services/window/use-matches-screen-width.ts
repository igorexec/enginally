import { useState, useEffect } from 'react'
import { createMediaQuery } from '@core/lib/screen'

import { useWindowWidth } from './use-window-width'

export const useMatchesScreenWidth = ({ minWidth, maxWidth }: {minWidth?: number; maxWidth?: number;}) => {
  const [matches, setMatches] = useState(false)
  const width = useWindowWidth()

  useEffect(() => {
    if (window.matchMedia(createMediaQuery({ minWidth, maxWidth })).matches) {
      setMatches(true)
    } else {
      setMatches(false)
    }
  }, [maxWidth, minWidth, width])

  return matches
}
