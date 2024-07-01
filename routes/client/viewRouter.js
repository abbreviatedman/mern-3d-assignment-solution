const express = require('express');

const {
    getIndexPage,
    getAllMonsPage,
    getOneMonsPage,
} = require('../../controllers/client/viewController');

const router = express.Router();
router.get('/', getIndexPage);
router.get('/allMons', getAllMonsPage);
router.get('/oneMons/:name', getOneMonsPage)

module.exports = router;