const { PORT } = require('./src/config/config');
const app = require('./src/app');
const bree = require('./src/schedule');

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});

bree.start();
