import express from "express";
import { ObjectId } from "mongodb";
const router = express.Router(); // Create a router

import model from "./func.js";

// set up the express app to extend the URLencoded format and use JSON
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// PAGE ROUTES

// ADMIN PATHS
router.get("/", async (request, response) => {
    let series = await model.getSeries();
    response.render("admin/series-list", { title: "Administer series names", menu: series });
});
router.get("/add", async (request, response) => {
    let series = await model.getSeries();
    response.render("admin/series-add", { title: "Add series names", menu: series });
});
router.post("/add/submit", async (request, response) => {
    // console.log(request.body);
    let newSeries = {
        series_id: request.body.series_id,
        title: request.body.title,
        company_id: request.body.company_id,
        release_year: request.body.release_year,
        total_episodes: request.body.total_episodes,
        imdb_rating: request.body.imdb_rating
    };
    await model.addSeries(newSeries);
    response.redirect("/admin/series");
});

router.get("/delete", async(request, response) => {
    let id = request.query.seriesID;
    // console.log(id);
    await model.deleteSeries(id);
    response.redirect("/admin/series");
})

router.get("/edit", async (request, response) => {
    let seriesId = request.query.seriesID;
    if(!seriesId) {
        response.redirect("/admin/series");
    }
    let series = await model.getSeriesById(seriesId);
    let shows = await model.getSeries();
    response.render("admin/series-edit", { title: "Edit series details", menu: shows, series })
});
router.post("/edit/submit", async (request, response) => {
    let seriesId = request.body.seriesID;
    if(!seriesId) {
        return response.redirect("/admin/series");
    }
    let updatedSeries = {
        series_id: Number(request.body.series_id),
        title: request.body.title,
        company_id: request.body.company_id,    
        release_year: request.body.release_year,
        total_episodes: request.body.total_episodes,
        imdb_rating: request.body.imdb_rating
    };

    let filter = { _id: new ObjectId(String(seriesId)) };
    await model.editSeries(filter, updatedSeries);
    response.redirect("/admin/series");
});

router.get("/api/allSeries", async(request, response) => {
    const allSeries = await model.getSeries();
    response.json(allSeries);
})

export default router;