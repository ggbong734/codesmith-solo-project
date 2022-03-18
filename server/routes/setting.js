const express = require('express');

const settingController = require('../controllers/settingController');

const router = express.Router();

router.get('/',
    settingController.getLastSetting,
    (req, res) => res.status(200).json(res.locals.lastSetting)
);

router.post('/',
    settingController.addSetting,
    (req, res) => res.status(200).json(res.locals.newSetting)

)

router.delete('/',
    settingController.deleteSetting,
    (req, res) => res.status(200).json('settings deleted successfully')
);

module.exports = router;
