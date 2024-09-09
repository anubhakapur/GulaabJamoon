const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    // required: true,
  },
  isVerified: {
    type: Boolean,
    default: false
  },
   googleId: {
    type: String,
    unique: true,
    sparse: true, // Allows multiple users without googleId
  },
  verificationToken: String,
  verificationTokenExpiry: Date,
  name: {
    type: String,
    trim: true
  },
  phoneNumber: {
    type: String,
    trim: true
  },
  dateOfBirth: Date,
  gender: {
    type: String,
    // lowercase: true,
    enum: ['Male', 'Female', 'Other']
  },
  occupation: {
    type: String,
    trim: true
  },
  role : String
}, {
  timestamps: true
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;