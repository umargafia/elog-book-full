import express from 'express';
import {
  addWeeks,
  getAllStudents,
  registerStudent,
  studentLogin,
  getWeeks
} from '../controllers/studentController.js';

const StudentRouter = express.Router();

//signup student
StudentRouter.route('/register').post(registerStudent);

// login student
StudentRouter.route('/login').post(studentLogin);

//get all students
StudentRouter.route('/').get(getAllStudents);

//creating student week
StudentRouter.route('/createWeek').post(addWeeks);

//get all weeks
StudentRouter.route('/weeks/:id').get(getWeeks);

export default StudentRouter;
