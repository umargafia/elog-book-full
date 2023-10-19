import express from 'express';
import {
  addWeeks,
  getAllStudents,
  registerStudent,
  studentLogin,
  getWeeks,
  deleteStudent,
  deleteWeek,
  updateStudent,
  getWeek
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

//get all weeks and delete weeks
StudentRouter.route('/weeks/:id')
  .get(getWeeks)
  .delete(deleteWeek);

// get week
StudentRouter.route('/week/:id').get(getWeek);

// delete a student
StudentRouter.route('/delete/:id').delete(deleteStudent);

//update student info
StudentRouter.route('/update/:id').patch(updateStudent);

export default StudentRouter;
