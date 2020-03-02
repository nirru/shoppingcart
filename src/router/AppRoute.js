import React from 'react';
import {BrowserRouter, Route, Router, Switch} from 'react-router-dom';
import {history} from '../helper/history';

import ErrorBoundary from '../components/error/ErrorBoundary';

import NotFound from '../components/NotFound/NotFound';
import Home from '../components/Home/Home';

class AppRoute extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Router history={history}>
          <ErrorBoundary>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="*" component={NotFound}/>
            </Switch>
          </ErrorBoundary>
        </Router>
      </BrowserRouter>
    );
  }
}

export default AppRoute;


