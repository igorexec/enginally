import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Responsive } from '@core/ui-kit'
import { navigationSelector } from '@core/navigation'
import { ScreenSizes } from '@configs/design'
import { DesktopMenu } from './desktop-menu'
import { MobileMenu } from './mobile-menu'
import styles from './Header.module.scss'

export const Header = () => {
  const classes = styles['header']
  const titleClasses = styles['header__title']
  const linkClasses = styles['header__link']

  const navItems = useSelector(navigationSelector)

  return (
    <header className={classes} data-testid="Header">
      <h1 className={titleClasses}>
        <Link to="/" className={linkClasses}>Enginally</Link>
      </h1>
      <Responsive maxWidth={ScreenSizes.Large}>
        <MobileMenu navItems={navItems} />
      </Responsive>
      <Responsive minWidth={ScreenSizes.Large}>
        <DesktopMenu navItems={navItems} />
      </Responsive>
    </header>
  )
}
