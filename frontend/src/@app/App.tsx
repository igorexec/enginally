import React, { FC } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Home, Web, ComputerScience } from '@pages'
import { Header } from '@core/public-components'

export const App: FC = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/web" component={Web} />
      <Route path="/cs" component={ComputerScience} />
      <Redirect to="/" />
    </Switch>
  </>
)
