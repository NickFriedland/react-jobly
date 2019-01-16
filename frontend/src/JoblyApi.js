import axios from 'axios';

class JoblyApi {
  static async request(endpoint, params = {}, verb = 'get') {
    params._token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE1NDE1NjQ2Nzl9.LYDHSkl81gEm7jfHv9wJhzD4ndpuBkSzBan8Nirb6UY'; // for now, hardcode token for "testuser"

    console.debug('API Call:', endpoint, params, verb);
    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        params: params
      })).data;
    } catch (err) {
      console.error('API Error:', err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle) {
    console.log('Inside getCompany');
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }
}

export default JoblyApi;
