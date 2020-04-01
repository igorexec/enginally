import { throttle } from '../throttle'

beforeAll(() => {
  jest.useFakeTimers()
})

afterAll(() => {
  jest.clearAllTimers()
  jest.useRealTimers()
})

test('returns new function', () => {
  const actual = throttle(() => 1 + 1, 3000)
  expect(actual).toBeInstanceOf(Function)
})

test('calls function once per delay', () => {
  const sourceFn = jest.fn()
  const throttledFn = throttle(sourceFn, 3000)
  throttledFn()
  throttledFn()
  jest.advanceTimersByTime(3000)
  expect(sourceFn).toHaveBeenCalledTimes(1)
})

test('calls function twice if twice timer finished', () => {
  const sourceFn = jest.fn()
  const throttledFn = throttle(sourceFn, 3000)

  throttledFn()
  throttledFn()
  jest.advanceTimersByTime(3000)
  throttledFn()
  throttledFn()
  jest.advanceTimersByTime(3000)

  expect(sourceFn).toHaveBeenCalledTimes(2)
})
