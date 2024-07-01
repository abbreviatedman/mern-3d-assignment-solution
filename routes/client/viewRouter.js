const express = require('express');

const { getIndexPage } = require('../../controllers/client/viewController');

const router = express.Router();
router.get('/', getIndexPage);

module.exports = router;