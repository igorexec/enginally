import React, { ReactElement, FC } from 'react'
import { createMemoryHistory, MemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { render } from '@testing-library/react'

export const renderWithRouter = (
  ui: ReactElement,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  }: {route?: string; history?: MemoryHistory} = {},
) => {
  const Wrapper: FC = ({ children }) => 
    <Router history={history}>{children}</Router>
  
  return {
    ...render(ui, { wrapper: Wrapper }),
    history,
  }
}
