import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
//import './Routes.css';
import Home from './Home.js';
import Companies from './Companies.js';
import Login from './Login.js';
import Company from './Company.js';
import Jobs from './Jobs.js';
import Profile from './Profile.js';
import NotFound from './NotFound.js';

class Routes extends Component {
  render() {
    return (
      <div className="Routes">
        <Switch>
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/companies" render={() => <Companies />} />
          <Route exact path="/companies/:company" render={() => <Company />} />
          <Route exact path="/jobs" render={() => <Jobs />} />
          <Route exact path="/profile" render={() => <Profile />} />
          <Route exact path="/" render={() => <Home />} />
          <Route render={() => <NotFound />} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
