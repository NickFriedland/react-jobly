import React, { Component } from 'react';
import JobCard from './JobCard';
import JoblyApi from './JoblyApi';
//import './Company.css';

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      jobs: []
    };
  }

  /* DELETEING try/catch causes const handle to break 
  (See: syntax on JobCard for url params)
  */
  async componentDidMount() {
    let response = await JoblyApi.getCompany(this.props.match.params.company);
    this.setState({
      name: response.name,
      description: response.description,
      jobs: response.jobs
    });
  }

  render() {
    console.log('USER DATA', this.props.userInfo.jobs);
    return (
      <div className="Company">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <h5>{this.state.name}</h5>
              <p>{this.state.description}</p>
              {this.state.jobs.map(job => (
                <JobCard
                  key={job.id}
                  job={job}
                  appliedJobs={this.props.userInfo.jobs}
                  refreshUser={this.props.refreshUser}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Company;
