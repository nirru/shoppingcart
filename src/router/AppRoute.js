import React from 'react';
import {BrowserRouter, Route, Router, Switch} from 'react-router-dom';
import {history} from '../helper/history';

import Login from '../components/Login/Login';
import ErrorBoundary from '../components/error/ErrorBoundary';
import {
  HocAbout,
  HocAddPlan, HocAddTipsList,
  HocContact,
  HocDashboard,
  HocPool, HocPoolDetail,
  HocProfile, HocStatistics,
  HocSubscription, HocSurvey, HocTipsList, HocTransaction, HocUpdatePlan, HocUpdateTip,
  HocUSerDetail, HocUSerList
} from './routes';
import NotFound from '../components/NotFound/NotFound';

class AppRoute extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Router history={history}>
          <ErrorBoundary>
            <Switch>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/" component={HocDashboard}/>
              <Route exact path="/pool" component={HocPool}/>
              <Route exact path="/pool-detail/:id" component={HocPoolDetail}/>
              <Route exact path="/profile" component={HocProfile}/>
              <Route exact path="/users" component={HocUSerList}/>
              <Route exact path="/user/:id" component={HocUSerDetail}/>
              <Route path="/about" component={HocAbout}/>
              <Route path="/contact" component={HocContact}/>
              <Route path="/plan" component={HocSubscription}/>
              <Route path="/add-plan" component={HocAddPlan}/>
              <Route path="/update-plan/:id" component={HocUpdatePlan} />
              <Route path="/transaction" component={HocTransaction}/>
              <Route path="/survey" component={HocSurvey}/>
              <Route path="/statistics" component={HocStatistics}/>
              <Route path="/tips" component={HocTipsList}/>
              <Route path="/add-tips" component={HocAddTipsList}/>
              <Route path="/update-tips/:id" component={HocUpdateTip}/>
              <Route path="*" component={NotFound}/>
            </Switch>
          </ErrorBoundary>
        </Router>
      </BrowserRouter>
    );
  }
}

export default AppRoute;
