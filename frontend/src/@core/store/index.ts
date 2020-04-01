import { configureStore } from '@reduxjs/toolkit'

import { getReducers } from './reducers-registry'

export const store = configureStore({
  reducer: getReducers(),
  devTools: process.env.NODE_ENV !== 'production',
})
