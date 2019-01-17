import React, { Component } from 'react';
import company from './company.png';
import './CompanyCard.css';

class CompanyCard extends Component {
  render() {
    return (
      <div className="CompanyCard card mb-2 shadow-sm rounded">
        <div className="card-body col-10">
          <div className="row">
            <div className="col-10">
              <b>{this.props.company.name}</b>
            </div>
            <div className="col-2">
              <img
                src={company}
                alt="company-default"
                className="company-icon float-right"
              />
            </div>
            <div className="col-10">
              <p>{this.props.company.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyCard;
