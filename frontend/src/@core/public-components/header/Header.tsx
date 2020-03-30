import React from 'react'
import classNames from 'classnames'

import { COMPONENT_NAME } from './constants'
import styles from './Header.module.scss'

export const Header = () => {
  const headerClasses = classNames(styles['header'])
  const headerTitleClasses = classNames(styles['header__title'])

  return (
    <header className={headerClasses} data-testid={COMPONENT_NAME}>
      <h1 className={headerTitleClasses}>Enginally</h1>
    </header>
  )
}
