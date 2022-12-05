import bcrypt from 'bcryptjs';
import { StudentModel, StudentWeeksModel } from '../models/studentModel.js';
import EmailValidator from 'email-validator';

export const validateEmail = val => {
  return EmailValidator.validate(val);
};

//register the student
export const registerStudent = async (req, res) => {
  // get the student information
  const {
    email,
    password,
    name,
    regNo,
    number,
    department,
    course,
    company
  } = req.body;
  if (
    !email ||
    !password ||
    !name ||
    !regNo ||
    !number ||
    !department ||
    !course ||
    !company
  )
    return res.status(400).json({ message: 'All are required' });

  // validating email
  if (validateEmail(email) === false) {
    return res.status(400).json('Invalid email');
  }

  // check if user exist in database
  const emailDuplicate = await StudentModel.findOne({ email });
  if (emailDuplicate)
    return res.status(409).json({ message: 'User already exist' });
  const regNoDuplicate = await StudentModel.findOne({ regNo });
  if (regNoDuplicate)
    return res.status(409).json({ message: 'User already exist' });

  try {
    // encrypting the password
    const salt = await bcrypt.genSalt(10);
    const hashedPwd = await bcrypt.hash(password, salt);

    //create and store new stundet
    const createStudent = await StudentModel.create({
      email,
      regNo,
      password: hashedPwd,
      name,
      number,
      department,
      course,
      company
    });

    if (createStudent) {
      return res.status(201).json({
        _id: createStudent._id,
        name: createStudent.name,
        email: createStudent.email,
        role: createStudent.role,
        regNo: createStudent.regNo,
        number: createStudent.number,
        department: createStudent.department,
        course: createStudent.course,
        company: createStudent.company,
        location: createStudent.location,
        superVisor: createStudent.superVisor,
        state: createStudent.state,
        address: createStudent.address
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//login student
export const studentLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res
        .status(400)
        .json({ message: 'Email and password are required' });

    // validating email
    if (validateEmail(email) === false) {
      return res.status(400).json('Invalid email');
    }

    // check if user exist
    const student = await StudentModel.findOne({ email });
    if (!student)
      return res
        .status(404)
        .json({ message: `student with this email: ${email} is not found` });

    //validating student password
    const validatePassword = await bcrypt.compare(password, student.password);
    //log student in
    if (validatePassword) {
      return res.status(200).json({
        _id: student._id,
        name: student.name,
        email: student.email,
        role: student.role,
        regNo: student.regNo,
        number: student.number,
        department: student.department,
        course: student.course,
        company: student.company,
        location: student.location,
        superVisor: student.superVisor,
        state: student.state,
        address: student.address
      });
    } else {
      return res.status(409).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.log(error);
  }
};

//get all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await StudentModel.find();
    return res.status(200).json(students);
  } catch (error) {
    console.log(error);
  }
};

//update studentInfo
export const updateStudent = async (req, res) => {
  const id = req.params.id;

  try {
    const update = await StudentModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json(update);
  } catch (error) {
    console.log(error);
  }
};

//add weeks
export const addWeeks = async (req, res) => {
  const { name, weekId } = req.body;

  try {
    //create the week
    await StudentWeeksModel.create({
      name,
      weekId
    });
    return res.status(200).json({
      name: name,
      id: weekId
    });
  } catch (error) {
    console.log(error);
  }
};

//get weeks
export const getWeeks = async (req, res) => {
  const id = req.params.id;
  try {
    const weeks = await StudentWeeksModel.find({ weekId: id });

    return res.status(200).json({
      status: 'success',
      noOfWeeks: weeks.length,
      data: { weeks }
    });
  } catch (error) {
    console.log(error);
  }
};

//get week
export const getWeek = async (req, res) => {
  const id = req.params.id;
  try {
    const weeks = await StudentWeeksModel.find({_id: id });

    return res.status(200).json({
      status: 'success',
      noOfWeeks: weeks.length,
      data: { weeks }
    });
  } catch (error) {
    console.log(error);
  }
};

//delete student
export const deleteStudent = async (req, res) => {
  const id = req.params.id;
  try {
    await StudentModel.findByIdAndRemove(id);
    res.status(204).json({
      status: 'success'
    });
  } catch (error) {
    console.log(error);
  }
};

// delete weeks
export const deleteWeek = async (req, res) => {
  const id = req.params.id;
  try {
    await StudentWeeksModel.findByIdAndRemove(id);
    res.status(204).json({
      status: 'success'
    });
  } catch (error) {
    console.log(error);
  }
};
