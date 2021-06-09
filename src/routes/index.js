const router = require('express').Router();
const sites = require('./sites/sites.router');

router.use('/sites', sites);

module.exports = router;