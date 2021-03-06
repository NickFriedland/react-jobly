import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Routes from './Routes.js';
import NavBar from './NavBar.js';
import { withRouter } from 'react-router';
// import PropTypes from 'prop-types';
import JoblyApi from './JoblyApi.js'; //For testing only
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// global flag to easily tell if we're logged in
// let LOGGED_IN = undefined;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {}, loginToken: '', loaded: false };
    this.checkLocalStorageLogin = this.checkLocalStorageLogin.bind(this);
    this.changeStateWithEditUser = this.changeStateWithEditUser.bind(this);
    this.changeStateWithLoginOrSignup = this.changeStateWithLoginOrSignup.bind(
      this
    );
    this.changeStateWithLogout = this.changeStateWithLogout.bind(this);
    this.refreshUser = this.refreshUser.bind(this);
    console.log("--- App's this.state ", this.state);
  }

  async componentDidMount() {
    let token = localStorage.getItem('token');
    let username = localStorage.getItem('username');
    console.log(
      '--In App.js, CdidMount, token from local storage is ',
      token,
      'username is',
      username
    );

    if (token) {
      let response = await JoblyApi.getUser(username);
      console.log('in app.js, cdidMount, response is', response);
      this.setState({ user: response, loginToken: token, loaded: true });
    } else {
      this.setState({ loaded: true });
    }
  }

  async refreshUser() {
    let response = await JoblyApi.getUser(localStorage.getItem('username'));
    this.setState({ user: response });
  }

  // componentDiDMount to check for state change - local storage login

  checkLocalStorageLogin() {
    // let's see if we're logged in
    let token = localStorage.getItem('token');
    let username = localStorage.getItem('username');

    if (token && username) {
      this.setState({ loginToken: token });
    }
    console.log(
      '---in App.js, state = ',
      this.state,
      'Logged-In state.loginToken ',
      this.state.loginToken
    );
  }

  changeStateWithLoginOrSignup(token) {
    console.log(
      'in App.js, inside changeStateWithLoginOrSignup, token is',
      token
    );
    this.setState({ loginToken: token });
    this.props.history.replace('/jobs');
  }

  changeStateWithEditUser(userInfo) {
    console.log(
      'in App.js, inside changeStateWithLoginOrSignup, userInfo is',
      userInfo
    );
    this.setState({ user: userInfo });
  }

  changeStateWithLogout() {
    console.log('In App.js Logout function');
    localStorage.clear();
    this.setState({ loginToken: '' });
    this.props.history.replace('/');
  }

  render() {
    // console.log('Inside App.js');
    // JoblyApi.getCompany('apple').then(res => console.log('get company', res));
    // JoblyApi.getCompanies('/').then(res => console.log('get companies', res));
    // JoblyApi.searchCompanies('apple inc').then(res =>
    //   console.log('search companies', res)
    return this.state.loaded ? (
      <div>
        <NavBar
          {...this.props}
          loginState={this.state.loginToken}
          userInfo={this.state.user}
          logoutState={this.changeStateWithLogout}
        />
        <Routes
          {...this.props}
          userInfo={this.state.user}
          loginState={this.state.loginToken}
          updateAppToken={this.changeStateWithLoginOrSignup}
          updateUser={this.changeStateWithEditUser}
          refreshUser={this.refreshUser}
        />
      </div>
    ) : (
      <div>LOADING...</div>
    );
  }
}

export default withRouter(App);
