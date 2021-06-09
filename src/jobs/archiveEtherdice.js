const mongoose = require('mongoose');
const { parentPort } = require('worker_threads');
const Item = require('../models/Item');
const site = require('../config/sites.json').etherdice;
const retrieveInfo = require('../scripts/retrieveInfo');
const { MONGODB_URI } = require('../config/config');

(async () => {
    let db = null;
    try {
        // wait for a promise to finish
        const data = await retrieveInfo(site);

        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        db = mongoose.connection;

        const itemToAdd = new Item({ name: site.name, ...data });
        await itemToAdd.save();

        db.close();
        // signal to parent that the job is done
        if (parentPort) parentPort.postMessage('done');
        else process.exit(0);
    } catch (err) {
        db && db.close();
        process.exit(1);
    }
})();
