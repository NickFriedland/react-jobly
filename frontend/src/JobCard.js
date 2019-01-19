import React, { Component } from 'react';
//import './JobCard.css';
// import styled from 'styled-components';
import JoblyApi from './JoblyApi';

class JobCard extends Component {
  constructor(props) {
    super(props);

    this.toggleApplied = this.toggleApplied.bind(this);
    this.checkIfApplied = this.checkIfApplied.bind(this);
  }

  async toggleApplied() {
    // console.log('JOB APPLIED API CALL', id);
    let response = await JoblyApi.applyForJob(this.props.job.id);
    console.log('APPLIED RESPONSE', response);
    this.props.refreshUser();
  }

  checkIfApplied() {
    let userJobList = this.props.appliedJobs;
    let jobCardId = this.props.job.id;
    for (let i = 0; i < userJobList.length; i++) {
      // console.log(userJobList[i]);
      if (jobCardId === userJobList[i].id) {
        return true;
      }
    }
  }

  render() {
    // console.log('USER JOBS FROM APP', this.checkIfApplied());
    // console.log('JOBS FROM URL PARAMS', this.props.job.id);
    // this.checkIfApplied();

    return (
      <div className="JobCard">
        <div className="JobCard card mb-2 shadow-sm rounded">
          <div className="card-body col-10">
            <div className="row">
              <div className="col-10">
                <b>{this.props.job.title}</b>
              </div>
              <div className="col-2">
                {this.checkIfApplied() ? (
                  <button className="btn-success" disabled>
                    Applied
                  </button>
                ) : (
                  <button onClick={this.toggleApplied} className="btn-danger">
                    Apply
                  </button>
                )}
              </div>
              <div className="col-10">
                <p>{this.props.job.salary}</p>
                <p>{this.props.job.equity}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobCard;
