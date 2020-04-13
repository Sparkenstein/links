'use strict';

function getHandler(client) {
    return async function handler(req, res) {
        const { id } = req.params;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const data = await client.find(id);
        res.end(JSON.stringify({ data }));
    };
}

module.exports = getHandler;
