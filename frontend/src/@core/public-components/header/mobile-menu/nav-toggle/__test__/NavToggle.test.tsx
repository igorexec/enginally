import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { NavToggle } from '../NavToggle'

test('renders nav-toggle', () => {
  const { getByTestId } = render(<NavToggle />)
  expect(getByTestId('NavToggle')).toBeInTheDocument()
})

test('renders opened hamburger', () => {
  const { getByTestId } = render(<NavToggle isOpen />)
  expect(getByTestId('NavToggle')).toHaveClass('nav-toggle--opened')
})

test('calls onClick once clicked', () => {
  const onClickSpy = jest.fn()
  const { getByTestId } = render(<NavToggle onClick={onClickSpy} />)
  fireEvent.click(getByTestId('NavToggle'))
  expect(onClickSpy).toHaveBeenCalledTimes(1)
})
