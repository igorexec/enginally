import { renderHook, act } from '@testing-library/react-hooks'
import { useWindowWidth } from '../use-window-width'
import { mockWindowSize, restoreWindowSize } from '@mocks/window'

beforeAll(() => {
  mockWindowSize(1024, 768)
})

afterAll(() => {
  restoreWindowSize()
})

test('returns window width', () => {
  const { result } = renderHook(() => {
    return useWindowWidth()
  })

  expect(result.current).toEqual(1024)
})

test('returns new width after resize', () => {
  const { result } = renderHook(() => {
    return useWindowWidth()
  })
  act(() => {
    mockWindowSize(1023, 767)
  })
  expect(result.current).toEqual(1023)
})
