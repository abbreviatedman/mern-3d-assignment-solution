const express = require('express');

const {
    getIndexPage,
    getAllMonsPage,
} = require('../../controllers/client/viewController');

const router = express.Router();
router.get('/', getIndexPage);
router.get('/allMons', getAllMonsPage);

module.exports = router;