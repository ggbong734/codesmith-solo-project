const db = require('../models/foodModels');
const pgp = require('pg-promise');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
// const { response } = require('../server');

const foodController = {};

foodController.getIntakeToday = async (req, res, next) => {
    try {
        const sqlQuery = `
    SELECT *
    FROM intake
    WHERE DATE(date) = CURRENT_DATE;
    `;
        const data = await db.query(sqlQuery);
        console.log('completed sql query for getIntake');
        res.locals.intakeToday = data.rows;
        return next();
    }
    catch (err) {
        return next({
            log: `Error in foodController.getIntakeToday : ${err}`,
            message: { err: 'Error occurred in foodController.getIntakeToday' },
        });
    }
};

foodController.addIntake = async (req, res, next) => {
    function getFoodInfo(consum) {
        const params = {
            app_id: process.env.EDAM_API_ID,
            app_key: process.env.EDAM_API_KEY,
            nutrition_type: "logging",
            ingr: consum.quantity + " " + consum.unit + " of " + consum.item
        };
        let url = "https://api.edamam.com/api/nutrition-data"
        url += "?" + (new URLSearchParams(params)).toString();
        return fetch(url)
            .then(response => response.json())
            .then(data => data)
            .catch(err => console.log(err));
    }

    console.log('in addIntake');
    try {
        const foodItem = req.body; // consists of quantity, unit, and item keys
        const foodData = await getFoodInfo(foodItem);

        const { quantity, unit, item } = foodItem;
        const {
            calories, totalNutrients, totalDaily
        } = foodData;

        const ca = totalDaily.CA.quantity;
        const chocdf = totalDaily.CHOCDF.quantity;
        const chole = totalDaily.CHOLE.quantity;
        const enerc_kcal = totalDaily.ENERC_KCAL.quantity;
        const fasat = totalDaily.FASAT.quantity;
        const fat = totalDaily.FAT.quantity;
        const fe = totalDaily.FE.quantity;
        const foldfe = totalDaily.FOLDFE.quantity;
        const k = totalDaily.K.quantity;
        const mg = totalDaily.MG.quantity;
        const na = totalDaily.NA.quantity;
        const nia = totalDaily.NIA.quantity;
        const p = totalDaily.P.quantity;
        const procnt = totalDaily.PROCNT.quantity;
        const ribf = totalDaily.RIBF.quantity;
        const thia = totalDaily.THIA.quantity;
        const vitb6a = totalDaily.VITB6A.quantity;
        const vitb12 = totalDaily.VITB12.quantity;
        const vitc = totalDaily.VITC.quantity;
        const vitd = totalDaily.VITD.quantity;
        const zn = totalDaily.ZN.quantity;


        const sqlQuery = `
          INSERT INTO intake (quantity, unit, item, date,
            ca, chocdf, chole, enerc_kcal, fasat, fat, fe, foldfe,
            k, mg, na, nia, p, procnt, ribf, thia, vitb6a, vitb12,
            vitc, vitd, zn)
          VALUES ($1, $2, $3, CURRENT_TIMESTAMP, $4, $5, $6, $7, $8, $9, $10,
                  $11, $12, $13, $14, $15, $16, $17, $18, $19,
                  $20, $21, $22, $23, $24)
          RETURNING id, quantity, unit, item, CURRENT_TIMESTAMP,
          ca, chocdf, chole, enerc_kcal, fasat, fat, fe, foldfe,
          k, mg, na, nia, p, procnt, ribf, thia, vitb6a, vitb12,
          vitc, vitd, zn
          ;`;

        const params = [quantity, unit, item,
            ca, chocdf, chole, enerc_kcal, fasat, fat, fe, foldfe,
            k, mg, na, nia, p, procnt, ribf, thia, vitb6a, vitb12,
            vitc, vitd, zn];

        const newIntakeData = await db.query(sqlQuery, params);
        console.log('returned intake data is: ', newIntakeData.rows[0]);
        res.locals.newIntake = newIntakeData.rows[0];
        // const id = newIntakeData.rows[0].id;

        console.log('moving on to next');
        return next();
    }
    catch (err) {
        return next({
            log: `Error in foodController.addIntake : ${err}`,
            message: { err: 'Error occurred in foodController.addIntake' },
        });
    }
};

foodController.deleteIntake = async (req, res, next) => {
    try {
        //check if passed in id exists
        if (!req.body.id) {
            return next({
                log: 'no id in body for in foodController.deleteIntake',
                message: { err: 'no id given for foodController.deleteIntake' },
            });
        }
        const deleteMainQuery = `
        DELETE FROM intake
        WHERE id = $1
      ;`;
        const params = [req.body.id];

        const delIntakeData = await db.query(deleteMainQuery, params);

        console.log('data from deleted intake is: ', delIntakeData.rows);
        res.locals.deletedIntake = delIntakeData.rows;
        return next();
    }

    catch (err) {
        return next({
            log: `Error in foodController.deleteIntake: ${err}`,
            message: { err: 'Error in foodController.deleteIntake' },
        });
    }
};

module.exports = foodController;
