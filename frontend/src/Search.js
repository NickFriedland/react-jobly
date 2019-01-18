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
      <div className="Search input-group">
        <form
          className="form-inline col-md-12 my-4"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            className="form-control col-lg-10"
            value={this.state.term}
            onChange={this.handleChange}
            placeholder="Enter search term"
            name="search"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
