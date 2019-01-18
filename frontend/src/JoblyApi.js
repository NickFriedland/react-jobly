import axios from 'axios';

class JoblyApi {
  // static async request(endpoint, paramsOrData = {}, verb = 'get') {
  //   paramsOrData._token =
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE1NDE1NjQ2Nzl9.LYDHSkl81gEm7jfHv9wJhzD4ndpuBkSzBan8Nirb6UY'; // for now, hardcode token for "testuser"

  // PV edits
  static async request(endpoint, paramsOrData = {}, verb = 'get') {
    paramsOrData._token = localStorage.getItem('token');
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

  static async applyForJob(id) {
    console.log('inside JoblyApi, applyForJob');
    let res = await this.request(`jobs/${id}/apply`, 'post');
    return res.job;
  }

  //calls register function in user route '/' which calls the register function in the model with data which will be accessed as data.username
  static async createUser(data) {
    console.log('Inside createUser');
    let res = await this.request(`users/`, data, 'post');
    return res;
  }

  // This hits /login which calls User.authenticate which has req.body as its argument
  static async loginUser(data) {
    console.log('Inside loginUser, data is ', data);
    let res = await this.request(`login`, data, 'post');
    console.log('inside JoblyApi, loginuser, res is ', res);
    return res;
  }

  static async getUser(username) {
    console.log('in joblyapi.js getUser, username is', username);

    let res = await this.request(`users/${username}`);
    console.log('in joblyapi.js getUser, res is', res);
    return res;
  }

  static async updateUser(profile) {
    console.log('in joblyapi.js updateUser, profile is', profile);
    //Have to strip username off
    let profileUpdate = {
      password: profile.password,
      first_name: profile.first_name,
      last_name: profile.last_name,
      email: profile.email,
      photo_url: profile.photo_url
    };
    let res = await this.request(
      `users/${profile.username}`,
      profileUpdate,
      'patch'
    );
    console.log('in joblyapi.js updateUser, res is', res);
    return res;
  }
}

export default JoblyApi;
