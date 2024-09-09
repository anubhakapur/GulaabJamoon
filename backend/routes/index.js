const express = require('express');
const {userSignUpOneController} = require('../controllers/userSignUpOne.js');
const {verifyEmailController} = require('../controllers/userSignUpOne.js');
const userSignInController = require('../controllers/userSignIn.js');
const userSignUpTwoController = require('../controllers/userSignUpTwo.js');
const userDetailsController = require('../controllers/userDetails.js');
const authToken = require('../middleware/authToken');
const allUsers = require('../controllers/allUsers.js');
const userLogoutController = require('../controllers/userLogout.js');
const createExperiencesController = require('../controllers/createExperience.js');
const allExperienceController = require('../controllers/allExperience.js');
const updateUserController = require('../controllers/updateUserDetails.js');    
const resetPasswordController = require('../controllers/resetPassword.js');

const router = express.Router();

router.post('/signupone', userSignUpOneController);
router.post('/signuptwo', userSignUpTwoController);
router.get('/verify-email/:token', verifyEmailController);
router.post('/signin', userSignInController);
router.get("/user-details",authToken,userDetailsController)
router.post("/update-user-details",authToken,updateUserController)
router.post('/reset-password',resetPasswordController)
router.get("/logout",userLogoutController)


// admin panel
router.post('/experiences',authToken,createExperiencesController);
router.get('/all-experiences',allExperienceController);
router.get("/all-user",authToken,allUsers)

module.exports = router;
