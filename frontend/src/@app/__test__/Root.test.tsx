import React from 'react'
import { render, getByTestId } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { mockMatchMedia } from '__mocks__/window'
import { Router } from 'react-router-dom'

import { Root } from '../Root'

beforeAll(() => {
  mockMatchMedia()
})

test('renders header', () => {
  const { getByTestId } = render(<Root />)
  expect(getByTestId('Header')).toBeInTheDocument()
})
