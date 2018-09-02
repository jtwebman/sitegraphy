'use strict';

const config = require('config');

const app = require('./server/app');

const port = config.get('server.port');

app.listen(port, () => console.log(`Server running on port ${port}`));
