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
    // console.log('ROUTE PROPS', this.props);
    return (
      <div className="Routes">
        <Switch>
          <Route
            {...this.props}
            loginState={this.props.loginState}
            exact
            path="/login"
            render={props => <Login {...this.props} {...props} />}
          />

          <ProtectedRoute
            {...this.props}
            exact
            path="/companies"
            render={() => <Companies />}
          />
          <ProtectedRoute
            {...this.props}
            exact
            path="/companies/:company"
            render={props => <Company {...props} />}
          />
          <ProtectedRoute
            {...this.props}
            exact
            path="/jobs"
            render={() => <Jobs />}
          />
          <ProtectedRoute
            {...this.props}
            exact
            path="/profile"
            render={() => <Profile />}
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
