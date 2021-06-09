const mongoose = require('mongoose');
const { MONGODB_URI, PORT } = require('./src/config/config');
const app = require('./src/app');

mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server listening at http://localhost:${PORT}`);
      });
})
