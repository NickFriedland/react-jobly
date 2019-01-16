import React, { Component } from 'react';
//import './Profile.css';

class Profile extends Component {
  handleSubmit(evt) {
    // runs on every keystroke
    this.setState({
      fullName: evt.target.value
    });
  }

  handleChange(evt) {
    // runs on every keystroke
    this.setState({
      fullName: evt.target.value
    });
  }

  render() {
    return (
      <div className="Profile">
        <h1>Hello From Profile</h1>;
      </div>
    );
  }
}

export default Profile;
