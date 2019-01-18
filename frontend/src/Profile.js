import React, { Component } from 'react';
import JoblyApi from './JoblyApi';
import { Switch, Route, Redirect } from 'react-router-dom';
//import './Profile.css';

class Profile extends Component {
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.editProfile = this.editProfile.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log(
      '--- inside profile.js, handleSubmit function, evt is ',
      evt,
      'state is ',
      this.state
    );

    this.editProfile();

    return <Redirect to="/jobs" />;
  }

  async editProfile() {
    let response = await JoblyApi.updateUser(this.state);
    this.setState({ ...response }); // Get clarification about this
    console.log(
      'Inside profile.js, editProfile function, this.state ',
      this.state
    );
    // Update state.user in App.js
    this.props.updateUser(this.state);

    return <Redirect to="/jobs" />; // not working
  }

  handleChange(evt) {
    // runs on every keystroke
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    return (
      <div className="Profile">
        <div className="pt-5">
          <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
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
                  <button className="btn btn-primary float-right" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
