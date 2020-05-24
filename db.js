const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "",
  host: 5432,
  database: "perntodo"
});

module.exports = pool;