import "module-alias/register";
import express from "express";
import mongoose from "mongoose";
import AuthRoutes from "@routes/authRoutes";
import cookieSession from "cookie-session";
import passport from "passport";
import keys from "@config/keys";
import "@models/User";
import "@services/passport";

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());

app.use(passport.session());

AuthRoutes(app);

const PORT: number = parseInt(<string>process.env.PORT) || 5000;

app.listen(PORT, () => { console.log("entrou"); });