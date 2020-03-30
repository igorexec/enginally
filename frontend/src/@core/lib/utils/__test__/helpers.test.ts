import { noop } from '../helpers'

test('returns empty value', () => {
  expect(noop()).toBeUndefined()
})
