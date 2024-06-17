const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const saveArgument = async (session_id , player, character, argument, value, agree) => {
  const query = 'INSERT INTO arguments_table (session_id, player, character, argument, value, agree) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
  const values = [session_id, player, character, argument, value, agree];
  try {
    const res = await pool.query(query, values);
    return res.rows[0];
  } catch (err) {
    console.error('Error executing query', err.stack);
    throw err;
  }
};

const getArgumentsBySessionId = async (sessionId) => {
  const query = 'SELECT * FROM arguments_table WHERE session_id = $1';
  const values = [sessionId];
  try {
    const res = await pool.query(query, values);
    return res.rows;
  } catch (err) {
    console.error('Error executing query', err.stack);
    throw err;
  }
};



module.exports = {
  saveArgument,
  getArgumentsBySessionId,
};
