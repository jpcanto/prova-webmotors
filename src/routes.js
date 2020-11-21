import React from 'react';
import { Router, Switch, Route, Redirect, Link } from 'react-router-dom';

import App from './App';
import NotFound from './views/NotFound/NotFound';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const Routes = () => {

  return <Router history={history}>
    <Switch>
      <Route exact path='/' render={() => <App />} />
      <Route path='/404' render={() => <NotFound />} />
      <Redirect to="/404" />
    </Switch>
  </Router>

}

export default Routes;
