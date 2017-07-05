const pgp = require('pg-promise')();

// this is another way of doing it
const db = pgp(process.env.DATABASE_URL ||
	'postgres://michaelklopman@localhost:5432/sports_bars');

module.exports = db;
