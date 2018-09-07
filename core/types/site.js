'use strict';

const {OBJECT} = require('../schema/schema-types');
const {STRING, RELATIONSHIP} = require('../schema/base-types');
const {HAS_MANY} = require('../schema/relationship-types');

module.exports = {
  type: OBJECT,
  name: 'site',
  extensions: ['id'],
  properties: [
    {
      name: 'name',
      type: STRING,
      length: 100
    },
    {
      name: 'domain',
      type: STRING
    },
    {
      name: 'rootUrl',
      type: STRING
    },
    {
      name: 'users',
      type: RELATIONSHIP,
      relationship: HAS_MANY,
      relationshipType: 'userSiteRole'
    }
  ]
};
