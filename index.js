'use strict';
const polka = require('polka');
const { json } = require('body-parser');
const { join } = require("path");
const routes = require('./api');

const dir = join(__dirname, 'public');
const serve = require('serve-static')(dir);
const instance = polka().listen(3000, () => {
    console.log('Server started on port 3000');
});

instance
    .use(json())
    .use(serve)
    .use('/api', routes)
    .get('/', (req, res) => {
        res.end("<h1>Hello Page</h1>")
    });
