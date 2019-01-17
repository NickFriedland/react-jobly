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