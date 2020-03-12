const express = require("express");
const router = express.Router();
const ShoppingList = require("../models/hodgepod");
const users = require("./api/users");
//const podcasts = require("./api/podcasts");

//const apiRoutes = require("./api/index.js");

router.use("/users", users);
//router.use("/Podcast", podcasts);
// router.get("/test", (req, res) => {
//   res.send("test");
// });
// Book routes
// router.use("/api", apiRoutes);

// module.exports = router;

module.exports = router;
