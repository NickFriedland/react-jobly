import React, { Component } from 'react';
//import './Login.css';

class Login extends Component {
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
      <div className="Login">
        <h1>Hello From Login</h1>;
      </div>
    );
  }
}

export default Login;
