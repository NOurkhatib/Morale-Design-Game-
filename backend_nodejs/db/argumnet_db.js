// pg is the official PostgreSQL client for Node.js.
// It provides methods to connect to a PostgreSQL database, execute SQL queries, and manage database transactions.
// You use pg to interact with your PostgreSQL database directly from your Node.js application.


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

// // Function to execute a query on the database
// const query = (text, params) => {
//   return pool.query(text, params);
// };

// module.exports = {
//   query,
// };

// const { Pool } = require('pg');
// require('dotenv').config();

// // Create a new pool instance with the connection details
// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

// // Function to save an argument to the database
// const saveArgument = async (text) => {
//   const query = 'INSERT INTO arguments (text) VALUES ($1) RETURNING *';
//   const values = [text];
//   try {

//     const res = await pool.query(query, values);
//     return res.rows[0];
//   } catch (err) {

//     console.error('Error executing query', err.stack);
//     throw err;
//   }
// };

// // Export the saveArgument function
// module.exports = {
//   saveArgument,
// };



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
  const query = 'INSERT INTO arguments (player, character, argument, value, agree) VALUES ($1, $2, $3, $4, $5) RETURNING *';
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
