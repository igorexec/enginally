import React, { useState } from 'react'

import { NavToggle } from './nav-toggle'

export const MobileMenu = () => {
  const [isOpen, setOpened] = useState(false)

  const toggleHamburger = () => {
    setOpened(!isOpen)
  }

  return (
    <menu data-testid="MobileMenu">
      <NavToggle isOpen={isOpen} onClick={toggleHamburger} />
    </menu>
  )
}
