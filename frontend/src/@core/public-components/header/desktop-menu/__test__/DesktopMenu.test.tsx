import React from 'react'
import { render } from '@testing-library/react'
import { DesktopMenu } from '../DesktopMenu'

test('renders desktop menu', () => {
  const { getByTestId } = render(<DesktopMenu />)
  expect(getByTestId('DesktopMenu')).toBeInTheDocument()
})
