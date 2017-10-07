import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { AboutContainer, EnergyGraph, CostsGraph } from './components/App';
import NotFound from './components/NotFound';

export default () =>
  <BrowserRouter>
    <Switch>
      <Redirect exact from='/' to='/about' />
      <Route exact path='/about' component={AboutContainer} />
      <Route exact path='/energy' component={EnergyGraph} />
      <Route exact path='/costs' component={CostsGraph} />
      <Route path='*' component={NotFound} />
    </Switch>
  </BrowserRouter>;
