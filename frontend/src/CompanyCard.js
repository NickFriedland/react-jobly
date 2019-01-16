import React, { Component } from 'react';
//import './CompanyCard.css';

class CompanyCard extends Component {
  handleChange(evt) {
    // runs on every keystroke
    this.setState({
      fullName: evt.target.value
    });
  }

  render() {
    return (
      <div className="CompanyCard">
        <h1>Hello From CompanyCard</h1>;
      </div>
    );
  }
}

export default CompanyCard;
