const polka = require("polka");
const router = polka();

const client = require("./db");

// create urls
router
    .get("/get", (req, res) => {res.end("Get links")})
    .post("/post", async (req, res) => {
      await client.incr(req.body.get)
      const id = await client.get(req.body.get);
      res.end(`done ${id }`);
      // db.hset
    });

module.exports = router
