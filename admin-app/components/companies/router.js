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
    let companies = await model.getCompanies();
    response.render("admin/companies-list", { title: "Administer company names", menu: companies });
});
router.get("/add", async (request, response) => {
    let company = await model.getCompanies();
    response.render("admin/companies-add", { title: "Add company names", menu: company });
});
router.post("/add/submit", async (request, response) => {
    // console.log(request.body);
    let newCompany = {
        company_id: request.body.company_id,
        name: request.body.name
    };
    await model.addCompany(newCompany);
    response.redirect("/admin/companies");
});

router.get("/delete", async(request, response) => {
    let id = request.query.companyID;
    // console.log(id);
    await model.deleteCompany(id);
    response.redirect("/admin/companies");
})

router.get("/edit", async (request, response) => {
    let companyId = request.query.companyID;
    if(!companyId) {
        response.redirect("/admin/companies");
    }
    let companies = await model.getCompanyById(companyId);
    let shows = await model.getCompanies();
    response.render("admin/companies-edit", { title: "Edit company details", menu: shows, companies })
});
router.post("/edit/submit", async (request, response) => {
    let companyId = request.body.companyID;
    if(!companyId) {
        return response.redirect("/admin/companies");
    }
    let updatedCompany = {
        company_id: Number(request.body.company_id),
        name: request.body.name
    };

    let filter = { _id: new ObjectId(String(companyId)) };
    await model.editCompany(filter, updatedCompany);
    response.redirect("/admin/companies");
});

export default router;