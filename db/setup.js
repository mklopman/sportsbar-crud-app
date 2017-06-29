const pgp = require('pg-promise')();


const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'sports_bars'
});

module.exports = db;