const mongoose = require('mongoose');

const weekSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: [true, 'Please Provide a User']
    },
    name: {
      type: String,
      lowercase: true,
      require: [true, 'Please Provide Week name']
    },
    review: String,
    startDate: Date
  },
  {
    timestamps: true
  }
);

const Week = mongoose.model('Week', weekSchema);

module.exports = Week;
