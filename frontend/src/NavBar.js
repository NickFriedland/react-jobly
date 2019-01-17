import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import './NavBar.css';

class NavBar extends Component {
  render() {
    {
      const activeStyle = {
        fontWeight: 'bold',
        color: 'mediumorchid'
      };

      return (
        <nav className="Navigation navbar sticky-top shadow-sm border-bottom navbar-expand-md">
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
              {/* LOGOUT does this need to be a separate component/route? */}
              <NavLink exact to="/logout" className="nav-link">
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      );
    }
  }
}

export default NavBar;
