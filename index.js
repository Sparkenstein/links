const polka = require("polka");
const routes = require("./api");
const instance = polka().listen(3000, () => {
    console.log("Server started on port 3000")
});

instance.use("/api", routes);

    