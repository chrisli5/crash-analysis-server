const path = require('path');
require('dotenv').config({ path: path.join(__dirname, `../../.env`) });

module.exports = {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || 'test',
    MONGODB_URI: process.env.MONGODB_URI || 'MONGODB_URI_NOT_FOUND',
};
