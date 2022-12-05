import bcrypt from 'bcryptjs';
import { StaffModel } from '../models/staffModel.js';
import { validateEmail } from './studentController.js';

//register the student
export const registerStaff = async (req, res) => {
  // get the student information
  const { email, password, name, phoneNumber, role, position } = req.body;
  if (!email || !password || !name || !phoneNumber || !role || !position)
    return res.status(400).json({ message: 'All are required' });

  // validating email
  if (validateEmail(email) === false) {
    return res.status(400).json({ message: 'Invalid email' });
  }

  // check if user exist in database
  const emailDuplicate = await StaffModel.findOne({ email });
  if (emailDuplicate)
    return res.status(409).json({ message: 'User already exist' });

  try {
    // encrypting the password
    const salt = await bcrypt.genSalt(10);
    const hashedPwd = await bcrypt.hash(password, salt);

    //create and store new stundent
    const createStudent = await StaffModel.create({
      email,
      password: hashedPwd,
      name,
      phoneNumber,
      role,
      position
    });

    if (createStudent) {
      return res.status(201).json({
        _id: createStudent._id,
        name: createStudent.name,
        email: createStudent.email,
        role: createStudent.role,
        phoneNumber: createStudent.regNo,
        position: createStudent.position
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// login staff
export const loginStaff = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: 'Email and password are required' });

  // validating email
  if (validateEmail(email) === false) {
    return res.status(400).json('Invalid email');
  }

  //check if user exist
  const user = await StaffModel.findOne({ email });
  if (!user)
    return res
      .status(404)
      .json({ message: `User with this email: ${email} is not found` });

  try {
    //validating user password
    const validatePassword = await bcrypt.compare(password, user.password);

    //log user in
    if (validatePassword) {
      return res.status(200).json({
        _id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
        phoneNumber: user.phoneNumber,
        position: user.position
      });
    } else {
      return res.status(409).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllStaff = async (req, res) => {
  try {
    const staffs = await StaffModel.find();
    return res.status(200).json(staffs);
  } catch (error) {
    console.log(error);
  }
};

// delete staff

export const deleteStaff = async (req, res) => {
  const id = req.params.id;
  try {
    await StaffModel.findByIdAndRemove(id);
    res.status(204).json({
      status: 'success'
    });
  } catch (error) {
    console.log(error);
  }
};
