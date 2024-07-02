const express = require('express');

const {
    getIndexPage,
    getAllMonsPage,
    getOneMonsPage,
    getCreateMonsPage,
    getUpdateMonsPage,
} = require('../../controllers/client/viewController');

const router = express.Router();
router.get('/', getIndexPage);
router.get('/allMons', getAllMonsPage);
router.get('/oneMon/:name', getOneMonsPage);
router.get('/createMon', getCreateMonsPage);
router.get('/updateMon/:name', getUpdateMonsPage)

module.exports = router;