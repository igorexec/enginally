import { renderHook, act } from '@testing-library/react-hooks'
import { useWindowSize } from '../use-window-size'
import { mockWindowSize, restoreWindowSize } from '@mocks/window'

beforeAll(() => {
  mockWindowSize(1024, 768)
})

afterAll(() => {
  restoreWindowSize()
})

test('returns window width', () => {
  const { result } = renderHook(() => {
    return useWindowSize()
  })

  expect(result.current.width).toEqual(1024)
})

test('returns window height', () => {
  const { result } = renderHook(() => {
    return useWindowSize()
  })

  expect(result.current.height).toEqual(768)
})

test('returns new width after resize', () => {
  const { result } = renderHook(() => {
    return useWindowSize()
  })
  act(() => {
    mockWindowSize(1023, 767)
  })
  expect(result.current.width).toEqual(1023)
})

test('returns new height after resize', () => {
  const { result } = renderHook(() => {
    return useWindowSize()
  })
  act(() => {
    mockWindowSize(1023, 767)
  })
  expect(result.current.height).toEqual(767)
})
