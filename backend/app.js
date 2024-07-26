const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const dbConnection = require("./database/dbConnect");
const errorMiddleware = require("./error/error")
const reservationRouter = require('./routes/reservationRoute')

const app = express();
dotenv.config();

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['POST'],
    credential: true
}))

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/reservation', reservationRouter);

dbConnection();

// app.use(errorMiddleware);

module.exports = app;