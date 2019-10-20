const Redis = require("ioredis");
const db = new Redis();


const client = {
    flushall: async () => await db.flushall(),
    get:      async (key) => {
        console.log("getting", key);
        return await db.get(key);
    },
    incr:     async (key) => await db.incr(key)
}

module.exports = client;
