import { MongoClient, ObjectId } from "mongodb"; // Import the MongoClient class from mongodb driver and the ObjectId class (for converting to an ObjectId type) from the driver

// CONNECT TO THE DB
const dbUrl = process.env.MONGOURI;
const db = new MongoClient(dbUrl).db("tvseries_db");

// DB FUNCTIONS
// Function to get all the tv series in the collection
async function getSeries() {
    let results = db.collection("series").find({});
    return await results.toArray();
}

// Function to get one series by ID
async function getSeriesById(id) {
    let result = await db.collection("series").findOne({ _id: new ObjectId(String(id)) });
    return result;
}

// Function to add one tv series into series collection
async function addSeries(series) {
    let status = await db.collection("series").insertOne(series);
    console.log("Series added successfully");
}

// Function to delete one tv series from the series collection which matches a given _id.
async function deleteSeries(id) {
    let deleteQuery = { _id: new ObjectId(String(id)) };
    let result = await db.collection("series").deleteOne(deleteQuery);
    if (result.deletedCount === 1)
    {
        console.log("Series deleted successfully");
    }
}

// Function to edit one tv series into the series collection
async function editSeries(filter, series) {
    let status = await db.collection("series").updateOne(filter, { $set: series });
    if(status.modifiedCount === 1) {
        console.log("Link updated successfully");
    }
    else {
        console.log("No changes were made to the series");
    }
}

export default {
    getSeries,
    getSeriesById,
    addSeries,
    deleteSeries,
    editSeries
};