/** Routes for authentication. */

const User = require('../models/user');
const express = require('express');
const router = new express.Router();
const createToken = require('../helpers/createToken');

router.post('/login', async function(req, res, next) {
  try {
    console.log('in auth.js in route, req.body is ', req.body);
    const user = await User.authenticate(req.body);
    const token = createToken(user);
    console.log('in auth.js in route, token is ', token);
    return res.json({ token });
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
