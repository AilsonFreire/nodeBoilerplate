import "module-alias/register";
import express from "express";
import mongoose from "mongoose";
import AuthRoutes from "@routes/authRoutes";
import keys  from "@config/keys";
import "@models/User";
import "@services/passport";

mongoose.connect(keys.mongoURI);

const app = express();

AuthRoutes(app);

const PORT: number = parseInt(<string>process.env.PORT) || 5000;

app.listen(PORT, () => console.log("asdf"));