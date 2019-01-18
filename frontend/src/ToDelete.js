/**
   * A static method that logs in an existing user via the API and passes a newly-created User instance to the callback
   * @param {String} username - an existing user's username
   * @param {String} password - an existing user's password
   * @param {Function} cb - a callback function to run on success from the API
   */
  static login(username, password, cb) {
    $.post(
      `${BASE_URL}/login`,
      {
        user: {
          username,ß
          password
        }
      },
      function(response) {
        // build a new User instance from the API response
        const existingUser = new User(response.user);

        // attach the token to the newUser instance for convenience
        existingUser.loginToken = response.token;

        // save the token to localStorage
        localStorage.setItem('token', response.token);

        // also save the username so that we don't have to decode the token to get it every time
        localStorage.setItem('username', existingUser.username);

        return cb(existingUser);
      }
    );
  }

  /**
   * This function grabs a token and username from localStorage.
   *  It uses the token & username to make an API request to get details
   *   about the user. Then it creates an instance of user with that info
   *   and passes it to the callback function.
   * @param {Function} cb - a callback to run after a successful API call
   */
  static stayLoggedIn(cb) {
    // get username and token from localStorage
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    // call the API
    $.getJSON(`${BASE_URL}/users/${username}`, { token }, function(response) {
      // instantiate the user from the API information
      const existingUser = new User(response.user);

      // attach the token to the newUser instance for convenience
      existingUser.loginToken = token;

      // everything is all set; let's pass the user instance to the callback
      return cb(existingUser);
    });
  }



  /**
   * This function fetches user information from the API
   *  at /users/{username} using a token. Then it sets all the
   *  appropriate instance properties from the response.
   *  Finally it invokes a callback with the current user instance.
   * @param {Function} cb a callback to invoke when completed
   */
  retrieveDetails(cb) {
    $.getJSON(
      `${BASE_URL}/users/${this.username}`,
      { token: this.loginToken },
      response => {
        // update all of the user's properties from the API response
        this.name = response.user.name;
        this.createdAt = response.user.createdAt;
        this.updatedAt = response.user.updatedAt;
        // remember to convert the user's favorites and ownStories into instances of Story
        this.favorites = response.user.favorites.map(story => new Story(story));
        this.ownStories = response.user.stories.map(story => new Story(story));

        // pass the current user instance to the supplied callback
        return cb(this);
      }
    );
  }

  /**
   * Send a PATCH request to the API in order to update the user
   * @param {Object} userData - the user properties you want to update
   * @param {Function} cb - a callback function to invoke upon success
   */
  update(userData, cb) {
    $.ajax({
      url: `${BASE_URL}/users/${this.username}`,
      method: 'PATCH',
      data: {
        user: userData,
        token: this.loginToken
      },
      success: response => {
        // "name" is really the only property you can update
        this.name = response.user.name;

        // Note: you can also update "password" but we're not storing it

        // pass the current user instance to the supplied callback
        return cb(this);
      }
    });
  }