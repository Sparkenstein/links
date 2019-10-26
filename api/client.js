const db = require('./db');

module.exports = {
    getLinkByDesc: desc =>
        db.prepare(`SELECT * FROM links where description LIKE %${desc}%;`),
    insertRecort: record =>
        db.prepare(
            `INSERT INTO links(url, description, category, tags, upvotes,  reports) values(${Object.values(
                record
            ).map(d => `'${d}'`)});`
        )
};
