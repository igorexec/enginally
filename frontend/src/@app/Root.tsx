import React, { FC } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Home, EventLoop } from '@pages'

export const Root: FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/event-loop" component={EventLoop} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  )
}
