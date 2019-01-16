import React, { Component } from 'react';
//import './Search.css';

class Search extends Component {
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
      <div className="Search">
        <h1>Hello From Search</h1>;
      </div>
    );
  }
}

export default Search;
