import React from 'react'

import { NavToggle } from './nav-toggle'
import { COMPONENT_NAME } from './constants'
import styles from './Header.module.scss'

export const Header = () => {
  const classes = styles['header']
  const titleClasses = styles['header__title']

  return (
    <header className={classes} data-testid={COMPONENT_NAME}>
      <NavToggle />
      <h1 className={titleClasses}>Enginally</h1>
    </header>
  )
}
