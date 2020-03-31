import React from 'react'

import styles from './NavToggle.module.scss'

export const NavToggle = () => {
  const classes = styles['nav-toggle']
  return <span className={classes} data-testid="NavToggle" />
}
