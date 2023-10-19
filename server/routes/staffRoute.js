import express from 'express';
import {
  registerStaff,
  loginStaff,
  getAllStaff,
  deleteStaff
} from '../controllers/staffController.js';

const StaffRouter = express.Router();

// register staff
StaffRouter.route('/register').post(registerStaff);

//login staff
StaffRouter.route('/login').post(loginStaff);

//get all staffs
StaffRouter.route('/').get(getAllStaff);

//delete staff
StaffRouter.route('/delete/:id').delete(deleteStaff);

export default StaffRouter;
