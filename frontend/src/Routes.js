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
// import Search from './Search.js';
import ProtectedRoute from './ProtectedRoute';

class Routes extends Component {
  render() {
    console.log('ROUTE PROPS', this.props);
    return (
      <div className="Routes">
        <Switch>
          <Route
            exact
            path="/login"
            render={props => <Login {...this.props} {...props} />}
          />

          <ProtectedRoute
            loginState={this.props.loginState}
            exact
            path="/companies"
            render={() => <Companies />}
          />
          <ProtectedRoute
            loginState={this.props.loginState}
            exact
            path="/companies/:company"
            render={props => <Company {...this.props} {...props} />}
          />
          <ProtectedRoute
            loginState={this.props.loginState}
            exact
            path="/jobs"
            render={() => <Jobs />}
          />
          <ProtectedRoute
            loginState={this.props.loginState}
            exact
            path="/profile"
            render={props => <Profile {...this.props} {...props} />}
          />
          <Route exact path="/" render={() => <Home />} />
          <Route render={() => <NotFound />} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Routes;
