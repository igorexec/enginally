import React, { FC } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, EventLoop } from '@pages'

export const Root: FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/event-loop" component={EventLoop} />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  )
}
