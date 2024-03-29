const { Pool } = require("pg");
require("dotenv").config();
const connectionString = process.env.PSQL_URL;
const pool = new Pool({
  connectionString: connectionString,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
