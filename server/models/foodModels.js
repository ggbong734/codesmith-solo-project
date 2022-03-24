const { createHtmlTagObject } = require('html-webpack-plugin');
require('dotenv').config();
const { Pool } = require('pg');


const PG_URI = `postgres://${process.env.POSTGRESQL_USER}:${process.env.POSTGRESQL_PASSWORD}@kashin.db.elephantsql.com/${process.env.POSTGRESQL_USER}`;

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});


// https://api.elephantsql.com/console/d4887853-9897-45e3-8ea5-f0c5ef95c71a/queries?
// enter here
// CREATE TABLE intake (
//   id SERIAL PRIMARY KEY,
//   quantity INT,
//   unit VARCHAR(50),
//   item VARCHAR(50),
//   date TIMESTAMP,
//   calories INTEGER,
//   ca NUMERIC(7, 3),
//   chocdf NUMERIC(7, 3),
//   chole NUMERIC(7, 3),
//   enerc_kcal NUMERIC(7, 3),
//   fasat NUMERIC(7, 3),
//   fat NUMERIC(7, 3),
//   fe NUMERIC(7, 3),
//   foldfe NUMERIC(7, 3),
//  k NUMERIC(7, 3),
//  mg NUMERIC(7, 3),
//  na NUMERIC(7, 3),
//  nia NUMERIC(7, 3),
//  p NUMERIC(7, 3),
//  procnt NUMERIC(7, 3),
//  ribf NUMERIC(7, 3),
//  thia NUMERIC(7, 3),
//  vitb6a NUMERIC(7, 3),
//  vitb12 NUMERIC(7, 3),
//  vitc NUMERIC(7, 3),
//  vitd NUMERIC(7, 3),
//  zn NUMERIC(7, 3),
// )

// CREATE TABLE settings (
//     setting_id SERIAL PRIMARY KEY,
//     date TIMESTAMP,
//     user_id INT DEFAULT NULL,
//     gender VARCHAR(50),
//     agegroup VARCHAR(50),
//     activity VARCHAR(50))

// CREATE TABLE users (
//     user_id SERIAL PRIMARY KEY,
//     username VARCHAR,
//     password VARCHAR)
// )


// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
