import React, {FC} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Home} from '@pages';

export const Root: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
