import React, { Component } from 'react';
//import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  handleChange(evt) {
    // runs on every keystroke
    this.setState({
      fullName: evt.target.value
    });
  }

  render() {
    return (
      <div className="Home container text-center">
        <h1 className="mb-4 font-weight-bold">Jobly</h1>
        <p>All the jobs in one, convenient place.</p>
        <p>Welcome Back!</p>
      </div>
    );
  }
}

export default Home;
