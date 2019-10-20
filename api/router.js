const polka = require("polka");
const router = polka();

const client = require("./db");
const INDEX = "index";
const SET_KEY = "link:";

router
    .get("/get", (req, res) => {res.end("Get links")})
    .post("/post", async (req, res) => {
      const request = req.body;
      if(request.flushall){
        await client.flushall();
      }
      const id = await client.incr(INDEX);
      request.id = id;
      try {
        console.log("setting", `${SET_KEY}${id}`, ...Object.entries(request).flat());
        await client.hset(`${SET_KEY}${id}`, ...Object.entries(request).flat());
        res.end("Done");
      } catch (e) {
        console.error(e);        
        res.end("error occurred");        
      }
    });

module.exports = router
