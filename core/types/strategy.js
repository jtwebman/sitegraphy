'use strict';

const {ENUM} = require('../schema/schema-types');

module.exports = {
  type: ENUM,
  name: 'strategy',
  items: {
    USERNAME_PASSWORD: 1,
    FACEBOOK: 2,
    GOOGLE: 3,
    TWITTER: 4,
    GITHUB: 5
  }
};
