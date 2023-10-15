const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const Week = require('../models/WeekModel');

exports.crateWeek = catchAsync(async (req, res, next) => {
  //get the user and week name
  const { name, startDate } = req.body;
  const user = req.user;

  // check if there is week name
  if (!name) {
    return next(new AppError('Please provide week name', 400));
  }

  //create week
  const week = await Week.create({ user: user._id, name, startDate });
  //returm response

  res.status(201).json({
    status: 'success',
    data: {
      id: week._id,
      user: week.user,
      name: week.name,
      startDate: week.startDate,
      createdAt: week.createdAt,
      updatedAt: week.updatedAt
    }
  });
});
