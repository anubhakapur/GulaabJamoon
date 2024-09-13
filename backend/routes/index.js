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
const corporateController = require('../controllers/corporate.js');
const hostExperienceController = require('../controllers/hostExperience.js');
const popUpController = require('../controllers/popUp.js');
const getExperienceController = require('../controllers/getExperience.js');
const updateExperiencesController = require('../controllers/updateExperiences.js');
const userAllExperiencesController = require('../controllers/userAllExperiences.js');
const changingStatusController = require('../controllers/changingStatus.js');
const loginGoogleController = require('../controllers/loginGoogle.js');
const signUpGoogleController = require('../controllers/signUpGoogle.js');
const adminMiddleware = require('../middleware/adminMiddleWare.js');

const router = express.Router();

router.post('/signupone', userSignUpOneController);
router.post('/signuptwo', userSignUpTwoController);
router.get('/verify-email/:token', verifyEmailController);
router.post('/signin', userSignInController);
router.get("/user-details",authToken,userDetailsController)
router.post("/update-user-details",authToken,updateUserController)
router.post('/reset-password',resetPasswordController)
router.get("/logout",userLogoutController)
router.post("/corporate",corporateController)
router.post("/hostexperience",hostExperienceController)
router.post("/popup",popUpController)
router.get("/experiences/:id",getExperienceController)
router.get('/user',userAllExperiencesController)
router.post('/signUpGoogle',signUpGoogleController)
router.post('/loginGoogle',loginGoogleController)


// admin panel
router.post('/experiences',authToken,createExperiencesController);
router.get('/all-experiences',authToken,allExperienceController);
router.get("/all-user",authToken,allUsers)
router.put("/update-experiences",authToken,updateExperiencesController)
router.put("/change-status",authToken,changingStatusController)

module.exports = router;
