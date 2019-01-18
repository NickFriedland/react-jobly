import React, { Component } from 'react';
import './Jobs.css';
import JoblyApi from './JoblyApi.js';
import Search from './Search.js';
import JobCard from './JobCard.js';
import { Link } from 'react-router-dom';

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = { jobs: [] };
    this.searchJobs = this.searchJobs.bind(this);
  }

  async componentDidMount() {
    console.log('Inside componentDidMount Jobs.js');

    let response = await JoblyApi.getJobs('/');
    this.setState({ jobs: response });
  }

  async searchJobs(searchTerm) {
    console.log('Inside searchJobs Jobs.js');

    let response = await JoblyApi.searchJobs(searchTerm);
    this.setState({ jobs: response });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <Search searchFilter={this.searchJobs} />
            {this.state.jobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Jobs;

// JoblyApi.getJob('1').then(res => console.log('get job', res));
