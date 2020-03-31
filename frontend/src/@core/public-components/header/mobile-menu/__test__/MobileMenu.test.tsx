import React from 'react'
import { render } from '@testing-library/react'

import { MobileMenu } from '../MobileMenu'

test('renders mobile menu', () => {
  const { getByTestId } = render(<MobileMenu />)
  expect(getByTestId('MobileMenu')).toBeInTheDocument()
})
