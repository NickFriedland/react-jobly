import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LOGGED_IN from './App.js';

// import './NavBar.css';

class NavBar extends Component {
  //PV added
  constructor(props) {
    super(props);
    this.state = {};
  }

  // PV added

  render() {
    // {
    //   const activeStyle = {
    //     fontWeight: 'bold',
    //     color: 'mediumorchid'
    //   };
    return (
      <nav className="Navigation navbar sticky-top shadow-sm border-bottom navbar-expand-md mb-4 bg-white">
        <NavLink exact to="/" className="navbar-brand">
          Jobly
        </NavLink>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-4">
            <NavLink exact to="/companies" className="nav-link">
              Companies
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink exact to="/jobs" className="nav-link">
              Jobs
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink exact to="/profile" className="nav-link">
              Profile
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            {localStorage.getItem('token') &&
            localStorage.getItem('username') ? (
              <NavLink exact to="/logout" className="nav-link">
                Logout
              </NavLink>
            ) : (
              <NavLink exact to="/login" className="nav-link">
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
