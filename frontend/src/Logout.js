import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    localStorage.clear();
    console.log('in logout, Local storage ', localStorage);
    return <Redirect to="/" />;
  }
}

export default Logout;
