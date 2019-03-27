import passport from "passport";
import { App } from "types/app";

export = (app: App) => {
    app.get("/auth/google", passport.authenticate("google", {
        scope: ["profile", "email"]
    }));

    app.get("/api/logout", (req, res) => {
        req.logout();
        res.send(req.user);
    });

    app.get("/auth/google/callback", passport.authenticate("google"));

    app.get("/api/current_user", (req: any, res: any) => {
        res.send(req.user);
    });
};
