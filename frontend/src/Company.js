import React, { Component } from 'react';
import JobCard from './JobCard';
//import './Company.css';

class Company extends Component {
  render() {
    // console.log('THIS COMPANY PAGE', this.props.company);
    return (
      <div className="Company">
        {/* <h3>{this.props.company.name}</h3> */}
        <JobCard />
      </div>
    );
  }
}

export default Company;
