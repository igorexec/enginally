import React, { ReactElement } from 'react'
import { render } from '@testing-library/react'
import { createMemoryHistory, MemoryHistory } from 'history'
import { FC } from 'react'
import { Router } from 'react-router-dom'

export const renderWithRouter = (ui: ReactElement, { route = '/',
  history = createMemoryHistory({ initialEntries: [route] }),
}: {route: string; history?: MemoryHistory},
) => {
  const Wrapper: FC = ({ children }) => 
    <Router history={history}>{children}</Router>
  
  return {
    ...render(ui, { wrapper: Wrapper }),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  }
}
