'use strict';
const { encode } = require('./shortUrl');

const INDEX = 'index';
const SET_KEY = 'link:';
function posthandler(client) {
    return async function handler(req, res) {
        const request = req.body;
        const id = await client.incr(INDEX);
        try {
            if (!request.link) {
                res.writeHead(400, 'Bad Request');
                res.end('{"message": "URL is missing"}');
            }
            if (!request.category) {
                res.writeHead(400, 'Bad Request');
                res.end('{"message": "Category is required"}');
            }
            if (!request.tags || request.tags.length < 1) {
                res.writeHead(400, 'Bad Request');
                res.end('{"message": "At least 1 tag is required"}');
            }
            request.upvotes = 0;
            request.create_ts = new Date().getTime();
            request.reports = 0;
            request.short = encode(id);

            await client.hset(`${SET_KEY}${id}`, ...Object.entries(request));
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Saved' }));
        } catch (e) {
            console.error(e);
            res.end('error occurred');
        }
    };
}

module.exports = posthandler;
