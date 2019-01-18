import React, { Component } from 'react';
import './Login.css';
import JoblyApi from './JoblyApi.js';
import { Switch, Route, Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      email: '',
      photo_url: ''
    };
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.getStoreToken = this.getStoreToken.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    // runs on submit
    console.log(
      '--- inside login.js, handleSubmit function, evt is ',
      evt,
      'state is ',
      this.state
    );
    //sets the state in this file with inputs from the form. Also adds a token from above
    // this.setState({
    //   username: evt.target.username,
    //   password: evt.target.password,
    //   first_name: evt.target.first,
    //   last_name: evt.target.last,
    //   email: evt.target.email,
    //   photo_url: evt.target.photo_url
    //   // loginToken: this.getStoreToken()
    // });

    //How to check if user exists inside the database???
    if (this.state.email) {
      await this.register();
    } else {
      await this.login();
    }
    return <Redirect to="/companies" />;
  }

  //Modify this. See what data needs to go to createUser function
  async register() {
    try {
      let response = await JoblyApi.createUser(this.state);
      this.setState({ ...response });
      console.log(
        'Inside login.js, register function, this.state ',
        this.state
      );

      // also get token and set token locally
      let token = this.getStoreToken(response);

      //update the token in App.js
      this.prop.updateAppToken(token);

      return <Redirect to="/companies" />; // not working
      // this.props.history.push('/companies');
    } catch (error) {
      throw new Error('USER register error');
    }
  }

  async login() {
    try {
      console.log('Inside login.js, login function, this.state is', this.state);
      let response = await JoblyApi.loginUser(this.state);
      this.setState({ ...response });
      console.log('Inside login.js, login function, this.state ', this.state);

      // also get token and set token locally
      let token = this.getStoreToken(response);

      //update the token in App.js
      // this.prop.updateAppToken(token);

      // this.props.history.push('/companies');
      return <Redirect to="/companies" />; // not working
    } catch (error) {
      throw new Error('USER login failed');
    }
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
    //     username: this.state.username,
    //     is_admin: this.state.is_admin
    //   }
    // };

    //get token from createToken file imported above ??Do we need this
    let obtainedToken = response.token;

    //Store token locally
    localStorage.setItem('token', obtainedToken);
    localStorage.setItem('username', this.state.username);
    console.log(localStorage);
    return obtainedToken;
  }

  // May not need handleChange
  handleChange(evt) {
    // runs on every keystroke
    // console.log('---inside login.js handleChange ', evt.target);
    this.setState({
      [evt.target.name]: evt.target.value
      // [evt.target.login.password]: evt.target.value,
      // first_name: evt.target.first,
      // last_name: evt.target.last,
      // email: evt.target.email,
      // photo_url: evt.target.photo_url
    });
  }

  showRegisterForm = evt => {
    this.setState({ registerForm: true });
  };

  showLoginForm = evt => {
    this.setState({ registerForm: false });
  };

  render() {
    return (
      <div className="Login pt-5">
        <div className="Login container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <div className="d-flex justify-content-end">
            <div className="btn-group">
              <button onClick={this.showLoginForm} className="btn-primary">
                Login
              </button>
              <button onClick={this.showRegisterForm} className="btn-primary">
                Sign Up
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <form className="form-inline" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    name="username"
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    value={this.state.username}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    name="password"
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    value={this.state.password}
                  />
                </div>
                {this.state.registerForm && (
                  <>
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        name="first_name"
                        type="text"
                        className="form-control"
                        onChange={this.handleChange}
                        value={this.state.first_name}
                      />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        name="last_name"
                        type="text"
                        className="form-control"
                        onChange={this.handleChange}
                        value={this.state.last_name}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        name="email"
                        type="text"
                        className="form-control"
                        onChange={this.handleChange}
                        value={this.state.email}
                      />
                    </div>
                    <div className="form-group">
                      <label>Photo URL</label>
                      <input
                        name="photo_url"
                        type="url"
                        className="form-control"
                        onChange={this.handleChange}
                        value={this.state.photo_url}
                      />
                    </div>
                  </>
                )}
                <button className="btn btn-primary float-right" type="submit">
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
