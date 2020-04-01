import { ReducersMapObject } from '@reduxjs/toolkit'
import { NAVIGATION_KEY, navigationReducer } from '@core/navigation'

const reducers: ReducersMapObject = {
  [NAVIGATION_KEY]: navigationReducer,
}

export const getReducers = () => ({
  ...reducers,
})
