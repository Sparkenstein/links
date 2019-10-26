"use strict";
const polka = require("polka");
const router = polka();


const client = require('./db');
const postHandler = require("./postHandler");
const getHandler = require("./getHandler");

router
    .get("/get/:id", getHandler(client))
    .post("/post", (req, res) => {
        const request = req.body;
        if(!request.link){
            res.writeHead(400, "Bad Request")
            res.end('{"message": "URL is missing"}')
        }
        if(!request.category){
            res.writeHead(400, "Bad Request")
            res.end('{"message": "Category is required"}')
        }
        if(!request.tags || request.tags.length <1){
            res.writeHead(400, "Bad Request")
            res.end('{"message": "At least 1 tag is required"}')
        }
        res.end('{"message": "saved"}')
    });

module.exports = router
