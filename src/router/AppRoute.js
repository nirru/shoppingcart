import React from 'react';
import {BrowserRouter, Route, Router, Switch} from 'react-router-dom';
import {history} from '../helper/history';

import Login from '../components/Login/Login';
import ErrorBoundary from '../components/error/ErrorBoundary';
import {HocAbout, HocContact, HocDashboard, HocPool, HocProfile} from './routes';

class AppRoute extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Router history={history}>
          <Switch>
            <ErrorBoundary>
              <Route path="/login" component={Login}/>
              <Route exact path="/" component={HocDashboard}/>
              <Route exact path="/pool" component={HocPool}/>
              <Route exact path="/profile" component={HocProfile}/>
              <Route path="/about" component={HocAbout}/>
              <Route path="/contact" component={HocContact}/>
              {/*<Route component={NotFound}/>*/}
            </ErrorBoundary>
          </Switch>
        </Router>
      </BrowserRouter>
    );
  }
}

export default AppRoute;
