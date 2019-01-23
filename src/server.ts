import express from "express";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";


const app = express();

passport.use(new GoogleStrategy());

const PORT: number = parseInt(<string>process.env.PORT) || 5000;

app.listen(PORT, "0.0.0.0", () => console.log("asdf")  );