const puppeteer = require('puppeteer');

async function retrieveInfo(site) {
    const browser = await puppeteer.launch();

    try {
        const page = await browser.newPage();

        await page.goto(site.link, {
            waitUntil: 'networkidle0',
        });

        const result = await page.evaluate((site) => {
            const values = {};

            [...site.fields].forEach((item) => {
                values[item.name] = document
                    .querySelector(item.selector)
                    .innerText.replace(/[^0-9.]/g, '');
            });

            return values;
        }, site);

        return result;
    } catch (error) {
        throw new Error(error);
    } finally {
        await browser.close();
    }
}

module.exports = retrieveInfo;
