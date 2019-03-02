require("module-alias/register");
import express from "express";
import passport from "passport";
import { Strategy as GoogleStrategy, VerifyCallback } from "passport-google-oauth2"; // <-- IMPORT VERIFY CALLBACK TO USE AS TYPE FROM DONE
import Keys from "@config/keys";


const app = express();

passport.use(new GoogleStrategy({
    clientID: Keys.googleClientID,
    clientSecret: Keys.googleClientSecret,
    callbackURL: "/auth/google/callback",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo" // <--- ADD THIS LINE AFTER ADDING IN INTERFACE OF STRATEGY
}, (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback) => {
    console.log("acessToken", accessToken);
    console.log("refreshToken", refreshToken);
    console.log("Profile", profile);
}));

app.get("/auth/google", passport.authenticate("google", {
    scope: ["profile", "email"]
}));

app.get("/auth/google/callback", passport.authenticate("google"));

const PORT: number = parseInt(<string>process.env.PORT) || 5000;

app.listen(PORT, () => console.log("asdf"));