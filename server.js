const { PORT } = require('./src/config/config');
const app = require('./src/app');

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
