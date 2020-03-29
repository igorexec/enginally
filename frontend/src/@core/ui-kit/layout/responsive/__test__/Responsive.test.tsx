import React from 'react'
import { render } from '@testing-library/react'
import { Responsive } from '../Responsive'


// test('renders children when viewport > minWidth and < maxWidth', () => {
//   const { getByText } = render(
//     <Responsive minWidth={0} maxWidth={1024}>
//       content
//     </Responsive>,
//   )
//   const children = getByText('content')
//   expect(children).not.toBeEmpty()
// })

// test('does not render when viewport when viewport > maxWidth', () => {
//   const { getByText } = render(
//     <Responsive minWidth={0} maxWidth={1024}>
//       content
//     </Responsive>,
//   )
//   const children = getByText(/content/i)
//   expect(children).toBeEmpty()
// })

// test('does not render children when viewport < minWidth', () => {
//   const { getByText } = render(
//     <Responsive minWidth={0} maxWidth={1024}>
//       content
//     </Responsive>,
//   )
//   const children = getByText('content')
//   expect(children).toBeEmpty()
// })
