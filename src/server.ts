import express from "express";
import passport from "passport";
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import Keys from "./config/keys";

const app = express();

passport.use(new GoogleStrategy({
    clientID: Keys.googleClientID,
    clientSecret: Keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken: string) => {
    console.log(accessToken)
}));

app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile, email']
}));

const PORT: number = parseInt(<string>process.env.PORT) || 5000;

app.listen(PORT, () => console.log("asdf"));