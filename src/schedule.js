const path = require('path');

// optional
const ms = require('ms');
const dayjs = require('dayjs');
const Graceful = require('@ladjs/graceful');
const Cabin = require('cabin');

// required
const Bree = require('bree');

const bree = new Bree({
    closeWorkerAfterMs: ms('5m'),
    // logger: new Cabin(),
    // interval: 'at 11:30 pm'
    root: path.join(__dirname, 'jobs'),
    jobs: [
        {
            name: 'archiveBustadice',
        },
        {
            name: 'archiveBustabit',
        },
        {
            name: 'archiveEthercrash',
        },
        {
            name: 'archiveBustabit',
        }
    ],
});

const graceful = new Graceful({ brees: [bree] });
graceful.listen();
// start all jobs (this is the equivalent of reloading a crontab):
bree.start();
