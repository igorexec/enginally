import React from 'react'
import { render } from '@testing-library/react'
import { mockMatchMedia, mockWindowSize } from '__mocks__/window'
import { Responsive } from '../Responsive'

beforeAll(() => {
  mockMatchMedia()
})

beforeEach(() => {
  mockWindowSize(1024, 768)
})

test('renders children when viewport matches media', () => {
  const { queryByText } = render(
    <Responsive minWidth={0} maxWidth={1024}>
      content
    </Responsive>,
  )
  const children = queryByText('content')
  expect(children).not.toBeNull()
})

test('does not render when does not match media', () => {
  const { queryByText } = render(
    <Responsive minWidth={0} maxWidth={1023}>
      content
    </Responsive>,
  )
  const children = queryByText('content')
  expect(children).toBeNull()
})
