'use strict';

const config = require('config');
const express = require('express');
const app = express();

const statusRouter = require('./routers/status');

app.use(config.get('server.routers.status.path'), statusRouter);

module.exports = app;
