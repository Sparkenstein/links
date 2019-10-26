'use strict';

function getHandler(client) {
    return function handler(req, res) {
        const data = client.getLinkByDesc("test").run();
        console.log(data);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({link: 'abc'}));
    };
}

module.exports = getHandler;
