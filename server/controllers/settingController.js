const db = require('../models/foodModels');
const pgp = require('pg-promise');

const settingController = {};

settingController.getLastSetting = async (req, res, next) => {
    try {
        const sqlQuery = `
            SELECT *
            FROM settings
            ORDER BY date DESC
            LIMIT 1;
            `;
        const data = await db.query(sqlQuery);
        res.locals.lastSetting = data.rows[0];
        return next();
    }
    catch (err) {
        return next({
            log: `Error in settingController.getLastSetting : ${err}`,
            message: { err: 'Error occurred in settingController.getLastSetting' },
        });
    }
};

settingController.addSetting = async (req, res, next) => {
    try {
        const {
            gender, age, activity
        } = req.body;

        const sqlQuery = `
          INSERT INTO settings (date, gender, agegroup, activity)
          VALUES (CURRENT_TIMESTAMP, $1, $2, $3)
          RETURNING setting_id, date, user_id, gender, agegroup, activity
          ;`;

        const params = [gender, age, activity];

        const newSettingData = await db.query(sqlQuery, params);
        console.log('returned setting data is: ', newSettingData.rows[0]);
        res.locals.newSetting = newSettingData.rows[0];
        // const id = newsettingData.rows[0].id;

        console.log('addSetting complete');
        return next();
    }
    catch (err) {
        return next({
            log: `Error in settingController.addSetting : ${err}`,
            message: { err: 'Error occurred in settingController.addSetting' },
        });
    }
};

settingController.deleteSetting = async (req, res, next) => {
    try {
        const deleteMainQuery = `
            TRUNCATE settings
        ;`;
        await db.query(deleteMainQuery);
        return next();
    }

    catch (err) {
        return next({
            log: `Error in settingController.deleteSetting: ${err}`,
            message: { err: 'Error in settingController.deleteSetting' },
        });
    }
};

module.exports = settingController;
