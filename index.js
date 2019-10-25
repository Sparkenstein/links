'use strict';
const polka = require('polka');
const { json } = require('body-parser');
const routes = require('./api');

const instance = polka().listen(3001, () => {
    console.log('Server started on port 3001');
});

instance
    .use(json())
    .use('/api', routes);
