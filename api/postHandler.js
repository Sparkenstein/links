'use strict';

function posthandler(client) {
    return async function handler(req, res) {
        const request = req.body;
        try {
            await client.insert(request);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({message: 'OK'}));
        } catch (e) {
            console.error(e);
            res.end('error occurred');
        }
    };
}

module.exports = posthandler;
