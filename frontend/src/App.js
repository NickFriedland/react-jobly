import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes.js';
import NavBar from './NavBar.js';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import JoblyApi from './JoblyApi.js'; //For testing only

// global flag to easily tell if we're logged in
// let LOGGED_IN = undefined;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {}, loginToken: '' };
    this.checkLocalStorageLogin = this.checkLocalStorageLogin.bind(this);
    console.log("--- App's this.state ", this.state);
  }

  async componentDidMount() {
    try {
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
        this.setState({ loginState: token });

        console.log('In app.js, cDidMount, state is ', this.state);
        this.setState({ user: response });
        console.log('in app.js, componentDidMount', this.state);
      }
    } catch (error) {
      throw new Error('Getting user error');
    }
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

  render() {
    // console.log('Inside App.js');
    // JoblyApi.getCompany('apple').then(res => console.log('get company', res));
    // JoblyApi.getCompanies('/').then(res => console.log('get companies', res));
    // JoblyApi.searchCompanies('apple inc').then(res =>
    //   console.log('search companies', res)

    return (
      <div>
        <NavBar
          {...this.props}
          loginstate={this.state.loginToken}
          userInfo={this.state.user}
        />
        <Routes {...this.props} />
      </div>
    );
  }
}

export default App;
