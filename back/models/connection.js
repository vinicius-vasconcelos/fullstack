const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: 'password',
  host: 'localhost',
  database: 'Pokemon',
});

module.exports = connection;
