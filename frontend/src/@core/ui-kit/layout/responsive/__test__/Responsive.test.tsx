import React from 'react'
import { render } from '@testing-library/react'
import { mockMatchMedia } from '@mocks/window'

import { Responsive } from '../Responsive'

beforeEach(() => {
  mockMatchMedia(false)
})

afterEach(() => {
  mockMatchMedia(false)
})

test('renders children when viewport matches media', () => {
  mockMatchMedia(true)
  const { queryByText } = render(
    <Responsive minWidth={0} maxWidth={1024}>
      content
    </Responsive>,
  )
  const children = queryByText('content')
  expect(children).not.toBeNull()
})

test('does not render when viewport does not match media', () => {
  mockMatchMedia(false)
  const { queryByText } = render(
    <Responsive minWidth={0} maxWidth={1024}>
      content
    </Responsive>,
  )
  const children = queryByText('content')
  expect(children).toBeNull()
})
