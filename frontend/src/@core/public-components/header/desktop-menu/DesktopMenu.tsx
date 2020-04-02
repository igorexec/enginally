import React, { FC } from 'react'
import { NavigationItem } from '@types-internal/navigation'
import { NavMenu } from './nav-menu'
import styles from './DesktopMenu.module.scss'

type Props = {
  navItems: NavigationItem[]
}

export const DesktopMenu: FC<Props> = ({ navItems }) => {
  const classes = styles['desktop-menu']
  return (
    <nav className={classes} data-testid="DesktopMenu">
      <NavMenu items={navItems} />
    </nav>
  )
}
