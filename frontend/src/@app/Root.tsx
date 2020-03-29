import React, { FC } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Web, Home } from '@pages'

export const Root: FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/web" component={Web} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  )
}
