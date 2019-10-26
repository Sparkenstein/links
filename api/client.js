const db = require('./db');

module.exports = {
    getId: () => db.prepare(`SELECT MAX(ID) as 'id' FROM links;`),
    getLinkByDesc: desc =>
        db.prepare(`SELECT * FROM links where description LIKE %${desc}%;`),
    insertRecort: record =>
        db.prepare(
            `INSERT INTO links(url, description, category, tags, upvotes,  reports, short_url) values(${Object.values(
                record
            ).map(d => `'${d}'`)});`
        )
};
