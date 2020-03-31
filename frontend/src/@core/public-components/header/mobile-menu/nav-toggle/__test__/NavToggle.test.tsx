import React from 'react'
import { render } from '@testing-library/react'

import { NavToggle } from '../NavToggle'

test('it renders nav-toggle', () => {
  const { getByTestId } = render(<NavToggle />)
  expect(getByTestId('NavToggle')).toBeInTheDocument()
})
