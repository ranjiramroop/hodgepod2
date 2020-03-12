const router = require('express').Router();
const users = require('./users')
const podcasts =  require("./podcasts");

router.use('/users', users)
router.use('/Podcast', podcasts)

module.exports = router;