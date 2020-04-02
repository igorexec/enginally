import React from 'react'
import { render } from '@testing-library/react'
import { mockMatchMedia } from '__mocks__/window'
import { Root } from '../Root'

beforeAll(() => {
  mockMatchMedia()
})

test('renders header', () => {
  const { getByTestId } = render(<Root />)
  expect(getByTestId('Header')).toBeInTheDocument()
})
