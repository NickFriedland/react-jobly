import React, { Component } from 'react';
import Search from './Search.js';
import JoblyApi from './JoblyApi';
import { Link } from 'react-router-dom';
import CompanyCard from './CompanyCard.js';

//import './Companies.css';

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    };
    this.searchCompanies = this.searchCompanies.bind(this);
  }

  async componentDidMount() {
    try {
      let response = await JoblyApi.getCompanies('/');
      // console.log('get companies', companies);
      this.setState({ companies: response });
    } catch (error) {
      throw new Error('COMPANIES GET ALL ERROR');
    }
  }

  async searchCompanies(searchTerm) {
    console.log('SearchTerm Companies.js', searchTerm);
    try {
      let response = await JoblyApi.searchCompanies(searchTerm);
      this.setState({ companies: response });
    } catch (error) {
      throw new Error('COMPANY SEARCH ERR');
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <Search searchFilter={this.searchCompanies} />
            {this.state.companies.map(company => (
              <Link to={`/companies/${company.handle}`}>
                <CompanyCard company={company} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Companies;
