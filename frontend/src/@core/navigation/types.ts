import { NavigationItem } from '@types-local/navigation'
import { NAVIGATION_KEY } from './constants'

export type NavigationStore = {
  [NAVIGATION_KEY]: NavigationItem[]
}
