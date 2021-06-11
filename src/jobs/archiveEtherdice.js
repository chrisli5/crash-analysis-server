const { parentPort } = require('worker_threads');
const format = require('pg-format');
const site = require('../config/sites.json').etherdice;
const retrieveInfo = require('../scripts/retrieveInfo');
const db = require('../db');

(async () => {
    try {
        // wait for a promise to finish
        const data = await retrieveInfo(site);

        await db.query(
            format(
                'INSERT INTO etherdice (users, bankRoll, investorProfit, totalBets, totalWagered) VALUES (%L)',
                [
                    data.users,
                    data.bankRoll,
                    data.investorProfit,
                    data.totalBets,
                    data.totalWagered,
                ]
            )
        );

        // signal to parent that the job is done
        if (parentPort) parentPort.postMessage('done');
        else process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
