import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
//import './Routes.css';
import Home from './Home.js';
import Companies from './Companies.js';
import Login from './Login.js';
import Company from './Company.js';
import Jobs from './Jobs.js';
import Profile from './Profile.js';
import NotFound from './NotFound.js';
import Search from './Search.js';
import Logout from './Logout.js';

class Routes extends Component {
  render() {
    return (
      <div className="Routes">
        <Switch>
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/logout" render={() => <Logout />} />
          <Route
            exact
            path="./:companyOrJob"
            render={props => <Search {...props} />}
          />
          <Route exact path="/companies" render={() => <Companies />} />
          <Route
            exact
            path="/companies/:company"
            render={routeProps => <Company {...routeProps} />}
          />
          <Route exact path="/jobs" render={() => <Jobs />} />
          <Route exact path="/profile" render={() => <Profile />} />
          <Route exact path="/" render={() => <Home />} />
          <Route render={() => <NotFound />} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Routes;
