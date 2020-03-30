import React from 'react'
import { render } from '@testing-library/react'

import { Header } from '../Header'

test('renders header', () => {
  const { getByTestId } = render(<Header />)
  expect(getByTestId('enginally/header')).toBeInTheDocument()
})

test('renders title', () => {
  const { getByText } = render(<Header />)
  expect(getByText('Enginally')).toBeInTheDocument()
})
