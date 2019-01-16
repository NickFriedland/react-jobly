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
      <div className="Home">
        <h1>Hello Home</h1>;
      </div>
    );
  }
}

export default Home;
