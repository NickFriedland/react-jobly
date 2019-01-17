import React, { Component } from 'react';
import JobCard from './JobCard';
import JoblyApi from './JoblyApi';
//import './Company.css';

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = { jobs: [] };
  }

  async componentDidMount(handle) {
    try {
      let response = await JoblyApi.getCompany(handle);
      this.setState({ jobs: response });
    } catch (error) {
      throw new Error('Jobs did not mount');
    }
  }

  render() {
    return (
      <div className="Company">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {this.state.jobs.map(job => (
                <JobCard job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Company;
