import passport from "passport";
import { App } from "types/app";

export = (app: App) => {
    app.get("/auth/google", passport.authenticate("google", {
        scope: ["profile", "email"]
    }));

    app.get("/auth/google/callback", passport.authenticate("google"));
};
