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
    console.log('Inside App.js');
    JoblyApi.getCompany('apple').then(res => console.log(res));
    return (
      <div>
        <NavBar />
        <Routes />;
      </div>
    );
  }
}

export default App;
