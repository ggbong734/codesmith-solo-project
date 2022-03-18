const express = require('express');
const foodController = require('../controllers/foodController');

const router = express.Router();

router.get('/',
    foodController.getIntakeToday,
    (req, res) => res.status(200).json(res.locals.intakeToday)
);

router.post('/',
    foodController.addIntake,
    (req, res) => res.status(200).json(res.locals.newIntake)

)

router.delete('/',
    foodController.deleteIntake,
    (req, res) => res.status(200).json(`intake with id ${req.body.id} deleted successfully`)
);

module.exports = router;
