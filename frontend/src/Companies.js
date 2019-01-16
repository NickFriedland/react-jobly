import React, { Component } from 'react';
import Search from './Search.js';
//import './Companies.css';

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange(evt) {
    // runs on every keystroke
    this.setState({
      fullName: evt.target.value
    });
  }

  render() {
    return (
      <div className="Companies">
        <Search />
        {/* Placeholder for companies list, 
        conditional logic for backend to search * 
        or filter by company name */}
      </div>
    );
  }

  state = {};
}

Companies.propTypes = {};

Companies.defaultProps = {};

export default Companies;
