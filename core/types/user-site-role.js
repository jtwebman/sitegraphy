'use strict';

const {OBJECT} = require('../schema/schema-types');
const {STRING, RELATIONSHIP} = require('../schema/base-types');
const {HAS_MANY} = require('../schema/relationship-types');

module.exports = {
  type: OBJECT,
  name: 'userSiteRole',
  properties: [
    {
      name: 'user',
      type: RELATIONSHIP,
      relationship: HAS_ONE,
      relationshipType: 'user',
      isPrimary: true
    },
    {
      name: 'site',
      type: RELATIONSHIP,
      relationship: HAS_ONE,
      relationshipType: 'site',
      isPrimary: true
    },
    {
      name: 'role',
      type: RELATIONSHIP,
      relationship: HAS_ONE,
      relationshipType: 'role',
      isPrimary: true
    }
  ]
};
