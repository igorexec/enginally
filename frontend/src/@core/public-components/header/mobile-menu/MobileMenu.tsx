import React, { useState } from 'react'

import { NavToggle } from './nav-toggle'

import styles from './MobileMenu.module.scss'

export const MobileMenu = () => {
  const [isOpen, setOpened] = useState(false)
  const classes = styles['mobile-menu']
  const navClasses = styles['nav-menu']

  const toggleHamburger = () => {
    setOpened((prevOpened) => !prevOpened)
  }

  const menu = isOpen && (
    <nav className={classes} data-testid="MobileMenu">
      <ul className={navClasses}>
        <li>Computer Science</li>
        <li>Web</li>
      </ul>
    </nav>
  )

  return (
    <>
      <NavToggle isOpen={isOpen} onClick={toggleHamburger} />
      {menu}
    </>
  )
}
