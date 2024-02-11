const mongoose = require("mongoose");
const config = require("config");

// mongodb+srv://<username>:<password>@cluster0.ssslp.mongodb.net/?retryWrites=true&w=majority
require("dotenv").config();

// console.log("dbName: " + process.env.MONGODB_DATABASE_NAME);
// console.log("dbPass: " + process.env.MONGODB_PASSWORD);
// console.log(
//     "sessionDatabaseName: " + process.env.MONGODB_SESSION_DATABASE_NAME
// );
// console.log("clusterName: " + process.env.MONGODB_CLUSTER_NAME);

// const dbUrl = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER_NAME}.s9ocs21.mongodb.net/?retryWrites=true&w=majority`;

const dbUrl = `mongodb+srv://vardhamankalloli:${process.env.MONGODB_PASSWORD}@humanwithtails.s9ocs21.mongodb.net/?retryWrites=true&w=majority`;

// console.log("dbUrl: " + dbUrl);

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl);
        console.log("Database connected...");
    } catch (error) {
        console.log(error.message);
        setTimeout(connectDB, 5000);
    }
};

module.exports = connectDB;
