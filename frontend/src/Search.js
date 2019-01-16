import React, { Component } from 'react';
//import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    // runs on button submission
    evt.preventDefault();
    console.log('SEARCH HANDLE SUBMIT', this.state.term);
    this.props.searchFilter(this.state.term);
    this.setState({ term: '' });
  }

  handleChange(evt) {
    // runs on every keystroke
    this.setState({
      term: evt.target.value
    });
  }

  render() {
    return (
      <div className="Search">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="term"
            value={this.state.term}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        {/* Conditional logic determines if search renders
        Companies child or Jobs child */}
      </div>
    );
  }
}

export default Search;
