import React, { Component } from 'react';
import './Login.css';
import JoblyApi from './JoblyApi.js';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        username: '',
        password: '',
        hashedPassword: '',
        first_name: '',
        last_name: '',
        email: '',
        photo_url: '',
        loginToken: '',
        is_admin: ''
      }
    };
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.getStoreToken = this.getStoreToken.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    console.log('Inside Login constructor');
  }

  getStoreToken(response) {
    console.log(
      '---inside login.js, function getStoreToken, response is ',
      response
    );
    //This didnt work
    // //Creates a user object to send to the createToken file (backend)
    // let userObject = {
    //   user: {
    //     username: this.state.login.username,
    //     is_admin: this.state.login.is_admin
    //   }
    // };

    //get token from createToken file imported above ??Do we need this
    let obtainedToken = response.token;

    //Store token locally
    localStorage.setItem('token', obtainedToken);
    return obtainedToken;
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // runs on submit
    console.log(
      '--- inside login.js, handleSubmit function, evt is ',
      evt,
      'state is ',
      this.state
    );
    //sets the state in this file with inputs from the form. Also adds a token from above
    this.setState({
      login: {
        username: evt.target.username,
        password: evt.target.password,
        first_name: evt.target.first,
        last_name: evt.target.last,
        email: evt.target.email,
        photo_url: evt.target.photo_url
        // loginToken: this.getStoreToken()
      }
    });

    //How to check if user exists inside the database???
    if (this.state.login.email) {
      this.register();
    } else {
      this.login();
    }
  }

  //Modify this. See what data needs to go to createUser function
  async register() {
    try {
      let response = await JoblyApi.createUser(this.state.login);
      this.setState({ login: response });

      // also get token and set token locally
      this.getStoreToken(response);
    } catch (error) {
      throw new Error('USER register error');
    }
  }

  async login() {
    try {
      let response = await JoblyApi.loginUser(this.state.login);
      this.setState({ login: response });

      // also get token and set token locally
      this.getStoreToken(response);
    } catch (error) {
      throw new Error('USER registration failed');
    }
  }

  // May not need handleChange
  handleChange(evt) {
    // runs on every keystroke
    console.log('---inside login.js handleChange ', evt.target);
    this.setState({
      [evt.target.name]: evt.target.value
      // [evt.target.login.password]: evt.target.value,
      // first_name: evt.target.first,
      // last_name: evt.target.last,
      // email: evt.target.email,
      // photo_url: evt.target.photo_url
    });
  }

  render() {
    return (
      <div className="Login pt-5">
        <div className="Login container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <div className="d-flex justify-content-end">
            <div className="btn-group">
              <button className="btn btn-primary active ">Login</button>
              <button className="btn btn-primary">Sign-up</button>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <form class="form-inline" onSubmit={this.handleSubmit}>
                <div class="form-group">
                  <label>Username</label>
                  <input
                    name="username"
                    type="text"
                    class="form-control"
                    onChange={this.handleChange}
                    value={this.state.login.username}
                  />
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input
                    name="password"
                    type="text"
                    class="form-control"
                    onChange={this.handleChange}
                    value={this.state.login.password}
                  />
                </div>
                <div class="form-group">
                  <label>First Name</label>
                  <input
                    name="first_name"
                    type="text"
                    class="form-control"
                    onChange={this.handleChange}
                    value={this.state.login.first_name}
                  />
                </div>
                <div class="form-group">
                  <label>Last Name</label>
                  <input
                    name="last_name"
                    type="text"
                    class="form-control"
                    onChange={this.handleChange}
                    value={this.state.login.last_name}
                  />
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input
                    name="email"
                    type="text"
                    class="form-control"
                    onChange={this.handleChange}
                    value={this.state.login.email}
                  />
                </div>
                <div class="form-group">
                  <label>Photo URL</label>
                  <input
                    name="photo_url"
                    type="url"
                    class="form-control"
                    onChange={this.handleChange}
                    value={this.state.login.photo_url}
                  />
                </div>
                <button class="btn btn-primary float-right" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
