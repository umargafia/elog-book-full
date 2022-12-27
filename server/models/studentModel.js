import mongoose from 'mongoose';

const StudentSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  name: {
    type: String,
    lowercase: true,
    required: true
  },
  regNo: {
    type: String,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  department: {
    type: String,
    required: true,
    lowercase: true
  },
  course: {
    type: String,
    required: true,
    lowercase: true
  },
  company: {
    type: String,
    lowercase: true
  },
  location: String,
  superVisor: String,
  state: String,
  address: String
});

export const StudentModel = mongoose.model('Student', StudentSchema);

const StudentWeeks = mongoose.Schema({
  weekId: {
    type: String,
    required: [true, 'week id is require']
  },
  name: {
    type: String,
    lowercase: true,
    required: [true, 'week name is require']
  },
  monday: String,
  tuesday: String,
  wednesday: String,
  thursday: String,
  friday: String,
  remark: String
});
export const StudentWeeksModel = mongoose.model('weeks', StudentWeeks);
