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
      <div class="Search input-group mb-3">
        <form class="form-inline" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-control"
            value={this.state.term}
            onChange={this.handleChange}
            placeholder="Enter search term.."
            name="search"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
