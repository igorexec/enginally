import { Selector } from '@reduxjs/toolkit'
import { NavigationItem } from '@types-internal/navigation'
import { NAVIGATION_KEY } from './constants'
import { NavigationStore } from './types'

export const navigationSelector: Selector<NavigationStore, NavigationItem[]> =
  (state: NavigationStore) => state[NAVIGATION_KEY] || []
