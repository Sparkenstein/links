"use strict";
const polka = require("polka");
const router = polka();


const client = require('./db');
const postHandler = require("./postHandler");
const getHandler = require("./getHandler");

router
    .get("/get/:id", getHandler(client))
    .post("/post", postHandler(client));

module.exports = router
