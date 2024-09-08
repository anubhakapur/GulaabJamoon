const express = require('express');
const passport = require('passport');
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const userModel = require("../models/userModel");

const authRouter = express.Router();

passport.use(
    new OAuth2Strategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        callbackURL:"/auth/google/callback",
        scope:["profile","email"]
    },
    async(accessToken,refreshToken,profile,done)=>{
        try {
            let user = await userModel.findOne({googleId:profile.id});

            if(!user){
                user = new userModel({
                    googleId:profile.id,
                    name:profile.displayName,
                    email:profile.emails[0].value,
                    isVerified:true
                });

                await user.save();
            }

            return done(null,user)
        } catch (error) {
            return done(error,null)
        }
    }
    )
)

passport.serializeUser((user,done)=>{
    done(null,user);
})

passport.deserializeUser((user,done)=>{
    done(null,user);
});

authRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

authRouter.get("/google/callback",passport.authenticate("google",{
    successRedirect:"http://localhost:5173/signuptwo",
    failureRedirect:"http://localhost:5173/signupone"
}))

module.exports = authRouter;