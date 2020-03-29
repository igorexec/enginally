import React, { useState, FC } from 'react'
import { useWindowSize } from '@core/services/window'

type Props = {
  minWidth?: number;
  maxWidth?: number;
}

export const Responsive: FC<Props> = ({ children, minWidth = 0, maxWidth }) => {
  const [isVisible, setVisibility] = useState(false)
  const { width, height } = useWindowSize()

  if (isVisible) {
    return <>{children}</>
  }

  return null
}
