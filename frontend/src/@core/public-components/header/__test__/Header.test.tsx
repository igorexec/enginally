import React from 'react'
import { render } from '@testing-library/react'
import { mockMatchMedia, mockWindowSize } from '__mocks__/window'
import { SCSS_MOCK } from '__mocks__/scss'

import { Header } from '../Header'

jest.mock('@configs/design/export.module.scss', () => {
  return SCSS_MOCK
})

beforeAll(() => {
  mockMatchMedia()
})

test('renders header', () => {
  const { getByTestId } = render(<Header />)
  expect(getByTestId('enginally/header')).toBeInTheDocument()
})

test('renders desktop header', () => {
  mockWindowSize(1025, 768)
  const { getByTestId } = render(<Header />)
  expect(getByTestId('DesktopMenu')).toBeInTheDocument()
})

test('renders mobile header for mobile viewport', () => {
  mockWindowSize(1024, 768)
  const { getByTestId } = render(<Header />)
  expect(getByTestId('MobileMenu')).toBeInTheDocument()
})
