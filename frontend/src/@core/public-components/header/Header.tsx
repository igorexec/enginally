import React from 'react'
import { Responsive } from '@core/ui-kit'
import { ScreenSizes } from '@configs/design'

import { DesktopMenu } from './desktop-menu'
import { COMPONENT_NAME } from './constants'
import { MobileMenu } from './mobile-menu'

import styles from './Header.module.scss'

export const Header = () => {
  const classes = styles['header']
  const titleClasses = styles['header__title']

  return (
    <header className={classes} data-testid={COMPONENT_NAME}>
      <Responsive maxWidth={ScreenSizes.Large}>
        <MobileMenu />
      </Responsive>
      <Responsive minWidth={ScreenSizes.Large}>
        <DesktopMenu />
      </Responsive>
      <h1 className={titleClasses}>Enginally</h1>
    </header>
  )
}
