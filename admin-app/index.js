// IMPORT REQUIRED MODULES
import express from "express"; // const express = require("express")
import path from "path"; // to make available methods for path concatenation, etc.
import cors from "cors";

import "dotenv/config"; // load the environment variables and make them available to the entire app

const __dirname = import.meta.dirname; // current app's root directory

const app = express(); //create Express app
const port = process.env.PORT || "8888";

//allow requests from all domains (need it to deploy API)
//this should go after creating the app object
app.use(cors({
    origin: '*'
}));

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "pug");

// set up static path for static files
app.use(express.static(path.join(__dirname, "public")));

import pages from "./components/pages/pageRouter.js";
import seriesAdminPages from "./components/series/router.js";
import companiesAdminPages from "./components/companies/router.js";
app.use("/", pages);
app.use("/admin/series", seriesAdminPages);
app.use("/admin/companies", companiesAdminPages);

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});