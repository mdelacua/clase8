const express = require('express');
const router = express.Router();
const {
    home
} = require('../controllers/userHomeController');


router.get('/', home);

module.exports = router;

