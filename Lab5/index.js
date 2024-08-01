import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameters.js";
const Lab5 = (app) => {
    app.get("/lab5/welcome", (req, res) => {
        res.send("Welcome to Assignment 5!");
    });
    app.get("/lab5/hello", (req, res) => {
        res.send("Hello World!");
    });
    PathParameters(app);
    QueryParameters(app);

};
export default Lab5;