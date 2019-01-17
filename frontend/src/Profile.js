import React, { Component } from 'react';
//import './Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * This function fetches user information from the API
   *  at /users/{username} using a token. Then it sets all the
   *  appropriate instance properties from the response.
   *  Finally it invokes a callback with the current user instance.
   * @param {Function} cb a callback to invoke when completed
   */
  // retrieveDetails(cb) {
  //   $.getJSON(
  //     `${BASE_URL}/users/${this.username}`,
  //     { token: this.loginToken },
  //     response => {
  //       // update all of the user's properties from the API response
  //       this.name = response.user.name;
  //       this.createdAt = response.user.createdAt;
  //       this.updatedAt = response.user.updatedAt;
  //       // remember to convert the user's favorites and ownStories into instances of Story
  //       this.favorites = response.user.favorites.map(story => new Story(story));
  //       this.ownStories = response.user.stories.map(story => new Story(story));

  //       // pass the current user instance to the supplied callback
  //       return cb(this);
  //     }
  //   );
  // }

  /**
   * Send a PATCH request to the API in order to update the user
   * @param {Object} userData - the user properties you want to update
   * @param {Function} cb - a callback function to invoke upon success
   */
  // update(userData, cb) {
  //   $.ajax({
  //     url: `${BASE_URL}/users/${this.username}`,
  //     method: 'PATCH',
  //     data: {
  //       user: userData,
  //       token: this.loginToken
  //     },
  //     success: response => {
  //       // "name" is really the only property you can update
  //       this.name = response.user.name;

  //       // Note: you can also update "password" but we're not storing it

  //       // pass the current user instance to the supplied callback
  //       return cb(this);
  //     }
  //   });
  // }

  handleSubmit(evt) {
    // runs on every keystroke
    this.setState({
      fullName: evt.target.value
    });
  }

  handleChange(evt) {
    // runs on every keystroke
    this.setState({
      fullName: evt.target.value
    });
  }

  render() {
    return (
      <div className="Profile">
        <h1>Hello From Profile</h1>;
      </div>
    );
  }
}

export default Profile;
