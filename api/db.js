const Redis = require("ioredis");
const db = new Redis();

module.exports = db;
