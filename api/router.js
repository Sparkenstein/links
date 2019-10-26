"use strict";
const polka = require("polka");
const router = polka();


const client = require('./client');
const postHandler = require("./postHandler");
const getHandler = require("./getHandler");

router
    .get("/get", getHandler(client))
    .post("/post", postHandler(client));

module.exports = router
