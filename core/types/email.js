'use strict';

const {OBJECT} = require('../schema/schema-types');
const {STRING, RELATIONSHIP} = require('../schema/base-types');
const {HAS_ONE} = require('../schema/relationship-types');

module.exports = {
  type: OBJECT,
  name: 'email',
  extensions: ['id'],
  properties: [
    {
      name: 'user',
      type: RELATIONSHIP,
      relationship: HAS_ONE,
      relationshipType: 'user',
      isVisible: false
    },
    {
      name: 'name',
      type: STRING,
      length: 100,
      isNullable: true
    },
    {
      name: 'email',
      type: STRING
    }
  ]
};
