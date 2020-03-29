import React, { FC } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from '@pages'

export const Root: FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  )
}
