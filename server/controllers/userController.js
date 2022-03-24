const db = require('../models/foodModels');
const pgp = require('pg-promise');
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const userController = {};

userController.createUser = async (req, res, next) => {
    try {
        const {
            username, password
        } = req.body;

        if (!username || !password) {
            return next('Missing username or password in userController.createUser')
        }
        const sqlQuery = `
        INSERT INTO users (username, password)
        VALUES ($1, $2)
            `;

        let salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
        let hash = bcrypt.hashSync(password, salt);

        const params = [username, hash];
        console.log('hash to save: ', hash);

        const data = await db.query(sqlQuery, params);
        return next();
    }
    catch (err) {
        return next({
            log: `Error in userController.createUser : ${err}`,
            message: { err: 'Error occurred in userController.createUser' },
        });
    }
};

userController.verifyUser = async (req, res, next) => {
    try {
        const {
            username, password
        } = req.body;

        const sqlQuery = `
          SELECT password
          FROM users
          WHERE username = $1
          ;`;

        const params = [username];

        const retrievedPassword = await db.query(sqlQuery, params);

        console.log('database hash is: ', retrievedPassword.rows[0].password);

        let verification = bcrypt.compareSync(password, retrievedPassword.rows[0].password);
        console.log('result of verification is: ', verification);
        res.locals.verifyUser = verification;

        console.log('verifyUser complete, result is: ', res.locals.verifyUser);
        return next();
    }
    catch (err) {
        return next({
            log: `Error in userController.verifyUser : ${err}`,
            message: { err: 'Error occurred in userController.verifyUser' },
        });
    }
};

module.exports = userController;
