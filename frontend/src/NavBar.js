import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import './NavBar.css';

class NavBar extends Component {
  render() {
    {
      const activeStyle = {
        fontWeight: 'bold',
        color: 'mediumorchid'
      };

      return (
        <nav>
          <NavLink exact to="/" activeStyle={activeStyle}>
            Jobly
          </NavLink>
          <NavLink exact to="/companies" activeStyle={activeStyle}>
            Companies
          </NavLink>
          <NavLink exact to="/jobs" activeStyle={activeStyle}>
            Jobs
          </NavLink>
          <NavLink exact to="/profile" activeStyle={activeStyle}>
            Profile
          </NavLink>
          {/* LOGOUT does this need to be a separate component/route? */}
          <NavLink exact to="/logout" activeStyle={activeStyle}>
            Logout
          </NavLink>
        </nav>
      );
    }
  }
}

export default NavBar;
