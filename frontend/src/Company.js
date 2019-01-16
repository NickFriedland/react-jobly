import React, { Component } from 'react';
//import './Company.css';

class Company extends Component {
  handleChange(evt) {
    // runs on every keystroke
    this.setState({
      fullName: evt.target.value
    });
  }

  render() {
    return (
      <div className="Company">
        <h1>Hello From Company</h1>;
      </div>
    );
  }
}

export default Company;
