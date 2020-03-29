import React, { FC } from 'react'
import { BrowserRouter, Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom'

import { EventLoop } from './event-loop'

export const Web: FC<RouteComponentProps> = ({ match }) => {
  const eventLoopPath = `${match.path}/event-loop`

  return (
    <BrowserRouter>
      <Switch>
        <Route path={eventLoopPath} component={EventLoop} />
        <Redirect to={eventLoopPath} />
      </Switch>
    </BrowserRouter>
  )
}
