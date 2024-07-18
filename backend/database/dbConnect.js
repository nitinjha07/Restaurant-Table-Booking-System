const mongoose = require('mongoose');
const dotenv = require('dotenv');

const dbConnection = () => {
    mongoose.connect(process.env.DB_URL, {
        dbName: "RESTAURANT",
        family: 4
    })
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((err) => {
        console.log(`Some error ocuured ${err}`);
    })
}

module.exports = dbConnection;