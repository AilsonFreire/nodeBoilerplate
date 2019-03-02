import "module-alias/register";
import express from "express";
import "@services/passport";
import AuthRoutes from "@routes/authRoutes";

const app = express();

AuthRoutes(app);

const PORT: number = parseInt(<string>process.env.PORT) || 5000;

app.listen(PORT, () => console.log("asdf"));