import axios from 'axios';

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = 'get') {
    paramsOrData._token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE1NDE1NjQ2Nzl9.LYDHSkl81gEm7jfHv9wJhzD4ndpuBkSzBan8Nirb6UY'; // for now, hardcode token for "testuser"

    console.debug('API Call:', endpoint, paramsOrData, verb);
    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === 'get' ? 'params' : 'data']: paramsOrData
      })).data;
    } catch (err) {
      console.error('API Error:', err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle) {
    // console.log('Inside getCompany');
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanies() {
    // console.log('Inside getCompanies');
    let res = await this.request(`companies`);
    // console.log('Inside getCompany', res);
    return res.companies;
  }

  static async searchCompanies(searchTerm) {
    console.log('Inside getCompany');
    let res = await this.request(`companies/`, { search: searchTerm });
    return res.companies;
  }

  static async getJob(id) {
    // console.log('Inside getCompany');
    let res = await this.request(`jobs/${id}`);
    return res.job;
  }

  static async getJobs() {
    // console.log('Inside getCompanies');
    let res = await this.request(`jobs`);
    // console.log('Inside getCompany', res);
    return res.jobs;
  }

  static async searchJobs(searchTerm) {
    console.log('Inside getCompany');
    let res = await this.request(`jobs/`, { search: searchTerm });
    return res.jobs;
  }
}

export default JoblyApi;
