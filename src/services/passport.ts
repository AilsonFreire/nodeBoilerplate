import passport from "passport";
import { Strategy as GoogleStrategy, VerifyCallback } from "passport-google-oauth2"; // <-- IMPORT VERIFY CALLBACK TO USE AS TYPE FROM DONE
import mongoose from "mongoose";
import { User } from "types/User";

const  keys = require("@config/keys");
const User = mongoose.model("users");

passport.serializeUser((user: User, done) => {
   done(undefined, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => {
        // @ts-ignore
        done(undefined, user);
    });
});


passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo" // <--- ADD THIS LINE AFTER ADDING IN INTERFACE OF STRATEGY
}, (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback) => {
    User.findOne({ googleId: profile.id })
        .then(user => {
            if (user) {
                done(undefined, user);
            } else {
                new User({ googleId: profile.id, created_at: new Date() }).save()
                    .then(user => done(undefined, user));
            }
        });
}));