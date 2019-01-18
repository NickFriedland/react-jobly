import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes.js';
import NavBar from './NavBar.js';
import JoblyApi from './JoblyApi.js'; //For testing only

// global flag to easily tell if we're logged in
let LOGGED_IN = undefined;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loginState: false };
    this.checkLoggedInfrontEnd = this.checkLoggedInfrontEnd.bind(this);
  }

  checkLoggedInfrontEnd() {
    // let's see if we're logged in
    let token = localStorage.getItem('token');
    let username = localStorage.getItem('username');

    if (token && username) {
      LOGGED_IN = true;
      this.setState({ loginState: LOGGED_IN });
    }
    console.log('---in App.js, state = ', this.state, 'Logged-In ', LOGGED_IN);
  }

  render() {
    // console.log('Inside App.js');
    // JoblyApi.getCompany('apple').then(res => console.log('get company', res));
    // JoblyApi.getCompanies('/').then(res => console.log('get companies', res));
    // JoblyApi.searchCompanies('apple inc').then(res =>
    //   console.log('search companies', res)

    return (
      <div>
        <NavBar loginstate={LOGGED_IN} />
        <Routes />
      </div>
    );
  }
}

export default App;
