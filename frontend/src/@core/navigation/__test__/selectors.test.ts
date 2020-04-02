import { navigationSelector } from '../selectors'

test('navigationSelector returns navigation data', () => {
  const navigationItems = [{ title: '1', pathname: 'test' }]
  const store = { navigation: navigationItems }
  expect(navigationSelector(store)).toEqual(navigationItems)
})
