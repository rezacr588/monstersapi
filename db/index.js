const { Pool } = require("pg");
const credentials = require("../secrets/postgres");
const pool = new Pool(credentials);
module.exports = pool;
