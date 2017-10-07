import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import NotFound from './components/NotFound';

export default () =>
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='*' component={NotFound} />
    </Switch>
  </BrowserRouter>;
