const { createHtmlTagObject } = require('html-webpack-plugin');
const { Pool } = require('pg');

const PG_URI = `postgres://${process.env.POSTGRESQL_USER}:${process.env.POSTGRESQL_PASSWORD}@kashin.db.elephantsql.com/${process.env.POSTGRESQL_USER}`;

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

// https://api.elephantsql.com/console/d4887853-9897-45e3-8ea5-f0c5ef95c71a/queries?
// enter here
// CREATE TABLE intake (
//   id INT PRIMARY KEY,
//   quantity INT,
//   unit VARCHAR(50),
//   item VARCHAR(50),
//   date TIMESTAMP,
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

// Adding some notes about the database here will be helpful for future you or other developers.
// Schema for the database can be found below:
// https://github.com/CodesmithLLC/unit-10SB-databases/blob/master/docs/assets/images/schema.png

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};

// const mongoose = require('mongoose');
// require('dotenv').config();

// const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@unit10database.sfrfi.mongodb.net/nutrition-tracker?retryWrites=true&w=majority`;

// mongoose.connect(MONGO_URI, {
//     // options for the connect method to parse the URI
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // sets the name of the DB that our collections are part of
//     dbName: 'nutrition-tracker'
// })
//     .then(() => console.log('Connected to Mongo DB.'))
//     .catch(err => console.log(err));

// const Schema = mongoose.Schema;
// console.log('Schema initiated mongoose');

// // sets a schema for the 'species' collection
// const speciesSchema = new Schema({
//     name: String,
//     classification: String,
//     average_height: String,
//     average_lifespan: String,
//     hair_colors: String,
//     skin_colors: String,
//     eye_colors: String,
//     language: String,
//     homeworld: String,
//     homeworld_id: {
//         // type of ObjectId makes this behave like a foreign key referencing the 'planet' collection
//         type: Schema.Types.ObjectId,
//         ref: 'planet'
//     }
// });

// // creats a model for the 'species' collection that will be part of the export
// const Species = mongoose.model('species', speciesSchema);

// // exports all the models in an object to be used in the controller
// module.exports = {
//     Species,
//     Planet,
//     Film,
//     Person
// };
