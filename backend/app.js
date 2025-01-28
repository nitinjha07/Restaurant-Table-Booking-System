const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const dbConnection = require("./database/dbConnect");
const reservationRouter = require('./routes/reservationRoute')

const app = express();
dotenv.config();

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['POST', 'GET'],
    credential: true
}))

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/reservation', reservationRouter);

dbConnection();

module.exports = app;