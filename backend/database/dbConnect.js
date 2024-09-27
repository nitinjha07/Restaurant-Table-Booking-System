const mongoose = require('mongoose');
const dotenv = require('dotenv');

const dbConnection = async () => {
    await mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((err) => {
        console.log(`Some error ocuured ${err}`);
    })
}

module.exports = dbConnection;