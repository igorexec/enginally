import React, { FC } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Web, Home, ComputerScience } from '@pages'
import { Header } from '@core/public-components'

export const Root: FC = () => (
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/web" component={Web} />
        <Route path="/cs" component={ComputerScience} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
)
