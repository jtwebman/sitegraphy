'use strict';

const request = require('supertest');
const assert = require('chai').assert;

const app = require('../../../server/app');

describe('GET /status', () => {
  it('respond with OK', () =>
    request(app)
      .get('/status')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        assert.equal(res.body.status, 'OK', 'Status should be OK');
      }));
});
