import React, { useState, FC } from 'react'
import { NavigationItem } from '@types-local/navigation'
import { NavToggle } from './nav-toggle'
import { NavMenu } from './nav-menu'
import styles from './MobileMenu.module.scss'

type Props = {
  navItems: NavigationItem[];
}

export const MobileMenu: FC<Props> = ({ navItems }) => {
  const [isOpen, setOpened] = useState(false)
  const classes = styles['mobile-menu']

  const toggleMenu = () => {
    setOpened((prevOpened) => !prevOpened)
  }

  const menu = isOpen && (
    <nav className={classes} data-testid="MobileMenu">
      <NavMenu items={navItems} onItemClick={toggleMenu} />
    </nav>
  )

  return (
    <>
      <NavToggle isOpen={isOpen} onClick={toggleMenu} />
      {menu}
    </>
  )
}
