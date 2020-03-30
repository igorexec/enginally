import React from 'react'
import { Responsive } from '@core/ui-kit'
import { ScreenSizes } from '@configs/design'

export const Header = () => {
  return (
    <>
      <Responsive maxWidth={ScreenSizes.Large}>
        <div>mobile</div>
      </Responsive>
      <Responsive minWidth={ScreenSizes.Large}>
        <div>Desktop</div>
      </Responsive>
    </>
  )
}
