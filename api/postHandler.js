const INDEX = 'index';
const SET_KEY = 'link:';

function posthandler(client) {
    return async function handler(req, res){
        const request = req.body;
        const id = await client.incr(INDEX);
        try {
            await client.hset(`${SET_KEY}${id}`, ...Object.entries(request));
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end('Done');
        } catch (e) {
            console.error(e);
            res.end('error occurred');
        }
    }    
}

module.exports = posthandler;
