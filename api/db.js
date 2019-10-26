'use strict';
const db = require('better-sqlite3')('linksStorage.db', { verbose: console.log });
db.pragma('journal_mode = WAL');

db.prepare(
    `
CREATE TABLE IF NOT EXISTS links (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT NOT NULL,
    tags TEXT NOT NULL,
    upvotes INTEFER DEFAULT 0,
    description TEXT NOT NULL,
    create_ts DATETIME DEFAULT CURRENT_TIMESTAMP,
    reports INTEFER DEFAULT 0,
    category TEXT NOT NULL
);
`
).run();

module.exports = db;
