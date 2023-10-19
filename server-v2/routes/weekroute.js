const express = require('express');
const router = express.Router();

const authController = require('./../controllers/authController');
const weekController = require('../controllers/WeekController');
const dayController = require('../controllers/dayController');

// Protect all routes after this middleware
router.use(authController.protect);
router.get('/getAllWeeks/:id', weekController.getAllWeeks);
router.get('/getWeek/:id', weekController.getWeek);

router.get('/day/:weekId', dayController.GetAllDays);
router.post('/day/create', dayController.crateDay);
router.patch('/day/update/', dayController.updateDay);
router.get('/day/getDay/:id', dayController.GetDay);

router.use(authController.restrictTo('student'));
router.post('/create', weekController.crateWeek);
router.patch('/update/:id', weekController.updateWeek);
router.delete('/delete/:id', weekController.deleteWeek);

module.exports = router;
