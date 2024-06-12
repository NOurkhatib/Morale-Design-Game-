// CREATE TABLE arguments_table (
//     id SERIAL PRIMARY KEY,
//     session_id VARCHAR(50),
//     player VARCHAR(50),
//     character VARCHAR(50),
//     argument TEXT,
//     value TEXT,
//     agree BOOLEAN
//   );
//-----------------------------------------------------------------
//-----------------------------------------------------------------

// const { Pool } = require('pg');

// // Create a new pool instance to manage connections to the PostgreSQL database
// const pool = new Pool({
//   user: 'postgres',          // Database user
//   host: 'localhost',         // Database host
//   database: 'mydatabase',    // Name of the database
//   password: 'yourpassword',  // Password for the database user
//   port: 5432,                // Port number (default is 5432)
// });


const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const saveArgument = async (player, character, argument, value, agree) => {
  const query = 'INSERT INTO arguments_table (player, character, argument, value, agree) VALUES ($1, $2, $3, $4, $5) RETURNING *';
  const values = [player, character, argument, value, agree];
  try {
    const res = await pool.query(query, values);
    return res.rows[0];
  } catch (err) {
    console.error('Error executing query', err.stack);
    throw err;
  }
};

module.exports = {
  saveArgument,
};
