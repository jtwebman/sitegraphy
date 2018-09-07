'use strict';

const {EXTENDER} = require('../schema/schema-types');
const {UUID} = require('../schema/base-types');

module.exports = {
  type: EXTENDER,
  name: 'id',
  properties: [
    {
      name: 'id',
      type: UUID,
      isPrimary: true
    }
  ]
};
