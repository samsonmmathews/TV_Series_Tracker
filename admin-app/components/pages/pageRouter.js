import express from "express";
const pageRouter = express.Router(); // Create a router, it doesn't need to be same as the filename 

import model from "../series/func.js";

// HOME PAGE
pageRouter.get("/", async (request, response) => {
    let series = await model.getSeries();
    // console.log(series);
    response.render("index", { title: "Home", menu: series });
});
// ABOUT PAGE
pageRouter.get("/about", async (request, response) => {
    let series = await model.getSeries();
    response.render("about", { title: "About", menu: series });
});

export default pageRouter