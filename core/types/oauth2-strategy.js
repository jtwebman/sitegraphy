'use strict';

const {OBJECT} = require('../schema/schema-types');
const {STRING, RELATIONSHIP} = require('../schema/base-types');
const {HAS_ONE} = require('../schema/relationship-types');

module.exports = {
  type: OBJECT,
  name: 'oath2Strategy',
  extensions: ['id'],
  properties: [
    {
      name: 'type',
      type: RELATIONSHIP,
      relationship: HAS_ONE,
      relationshipType: 'strategy'
    },
    {
      name: 'user',
      type: RELATIONSHIP,
      relationship: HAS_ONE,
      relationshipType: 'user'
    },
    {
      name: 'profileId',
      type: STRING
    }
  ]
};
