import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import './NavBar.css';

// global flag to easily tell if we're logged in
let LOGGED_IN = false;
class NavBar extends Component {
  //PV added
  constructor(props) {
    super(props);
    this.state = { loginState: false };
  }

  // PV added
  checkLoggedInfrontEnd() {
    // let's see if we're logged in
    let token = localStorage.getItem('token');
    let username = localStorage.getItem('username');

    if (token && username) {
      LOGGED_IN = true;
      this.setState({ loginState: LOGGED_IN });
    }
  }

  render() {
    {
      const activeStyle = {
        fontWeight: 'bold',
        color: 'mediumorchid'
      };

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
              {/* PV edits */}
              {this.state.loginState ? (
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
}

export default NavBar;
