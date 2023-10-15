const mongoose = require('mongoose');

const daySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: [true, 'Please Provide a User']
    },
    week: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Week',
      require: [true, 'Please Provide a Week']
    },
    day: {
      type: String,
      lowercase: true
    },
    note: String
  },
  {
    timestamps: true
  }
);

const Day = mongoose.model('Day', daySchema);

module.exports = Day;
