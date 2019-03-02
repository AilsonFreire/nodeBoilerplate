export type App = {
    get: (route: string, cb: () => void) => void;
};