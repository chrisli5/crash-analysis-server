const router = require('express').Router();
const sites = require('./sites/sites.router');

router.use('/', sites);

module.exports = router;
