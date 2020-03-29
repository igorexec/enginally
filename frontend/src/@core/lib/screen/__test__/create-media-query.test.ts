import { createMediaQuery } from '../create-media-query'

test('returns correct query for no params', () => {
  const actual = createMediaQuery({})
  const expected = '(min-width: 0px) and (min-height: 0px)'
  expect(actual).toEqual(expected)
})

test('return correct query for min width and min height', () => {
  const actual = createMediaQuery({ minWidth: 10, minHeight: 10 })
  const expected = '(min-width: 10px) and (min-height: 10px)'
  expect(actual).toEqual(expected)
})

test('return correct query for max width', () => {
  const actual = createMediaQuery({ maxWidth: 100 })
  const expected = '(min-width: 0px) and (min-height: 0px) and (max-width: 99px)'
  expect(actual).toEqual(expected)
})

test('return correct query for max width', () => {
  const actual = createMediaQuery({ maxHeight: 100 })
  const expected = '(min-width: 0px) and (min-height: 0px) and (max-height: 99px)'
  expect(actual).toEqual(expected)
})
