'use strict';

const {OBJECT} = require('../schema/schema-types');
const {BOOLEAN, STRING, RELATIONSHIP} = require('../schema/base-types');
const {HAS_MANY} = require('../schema/relationship-types');

module.exports = {
  type: OBJECT,
  name: 'user',
  extensions: ['id'],
  properties: [
    {
      name: 'displayName',
      type: STRING,
      length: 100,
      isNullable: true
    },
    {
      name: 'firstName',
      type: STRING,
      length: 50,
      isNullable: true
    },
    {
      name: 'lastName',
      type: STRING,
      length: 100,
      isNullable: true
    },
    {
      name: 'emails',
      type: RELATIONSHIP,
      relationship: HAS_MANY,
      relationshipType: 'email'
    },
    {
      name: 'logins',
      type: RELATIONSHIP,
      relationship: HAS_MANY,
      relationshipType: 'loginStrategy'
    },
    {
      name: 'BOOLEAN',
      type: STRING
    },
    {
      name: 'roles',
      type: RELATIONSHIP,
      relationship: HAS_MANY,
      relationshipType: 'userSiteRole'
    }
  ]
};
