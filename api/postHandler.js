'use strict';

function posthandler(client) {
    return async function handler(req, res) {
        const request = req.body;
        try {
            if (!request.url) {
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
            if(!request.description){
                res.writeHead(400, 'Bad Request');
                res.end('{"message": "Please provide some description"}');
            }
            request.upvotes = 0;
            request.reports = 0;
            client.insertRecort(request).run();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Saved' }));
        } catch (e) {
            console.error(e);
            res.end('error occurred');
        }
    };
}

module.exports = posthandler;
