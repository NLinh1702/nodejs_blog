const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

// siteController
router.get('/',siteController.index);

module.exports = router;