import React, { Component } from 'react';
//import './Jobs.css';
import styled from 'styled-components';
import JoblyApi from './JoblyApi.js';

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = { jobs: [] };
  }

  async componentDidMount() {
    console.log('Inside Jobs.js');
    let jobs = JoblyApi.getJobs('/').then(res => console.log('get jobs', res));
  }

  render() {
    return (
      <div className="Jobs">
        <h1>Hello From Jobs</h1>;{/* <Link to={`/jobs/${id}`}>{}</Link> */}
      </div>
    );
  }
}

export default Jobs;

JoblyApi.getJob('1').then(res => console.log('get job', res));
