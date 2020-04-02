import React from 'react'
import { render } from '@testing-library/react'
import { mockMatchMedia, mockWindowSize } from '__mocks__/window'
import { Header } from '../Header'

jest.mock('@configs/design', () => ({
  ScreenSizes: {
    Large: 1024,
  },
}))

beforeAll(() => {
  mockMatchMedia()
})

test('renders header', () => {
  const { getByTestId } = render(<Header />)
  expect(getByTestId('Header')).toBeInTheDocument()
})

test('renders desktop header', () => {
  mockWindowSize(1025, 768)
  const { getByTestId } = render(<Header />)
  expect(getByTestId('DesktopMenu')).toBeInTheDocument()
})

test('renders mobile header for mobile viewport', () => {
  mockWindowSize(1000, 768)
  const { getByTestId } = render(<Header />)
  expect(getByTestId('NavToggle')).toBeInTheDocument()
})
