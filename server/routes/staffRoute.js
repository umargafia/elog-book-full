import express from 'express';
import {
  registerStaff,
  loginStaff,
  getAllStaff
} from '../controllers/staffController.js';

const StaffRouter = express.Router();

// register staff
StaffRouter.route('/register').post(registerStaff);

//login staff
StaffRouter.route('/login').post(loginStaff);

//get all staffs
StaffRouter.route('/').get(getAllStaff);
export default StaffRouter;
