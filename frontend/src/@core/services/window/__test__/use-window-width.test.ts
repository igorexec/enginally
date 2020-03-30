import { renderHook, act } from '@testing-library/react-hooks'
import { mockWindowSize, restoreWindowSize } from '@mocks/window'

import { useWindowWidth } from '../use-window-width'

beforeEach(() => {
  mockWindowSize(1024, 768)
  jest.useFakeTimers()
})

afterEach(() => {
  restoreWindowSize()
  jest.clearAllTimers()
  jest.useRealTimers()
})

test('returns window width', () => {
  const { result } = renderHook(() => {
    return useWindowWidth()
  })

  expect(result.current).toEqual(1024)
})

test('does not return new width instantly after resize', () => {
  const { result } = renderHook(() => {
    return useWindowWidth()
  })
  act(() => {
    mockWindowSize(1023, 767)
  })
  expect(result.current).toEqual(1024)
})

test('returns new width after resize with delay', () => {
  const { result } = renderHook(() => {
    return useWindowWidth()
  })
  act(() => {
    mockWindowSize(1023, 767)
    jest.runTimersToTime(300)
  })
  expect(result.current).toEqual(1023)
})
