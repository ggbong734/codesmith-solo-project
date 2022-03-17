const db = require('../models/foodModels');
const pgp = require('pg-promise');
const { response } = require('../server');

const foodController = {};

foodController.getCharacters = async (req, res, next) => {
    try {
        const sqlQuery = `
    SELECT p.*, s.name AS species, pl.name AS homeworld
    FROM people p
    LEFT JOIN species s ON p.species_id = s._id
    LEFT JOIN planets pl ON p.homeworld_id = pl._id;
    `;
        const data = await db.query(sqlQuery);
        res.locals.characters = data.rows;

        // query to get people_in_films with person and film ids, person name, and movie title
        const filmsQuery = `
    SELECT p._id AS person_id, p.name, f._id AS film_id, f.title
    FROM people_in_films pif
    JOIN films f ON pif.film_id = f._id
    JOIN people p ON pif.person_id = p._id;
    `;

        const people_in_films = await db.query(filmsQuery);
        const pif = people_in_films.rows;

        //go through each char in characters
        //append all the films and ids they have been in
        for (const char of res.locals.characters) {
            char.films = [];
            for (const pf of pif) {
                if (char._id === pf.person_id) {
                    char.films.push({ id: pf.film_id, title: pf.title });
                }
            }
        }
        return next();
    }
    catch (err) {
        return next({
            log: `Error in foodController.getCharacters : ${err}`,
            message: { err: 'Error occurred in foodController.getCharacters' },
        });
    }
};

module.exports = foodController;


// starWarsController.addCharacter = async (req, res, next) => {
//     try {
//       // write code here
//       // console.log('req.body is: ', req.body);
//       const {
//         name, gender, species, species_id, birth_year, eye_color,
//         skin_color, hair_color, mass, height, homeworld, homeworld_id,
//         films
//       } = req.body;

//       const sqlQuery = `
//       INSERT INTO people (name, mass, hair_color, skin_color,
//         eye_color, birth_year, gender, species_id, homeworld_id,
//         height)
//       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
//       RETURNING _id, name, mass, hair_color, skin_color,
//                 species_id, homeworld_id
//       ;`;

//       const params = [name, mass, hair_color, skin_color,
//         eye_color, birth_year, gender, species_id, homeworld_id,
//         height];

//       const newCharData = await db.query(sqlQuery, params);
//       // console.log('returned data rows is: ', newCharData.rows[0]);
//       res.locals.newCharacter = newCharData.rows[0];
//       res.locals.newCharacter.films = films;
//       const id = newCharData.rows[0]._id;

//       // save each character's films into SQL database
//       for (const film of res.locals.newCharacter.films) {
//         const innerQuery = `
//           INSERT INTO people_in_films ( person_id, film_id)
//           VALUES ($1, $2)
//           `;
//         const params2 = [id, film.id];
//         const savedFilms = await db.query(innerQuery, params2);
//       }

//       console.log('moving on to next');
//       return next();
//     }
//     catch (err) {
//       return next({
//         log: `Error in starWarsController.addCharacter : ${err}`,
//         message: { err: 'Error occurred in starWarsController.addCharacter' },
//       });
//     }
