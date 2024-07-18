const { ErrorHandler } = require('../error/error');
const reservation = require('../models/reservationSchema');

const sendReservation = async(req, res, next) => {
    const {firstName, lastName, email, date, time, phone} = req.body;
    if(!firstName || !lastName || !email || !date || !time || !phone){
        return next(new ErrorHandler("Please fill full reservation form", 400))
    }

    try{
        await reservation.create({firstName, lastName, email, date, time, phone});
        res.status(201).json({
            success: true,
            message: "Reservation sent successfully",
        });
    }
    catch(error){
        console.log("Error occured ", error.message);
        next(error);
    }
}

module.exports = sendReservation;