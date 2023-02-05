const { Pool } = require("pg");
require("dotenv").config();
<<<<<<< HEAD

const pool = new Pool({
  user: "anurag",
  database: "hostelhq",
  password: "pFT5yRjnM3LdTLEuFDzscE6b2F4Abcsf",
  port: 5432,
  host: "dpg-cfeeiqun6mpu0ucm43u0-a.singapore-postgres.render.com",
  max: 5,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
  ssl: true,
=======
const connectionString = process.env.PSQL_URL;
const pool = new Pool({
  connectionString: connectionString,
>>>>>>> origin
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
