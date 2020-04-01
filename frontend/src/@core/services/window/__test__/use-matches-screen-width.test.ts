import { renderHook } from '@testing-library/react-hooks'
import { mockWindowSize, mockMatchMedia } from '__mocks__/window'

import { useMatchesScreenWidth } from '../use-matches-screen-width'

beforeAll(() => {
  mockMatchMedia()
  mockWindowSize(1024, 768)
})

test('returns true once matches screen width', () => {
  const { result } = renderHook(() => {
    return useMatchesScreenWidth({ maxWidth: 1024 })
  })
  expect(result.current).toBeTruthy()
})

test('return false once does not match screen width', () => {
  const { result } = renderHook(() => {
    return useMatchesScreenWidth({ maxWidth: 600 })
  })
  expect(result.current).toBeFalsy()
})
