'use strict';

const {UNION} = require('../schema/schema-types');

module.exports = {
  type: UNION,
  name: 'loginStrategy',
  types: ['oath2Strategy', 'usernamePasswordStrategy']
};
