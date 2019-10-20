const polka = require("polka");
const router = polka();

const postHandler = require("./postHandler");
const getHandler = require("./getHandler");

router
    .get("/get", getHandler)
    .post("/post", postHandler);

module.exports = router
