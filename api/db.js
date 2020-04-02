'use strict';
const Redis = require('ioredis');
const db = new Redis({ retryStrategy: times => (times < 10 ? 10 : false) });

(async () => {
    const monitor = await db.monitor();
    monitor.on('monitor', console.log);
})();

module.exports = db;
