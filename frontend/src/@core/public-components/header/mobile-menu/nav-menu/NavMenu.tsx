import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { NavigationItem } from '@types-internal/navigation'
import styles from './NavMenu.module.scss'

type Props = {
  items: NavigationItem[];
  onItemClick?: () => void
}

export const NavMenu: FC<Props> = ({ onItemClick, items = [] }) => {
  const classes = styles['nav-menu']
  const itemClasses = styles['nav-menu__item']
  const linkClasses = styles['nav-menu__link']

  const navigation = items.map((item) => (
    <li key={item?.pathname} className={itemClasses}>
      <NavLink to={item?.pathname} className={linkClasses} onClick={onItemClick}>{item?.title}</NavLink>
    </li>
  ))

  return (
    <ul className={classes}>
      {navigation}
    </ul>
  )
}
