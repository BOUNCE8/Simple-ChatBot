const pg = require('pg');

const db = new pg.Pool({
  host: 'localhost',
  port: 5432,
  // your own names here :)
  username: '', 
  database: '',
  password: ''
});

module.exports = db;
