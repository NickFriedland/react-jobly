import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes.js';
import NavBar from './NavBar.js';
import JoblyApi from './JoblyApi.js'; //For testing only

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log('Inside App.js');
    // JoblyApi.getCompany('apple').then(res => console.log('get company', res));
    // JoblyApi.getCompanies('/').then(res => console.log('get companies', res));
    // JoblyApi.searchCompanies('apple inc').then(res =>
    //   console.log('search companies', res)

    return (
      <div>
        <NavBar />
        <Routes />
      </div>
    );
  }
}

export default App;
