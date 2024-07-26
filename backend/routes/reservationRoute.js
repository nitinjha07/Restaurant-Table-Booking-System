const express = require('express');
const {sendReservation, getReservation} = require('../controllers/reservation')

const router = express.Router();

router.post("/send", sendReservation);
router.get("/requests", getReservation);

module.exports = router;