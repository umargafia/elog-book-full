const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const Day = require('../models/dayModel');
const { filterObj } = require('../utils/FilterObject');

const sendData = ({ status, res, week }) => {
  res.status(status).json({
    status: 'success',
    data: week
  });
};

exports.crateDay = catchAsync(async (req, res, next) => {
  //get the user, week id, day and note
  const user = req.user;
  const { week, day } = req.body;

  // check if there is week and day
  if (!week) {
    return next(new AppError('Please provide week', 400));
  }
  if (!day) {
    return next(new AppError('Please provide day', 400));
  }

  // create a day
  const newDay = await Day.create({ user: user._id, week, day });
  //send output
  sendData({ res, status: 201, week: newDay });
});

exports.updateDay = catchAsync(async (req, res, next) => {
  //get the day and the note
  const { id, note } = req.body;

  // create the note
  const day = await Day.findByIdAndUpdate(
    id,
    { note },
    {
      new: true,
      runValidators: true
    }
  );

  // send reques
  sendData({ res, status: 201, week: day });
});

exports.GetAllDays = catchAsync(async (req, res, next) => {
  //get the week id
  const { weekId } = req.params;
  const user = req.user;

  const days = await Day.find({ week: weekId, user });

  sendData({ res, status: 200, week: days });
});
