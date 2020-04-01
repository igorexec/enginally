import React, { FC } from 'react'
import classNames from 'classnames'

import styles from './NavToggle.module.scss'

type Props = {
  isOpen?: boolean;
  onClick?: () => void;
}

export const NavToggle: FC<Props> = ({ isOpen = false, onClick }) => {
  const classes = classNames(styles['nav-toggle'], { [styles['nav-toggle--opened']]: isOpen })

  return <span className={classes} data-testid="NavToggle" onClick={onClick} />
}
