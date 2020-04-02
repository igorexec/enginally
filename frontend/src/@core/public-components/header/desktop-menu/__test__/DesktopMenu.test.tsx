import React from 'react'
import { render } from '@testing-library/react'
import { DesktopMenu } from '../DesktopMenu'

test('renders desktop menu', () => {
  const { getByTestId } = render(<DesktopMenu navItems={[]} />)
  expect(getByTestId('DesktopMenu')).toBeInTheDocument()
})
