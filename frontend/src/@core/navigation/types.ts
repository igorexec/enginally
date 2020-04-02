import { NavigationItem } from '@types-internal/navigation'
import { NAVIGATION_KEY } from './constants'

export type NavigationStore = {
  [NAVIGATION_KEY]: NavigationItem[]
}
