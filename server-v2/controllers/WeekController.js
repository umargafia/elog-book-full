const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const Week = require('../models/WeekModel');
const Day = require('../models/dayModel');
const { filterObj } = require('../utils/FilterObject');

const sendData = ({ status, res, week }) => {
  res.status(status).json({
    status: 'success',
    data: week
  });
};

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
  sendData({ status: 201, res, week });
});

exports.getAllWeeks = catchAsync(async (req, res, next) => {
  // get the week id
  const { id } = req.params;

  const week = await Week.find({ user: id });
  sendData({ res, status: 200, week });
});

exports.getWeek = catchAsync(async (req, res, next) => {
  // get the week id
  const { id } = req.params;

  const week = await Week.findOne({ _id: id });

  sendData({ res, status: 200, week });
});

exports.updateWeek = catchAsync(async (req, res, next) => {
  //get the week id and values to be updated
  const { id } = req.params;

  const filteredBody = filterObj(req.body, 'startDate', 'name', 'review');
  //update the week
  const week = await Week.findByIdAndUpdate(id, filteredBody, {
    new: true,
    runValidators: true
  });

  //send output
  sendData({ res, status: 201, week });
});
exports.deleteWeek = catchAsync(async (req, res, next) => {
  // Get the week id from the request parameters
  const { id } = req.params;

  // Delete the days associated with the week
  await Day.deleteMany({ week: id });

  // Delete the week
  const week = await Week.findByIdAndDelete(id);

  // Send a response
  sendData({ res, status: 204, data: week });
});
