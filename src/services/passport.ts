import passport from "passport";
import { Strategy as GoogleStrategy, VerifyCallback } from "passport-google-oauth2"; // <-- IMPORT VERIFY CALLBACK TO USE AS TYPE FROM DONE
import mongoose from "mongoose";
import Keys from "@config/keys";

const User = mongoose.model("users");


passport.use(new GoogleStrategy({
    clientID: Keys.googleClientID,
    clientSecret: Keys.googleClientSecret,
    callbackURL: "/auth/google/callback",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo" // <--- ADD THIS LINE AFTER ADDING IN INTERFACE OF STRATEGY
}, (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback) => {
        new User({ googleId: profile.id, created_at: new Date() }).save();
}));