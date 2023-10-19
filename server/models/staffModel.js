import mongoose from 'mongoose';

const StaffSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  name: {
    type: String,
    lowercase: true,
    required: true
  },
  phoneNumber: {
    type: String,
    lowercase: true,
    required: true
  },
  role: {
    type: String,
    required: true,
    default: 'staff'
  },
  position: {
    type: String,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  }
});

export const StaffModel = mongoose.model('Staff', StaffSchema);
