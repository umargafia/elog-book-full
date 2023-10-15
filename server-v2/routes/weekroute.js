const express = require('express');
const router = express.Router();

const authController = require('./../controllers/authController');
const weekController = require('../controllers/WeekController');

// Protect all routes after this middleware
router.use(authController.protect);
router.use(authController.restrictTo('student'));

router.post('/create', weekController.crateWeek);

module.exports = router;
