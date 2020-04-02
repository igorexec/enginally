import React from 'react'
import { mockMatchMedia, mockWindowSize } from '__mocks__/window'
import { renderWithRouter } from '__mocks__/router'
import { Header } from '../Header'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}))

jest.mock('@configs/design', () => ({
  ScreenSizes: {
    Large: 1024,
  },
}))

beforeAll(() => {
  mockMatchMedia()
})

test('renders header', () => {
  const { getByTestId } = renderWithRouter(<Header />)
  expect(getByTestId('Header')).toBeInTheDocument()
})

test('renders desktop header', () => {
  mockWindowSize(1025, 768)
  const { getByTestId } = renderWithRouter(<Header />)
  expect(getByTestId('DesktopMenu')).toBeInTheDocument()
})

test('renders mobile header for mobile viewport', () => {
  mockWindowSize(1000, 768)
  const { getByTestId } = renderWithRouter(<Header />)
  expect(getByTestId('NavToggle')).toBeInTheDocument()
})
