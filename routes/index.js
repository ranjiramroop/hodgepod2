const express = require('express');
const router = express.Router();
const ShoppingList = require('../models/hodgepod');

const apiRoutes = require("./api");

// Book routes
router.use("/api", apiRoutes);

module.exports = router;

