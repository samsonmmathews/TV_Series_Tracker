import { MongoClient, ObjectId } from "mongodb"; // Import the MongoClient class from mongodb driver and the ObjectId class (for converting to an ObjectId type) from the driver

// CONNECT TO THE DB
const dbUrl = process.env.MONGOURI;
const db = new MongoClient(dbUrl).db(process.env.DB_NAME);

// DB FUNCTIONS
// Function to get all the tv companies in the collection
async function getCompanies() {
    let results = db.collection("companies").find({});
    return await results.toArray();
}

// Function to get one company by ID
async function getCompanyById(id) {
    let result = await db.collection("companies").findOne({ _id: new ObjectId(String(id)) });
    return result;
}

// Function to add one company into companies collection
async function addCompany(companies) {
    let status = await db.collection("companies").insertOne(companies);
    console.log("Company added successfully");
}

// Function to delete one company from the companies collection which matches a given _id.
async function deleteCompany(id) {
    let deleteQuery = { _id: new ObjectId(String(id)) };
    let result = await db.collection("companies").deleteOne(deleteQuery);
    if (result.deletedCount === 1)
    {
        console.log("Company deleted successfully");
    }
}

// Function to edit one company into the companies collection
async function editCompany(filter, company) {
    let status = await db.collection("companies").updateOne(filter, { $set: company });
    if(status.modifiedCount === 1) {
        console.log("Link updated successfully");
    }
    else {
        console.log("No changes were made to the company");
    }
}

export default {
    getCompanies,
    getCompanyById,
    addCompany,
    deleteCompany,
    editCompany
};