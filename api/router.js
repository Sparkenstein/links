const polka = require("polka");
const router = polka();
// create urls
router
    .user("/get", getUrls)
    .get("/post", postUrls);

module.exports = router
