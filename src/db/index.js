const { Pool } = require('pg');
const { DATABASE_URL } = require('../config/config');

const pool = new Pool({
    connectionString: DATABASE_URL,
});

module.exports = {
    async query(text, params) {
      const start = Date.now()
      const res = await pool.query(text, params)
      const duration = Date.now() - start
      console.log('executed query', { text, duration, rows: res.rowCount })
      return res
    }
}
