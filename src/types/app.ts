export type App = {
    get: (route: string, cb: (req?: any, res?: any) => void) => void;
};