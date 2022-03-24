const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.post('/create',
    userController.createUser,
    (req, res) => res.status(200).json('signup successful')
);

router.post('/login',
    userController.verifyUser,
    (req, res) => res.status(200).json(res.locals.verifyUser)

)


module.exports = router;
