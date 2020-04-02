import React, { ReactElement } from 'react'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

export const renderWithRedux = (
  ui: ReactElement,
  store: Store,
) => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  // adding `store` to the returned utilities to allow us
  // to reference it in our tests (just try to avoid using
  // this to test implementation details).
  store,
})
