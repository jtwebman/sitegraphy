'use strict';

const email = require('./email');
const id = require('./id');
const loginStrategy = require('./login-strategy');
const oauth2Strategy = require('./oauth2-strategy');
const permission = require('./permission');
const role = require('./role');
const site = require('./site');
const strategy = require('./strategy');
const userSiteRole = require('./user-site-role');
const user = require('./user');
const usernamePasswordStrategy = require('./username-password-strategy');

module.exports = {
  email,
  id,
  loginStrategy,
  oauth2Strategy,
  permission,
  role,
  site,
  strategy,
  userSiteRole,
  user,
  usernamePasswordStrategy
};
