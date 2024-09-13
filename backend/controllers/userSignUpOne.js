const crypto = require('crypto');
const userModel = require('../models/userModel');
const sendEmail = require('../utils/sendEmail');  // Your email sending function
const { error } = require('console');
const bcrypt = require('bcryptjs');

const salt = 10

// Signup Controller (Part 1)
const userSignUpOneController = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("email", email)
    console.log("password", password)
    const existingUser = await userModel.findOne({ email });
    
    if (existingUser) {
      return res.status(400).json({ 
        message: 'User already exists', 
        sucess: false,
        error: true
    });
    }

    const hashedPassword = await bcrypt.hash(password, salt);
    const verificationToken = crypto.randomBytes(32).toString('hex');
    const user = new userModel({
      email,
      password: hashedPassword,  // Remember to hash this password
      verificationToken,
      verificationTokenExpiry: Date.now() + 3600000, // 1 hour expiry
      role: "GENERAL"
    });

    await user.save();

    const verificationUrl = `http://localhost:8080/api/verify-email/${verificationToken}`;
    await sendEmail(email, 'Please verify your email address',
       `<div style="font-family: Arial, sans-serif; color: #333;">
        <h2>Hello!</h2>
        <p>Thank you for signing up! Please verify your email address by clicking the link below:</p>
        <a href="${verificationUrl}" style="padding: 10px 20px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 5px;">Verify Email</a>
        <p>If you didn't sign up for this account, please ignore this email.</p>
      </div>`);

    res.status(200).json({ 
        message: 'Verification email sent',
        data : user, 
        sucess: true,
        error: false
    });
  } catch (err) {
    res.status(500).json({ 
        message: 'Server error',
        sucess: false, 
        error: true
    });
  }
};

// Email Verification Controller
const verifyEmailController = async (req, res) => {
  try {
    console.log("function called")
    const { token } = req.params;
    const user = await userModel.findOne({
      verificationToken: token,
      verificationTokenExpiry: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ 
        message: 'Invalid or expired token',
        sucess: false, 
        error: true
    });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiry = undefined;

    await user.save();

    return res.redirect('http://localhost:8080/api/signuptwo?verified=true');
    
    res.status(200).json({ 
        message: 'Email verified', 
        sucess: true,
        error: false
    });
  } catch (err) {
    res.status(500).json({ 
        message: 'Server error', 
        sucess: false,
        error: true
    });
  }
};

module.exports = { userSignUpOneController, verifyEmailController };
