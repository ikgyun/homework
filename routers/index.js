const express = require('express');
const router = express.Router();
const main = require('/main');



router.use('/', main)

module.exports = router()