import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { MobileMenu } from '../MobileMenu'

test('renders mobile menu', () => {
  const { getByTestId } = render(<MobileMenu />)
  expect(getByTestId('NavToggle')).toBeInTheDocument()
})

test('opens mobile menu once hamburger clicked', () => {
  const { getByTestId } = render(<MobileMenu />)
  const navToggle = getByTestId('NavToggle')
  fireEvent.click(navToggle)
  expect(getByTestId('MobileMenu')).toBeInTheDocument()
})
