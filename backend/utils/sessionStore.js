const session = require("express-session");
const MongoStore = require("connect-mongo");
const config = require("config");
require("dotenv").config();

console.log("dbName: " + process.env.MONGODB_DATABASE_NAME);
console.log("dbPass: " + process.env.MONGODB_PASSWORD);
console.log(
    "sessionDatabaseName: " + process.env.MONGODB_SESSION_DATABASE_NAME
);
console.log("clusterName: " + process.env.MONGODB_CLUSTER_NAME);

const dbUrl = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER_NAME}.s9ocs21.mongodb.net/?retryWrites=true&w=majority`;

console.log("dbUrl: " + dbUrl);

const store = MongoStore.create({
    mongoUrl: dbUrl,
    collection: "sessions",
    stringify: true,
});

module.exports = store;
