import React, { FC, memo } from 'react'
import { useMatchesScreenWidth } from '@core/services/window'

type Props = {
  minWidth?: number;
  maxWidth?: number;
}

export const Responsive: FC<Props> = memo(({ children, minWidth, maxWidth }) => {
  const matches = useMatchesScreenWidth({ minWidth, maxWidth })

  if (matches) {
    return <>{children}</>
  }
  return null
})
