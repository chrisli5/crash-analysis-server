const router = require('express').Router();
const SitesController = require('./sites.controller');

router.get('/', (req, res, next) =>
    res.json({
        message: 'connected to /',
    })
);

router.get('/:siteName', async (req, res) => {
    const { rows } = await SitesController.find(req.params.siteName);

    return res.json({
        data: rows,
    });
});

module.exports = router;
