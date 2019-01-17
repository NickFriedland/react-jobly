import React, { Component } from 'react';
//import './JobCard.css';
// import styled from 'styled-components';

class JobCard extends Component {
  render() {
    return (
      <div className="JobCard">
        <div className="JobCard card mb-2 shadow-sm rounded">
          <div className="card-body col-10">
            <div className="row">
              <div className="col-10">
                <b>{this.props.job.title}</b>
              </div>
              <div className="col-2">
                <button className="danger">Applied</button>
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
