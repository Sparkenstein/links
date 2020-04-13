'use strict';
// const Redis = require('ioredis');
// const db = new Redis({ retryStrategy: times => (times < 10 ? 10 : false) });

// (async () => {
//     const monitor = await db.monitor();
//     monitor.on('monitor', console.log);
// })();

// module.exports = db;

const Datastore = require('nedb-promises');

const nedb = new Datastore({ filename: './records.db', autoload: true });
nedb.ensureIndex({ fieldName: 'url' });

const db = {
    find: async function (query) {
        const res = await nedb.find({
            $or: [
                { url: { $regex: new RegExp(query, 'i') } },
                { description: { $regex: new RegExp(query, 'i') } }
            ]
        });
        console.log('doc found', res);
        return res;
    },
    insert: async function (doc) {
        return nedb.insert(doc).catch(console.error);
    }
};

module.exports = db;
