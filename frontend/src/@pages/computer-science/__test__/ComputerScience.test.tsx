import React from 'react'
import { render } from '@testing-library/react'
import { ComputerScience } from '../ComputerScience'

test('renders computer science page', () => {
  const { getByTestId } = render(<ComputerScience />)
  expect(getByTestId('ComputerScience')).toBeInTheDocument()
})
