import React, { Component } from 'react';
import './Jobs.css';
import styled from 'styled-components';
import JoblyApi from './JoblyApi.js';
import Search from './Search.js';
import { Link } from 'react-router-dom';

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = { jobs: [] };
    this.searchJobs = this.searchJobs.bind(this);
  }

  async componentDidMount() {
    console.log('Inside componentDidMount Jobs.js');

    try {
      let response = await JoblyApi.getJobs('/');
      this.setState({ jobs: response });
    } catch (error) {
      throw new Error('Jobs did not mount');
    }
  }

  async searchJobs(searchTerm) {
    console.log('Inside searchJobs Jobs.js');
    let response = await JoblyApi.searchJobs(searchTerm);
    this.setState({ jobs: response });
    try {
    } catch (error) {
      throw new Error('Searching for Job:  Not found');
    }
  }

  render() {
    return (
      <div className="pt-5">
        <div className="Jobs col-md-8 offset-md-2">
          <h1>Hello From Jobs</h1>
          <Search searchFilter={this.searchJobs} />
          {this.state.jobs.map(job => (
            <Link to={`/jobs/${job.id}`}>
              <div>{job.title}</div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Jobs;

JoblyApi.getJob('1').then(res => console.log('get job', res));
