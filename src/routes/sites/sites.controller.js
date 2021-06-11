const format = require('pg-format');
const db = require('../../db');

const SitesController = {
    find(name) {
        if (
            ['bustabit', 'bustadice', 'ethercrash', 'etherdice'].indexOf(
                name.toLowerCase()
            ) > -1
        ) {
            return db.query(format('SELECT * FROM %I', name));
        }
        return [{}];
    }
};

module.exports = SitesController;
