'use strict';

const {OBJECT} = require('../schema/schema-types');
const {STRING, RELATIONSHIP} = require('../schema/base-types');
const {HAS_MANY} = require('../schema/relationship-types');

module.exports = {
  type: OBJECT,
  name: 'permission',
  extensions: ['id'],
  properties: [
    {
      name: 'scope',
      type: STRING
    },
    {
      name: 'description',
      type: STRING
    },
    {
      name: 'role',
      type: RELATIONSHIP,
      relationship: HAS_MANY,
      relationshipType: 'role'
    }
  ]
};
