const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');
const { filterObj } = require('../utils/FilterObject');

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

const sendData = ({ user, statusCode, res }) => {
  res.status(statusCode).json({
    status: 'success',
    data: {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      regno: user.regno,
      role: user.role,
      state: user.state,
      course: user.course,
      localgov: user.localgov,
      organization: user.organization,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }
  });
};

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) Create error if user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This route is not for password updates. Please use /updateMyPassword.',
        400
      )
    );
  }

  // 2) Filtered out unwanted fields names that are not allowed to be updated
  const filteredBody = filterObj(
    req.body,
    'name',
    'phone',
    'regno',
    'state',
    'localgov',
    'organization',
    'course'
  );

  // 3) Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true
  });

  sendData({ statusCode: 200, user: updatedUser, res });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndDelete(req.user.id);

  res.status(204).json({
    status: 'success',
    data: null
  });
});

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not defined! Please use /signup instead'
  });
};

exports.getUser = factory.getOne(User);
exports.getAllUsers = factory.getAll(User);

// Do NOT update passwords with this!
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
